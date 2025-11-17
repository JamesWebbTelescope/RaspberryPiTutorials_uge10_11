import mysql.connector

class DatabaseManager:
    def __init__(self, host, user, password, dbname):
        self.host = host
        self.user = user
        self.password = password
        self.dbname = dbname

        self.mydb = None

        try:
            self.get_connection()

        except Exception as e:
            print(f"Could not connect to database: {dbname}")

        def get_connection(self):
            if not self.mydb or not self.mydb.is_connected():
                self.mydb = mysql.connector.connect(
                    host=self.host,
                    user=self.user,
                    password=self.password,
                    database=self.dbname
                )
            return self.mydb