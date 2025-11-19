from flask_restx import Namespace, Resource, fields, Model
from apis.auth import authorizations

def create_api_students(db_manager):
    
    api: Namespace = Namespace("students", description="Student namespace", authorizations=authorizations)

    student_model: Model = api.model('StudentModel', {
        'firstname': fields.String(required=True, description='Student first name'),
        'lastname': fields.String(required=True, description='Student last name'),
        'status': fields.String(required=True, description='Student status')})
    
    class Student(Resource):

        def get(self):
            students = self.db.students.GetAll()
            return students
