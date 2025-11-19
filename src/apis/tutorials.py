from flask_restx import Namespace, Resource, fields, Model
from apis.auth import authorizations

def create_api_tutorials(db_manager):

    api: Namespace = Namespace("tutorials", description="tutorial namespace", authorizations=authorizations)

    tutorial_model: Model = api.model("Tutorials", {'ID': fields.Integer(required=True, description="The course ID"),
                                                    'name': fields.String(required=True, description="Name of the tutorial"),
                                                    'link': fields.String(required=True, description="Link for the tutorial")})
    
    delete_tutorial_model: Model = api.model("Delete tutorial", {'ID': fields.Integer(required=True, description="The course ID")})
    
    @api.route("/")
    class Tutorials(Resource):

        @api.doc("Get all tutorials")
        def get(self):
            tutorials = db_manager.tutorials.GetAll()
            return tutorials
        
        @api.doc("Add new tutorial")
        @api.expect(tutorial_model)
        def post(self):
            name = api.payload['name']
            link = api.payload['link']
            tutorials = db_manager.tutorials.Create(name, link)
            return tutorials
        
        @api.doc("Update tutorials")
        @api.expect(tutorial_model)
        def put(self):
            ID = api.payload['ID']
            name = api.payload['name']
            link = api.payload['link']
            tutorials = db_manager.tutorials.Update(ID, name, link)
            return tutorials
        
        @api.doc("Update tutorials")
        @api.expect(delete_tutorial_model)
        def delete(self):
            ID = api.payload['ID']
            tutorials = db_manager.tutorials.Delete(ID)
            return tutorials

        
    return api

