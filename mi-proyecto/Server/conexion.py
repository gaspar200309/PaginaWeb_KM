import mysql.connector

conexion = mysql.connector.connect(user = 'root', password = 'armando1gaspar',
                                   host = 'localhost', 
                                   database = 'prueba',
                                   port= '3306')
print(conexion)