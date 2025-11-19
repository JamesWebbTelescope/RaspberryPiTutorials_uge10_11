import mysql.connector

class TutorialModel:

    def __init__(self, db):
        self.db = db

    def GetAll(self):
        try:
            conn = self.db.get_connection()
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM tutorials.tutorials")
                myresult = cursor.fetchall()
                results = [] 
                for u in myresult:
                    results.append(TutorialModel._TupleToDict(u))
                return results
        except Exception as e:
            print("Error getting all students", e)
            return False
    
    def _TupleToDict(tuple):
        return {
                "ID": tuple[0],
                "name": tuple[1],
                "link": tuple[2]
            }