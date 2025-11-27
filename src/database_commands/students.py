import mysql.connector

class StudentModel:

    def __init__(self, db):
        self.db = db
    
    def GetAll(self):
        '''
        Docstring for GetAll
        
        Get all students
        '''
        try:
            conn = self.db.get_connection() #Open a connection to the database
            with conn.cursor() as cursor: #Open a cursor
                cursor.execute("SELECT * FROM students") #Get all students
                myresult = cursor.fetchall() #Get the result
                results = [] 
                for u in myresult:
                    results.append(StudentModel._TupleToDict(u)) #Convert the result to tuples
                return results
        except Exception as e: #If anything goes wrong, print the error
            print("Error getting all students", e)
            return False
        
    def Create(self, firstname, lastname, status):
        '''
        Docstring for Create
        
        :param firstname: First name of the student that you want to add
        :param lastname: Last name of the student that you want to add
        :param status: Status of the student (active or inactive)
        '''
        try:
            conn = self.db.get_connection() #Open a connection to the database
            with conn.cursor() as cursor: #Get a cursor
                cursor.execute(f"INSERT INTO tutorials.students (firstname, lastname, status) VALUES('{firstname}', '{lastname}', '{status}')") #Add the student
                myresult = cursor.fetchall()
            conn.commit() #Close the connection
            return True
        except Exception as e: #If anything goes wrong, print the error.
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