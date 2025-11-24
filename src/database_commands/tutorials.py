import mysql.connector
import requests

class TutorialModel:

    def __init__(self, db):
        self.db = db

    def GetExternal(self, url):
        try:
            print("Accessing external tutorial")
            print(url)
            self.is_valid_url(url)
            response = requests.get(url, timeout=5)
            return response.content
        except Exception as e:
            print("Error getting tutorial", e)
            return False

    def GetAll(self):
        try:
            conn = self.db.get_connection()
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM tutorials")
                myresult = cursor.fetchall()
                results = [] 
                for u in myresult:
                    results.append(TutorialModel._TupleToDict(u))
                return results
        except Exception as e:
            print("Error getting all tutorials", e)
            return False
        
    def Create(self, name, link):
        try:
            response = self.is_valid_url(link)
            if(response == True):
                conn = self.db.get_connection()
                with conn.cursor() as cursor:
                    cursor.execute(f"INSERT INTO tutorials.tutorials (name, link) VALUES('{name}', '{link}')")
                    myresult = cursor.fetchall()
                conn.commit()
                return True
            else:
                return False
        
        except Exception as e:
            print("Error adding tutorial", e)
            return False
    
    def Update(self, ID, name, link):
        try:
            response = self.is_valid_url(link)
            if(response == True):
                conn = self.db.get_connection()
                with conn.cursor() as cursor:
                    cursor.execute(f"UPDATE tutorials SET name = '{name}', link = '{link}' WHERE tutorialID = {ID}")
                    myresult = cursor.fetchall()
                conn.commit()
                return True
            else:
                return False
        except Exception as e:
            print("Error updating student", e)
            return False
        
    def Delete(self, ID):
        try:
            conn = self.db.get_connection()
            with conn.cursor() as cursor:
                cursor.execute(f"UPDATE tutorials SET name = '', link = '' WHERE tutorialID = {ID}")
                myresult = cursor.fetchall()
            conn.commit()
            return True
        except Exception as e:
            print("Error updating student", e)
            return False
        
    def is_valid_url(self, link):
        try:
            response = requests.head(link, allow_redirects=True, timeout=5)
            return True
        except requests.exceptions.MissingSchema:
            # Raised if the URL is malformed (e.g., missing http/https)
            print("Invalid URL: Missing schema (e.g., http or https).")
            return False
        except requests.exceptions.ConnectionError:
            # Raised if the URL's domain is unreachable
            print("Invalid URL: Unable to connect to the server.")
            return False
        except requests.exceptions.Timeout:
            # Raised if the request times out
            print("Invalid URL: Request timed out.")
            return False
        except requests.exceptions.RequestException as e:
            # Catch-all for other request-related exceptions
            print(f"Invalid URL: {e}")
            return False
        except requests.exceptions.HTTPError as e:
            print(f"Something went wrong: {e}")
            return False
    
    def _TupleToDict(tuple):
        return {
                "ID": tuple[0],
                "name": tuple[1],
                "link": tuple[2]
            }