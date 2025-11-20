import mysql.connector

class StudentModel:

    def __init__(self, db):
        self.db = db
    
    def GetAll(self):
        try:
            conn = self.db.get_connection()
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM students")
                myresult = cursor.fetchall()
                results = [] 
                for u in myresult:
                    results.append(StudentModel._TupleToDict(u))
                return results
        except Exception as e:
            print("Error getting all students", e)
            return False
        
    def Create(self, firstname, lastname, status):
        try:
            conn = self.db.get_connection()
            with conn.cursor() as cursor:
                cursor.execute(f"INSERT INTO tutorials.students (firstname, lastname, status) VALUES('{firstname}', '{lastname}', '{status}')")
                myresult = cursor.fetchall()
            conn.commit()
            return True
        except Exception as e:
            print("Error creating new student", e)
            return False
    
    def Update(self, ID, firstname, lastname, status):
        try:
            conn = self.db.get_connection()
            with conn.cursor() as cursor:
                cursor.execute(f"UPDATE students SET firstname = '{firstname}', lastname = '{lastname}', status = '{status}' WHERE studentID = {ID}")
                myresult = cursor.fetchall()
            conn.commit()
            return True
        except Exception as e:
            print("Error updating student", e)
            return False
        
    def Delete(self, ID):
        try:
            conn = self.db.get_connection()
            with conn.cursor() as cursor:
                cursor.execute(f"UPDATE students SET firstname = '', lastname = '', status = 'Inactive' WHERE studentID = {ID}")
                myresult = cursor.fetchall()
            conn.commit()
            return True
        except Exception as e:
            print("Error updating student", e)
            return False
        
    def _TupleToDict(tuple):
        return {
                "ID": tuple[0],
                "firstname": tuple[1],
                "lastname": tuple[2],
                "status": tuple[3]
            }