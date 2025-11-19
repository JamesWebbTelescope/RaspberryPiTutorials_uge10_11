import mysql.connector

class StudentModel:

    def __init__(self, db):
        self.db = db
    
    def GetAll(self):
        try:
            conn = self.db.get_connection()
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM tutorials.students")
                myresult = cursor.fetchall()
                results = [] 
                for u in myresult:
                    results.append(StudentModel._TupleToDict(u))
                return results
        except Exception as e:
            print("Error getting all admins", e)
            return False
        
    def _TupleToDict(tuple):
        return {
                "firstname": tuple[0],
                "lastname": tuple[1],
                "status": tuple[3]
            }