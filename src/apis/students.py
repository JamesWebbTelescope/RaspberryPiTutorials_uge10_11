from flask_restx import Namespace, Resource, fields, Model
from apis.auth import authorizations

def create_api_students(db_manager):
    
    api: Namespace = Namespace("students", description="Student namespace", authorizations=authorizations)

    student_model: Model = api.model('StudentModel', {
        'firstname': fields.String(required=True, description='Student first name'),
        'lastname': fields.String(required=True, description='Student last name'),
        'status': fields.String(required=True, description='Student status')})
    

    @api.route("/")
    class Student(Resource):

        @api.doc('Get all students')
        def get(self):
            students = db_manager.students.GetAll()
            return students
        
        @api.expect(student_model)
        def post(self):
            firstname = api.payload['firstname']
            lastname = api.payload['lastname']
            status = api.payload['status']
            result = db_manager.students.Create(firstname, lastname, status)
            return result

    
    return api
