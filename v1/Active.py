"""
Developer: Ben Sehnert
Date: 2/21/2022
Program: Videogame Database Cli

Module Level Docstring: parent class that will be subclassed by
    -Videogame
    -others later on
Implements the common SQL commands used by both active record classes.
Handles connecting with the database file, insertion, removal and updating.
"""

import sqlite3

class Active(object):
    """
Class level Docstring: Abstract version
of class for wrapping a single row in a database table.
    """
    version = 0.4

    def __init__(self):
        """Establish connection with db"""
        self._connection = sqlite3.connect('records.db')
        self._c = self._connection.cursor()

    def insert(self, table, **kwargs):
        """Inserts a record to a table"""
        self._c.execute("insert into {} ({}, {}, {}) values ('{}', '{}', '{}');"
        .format(table, *kwargs, *kwargs.values()))
        self._connection.commit()

    def update(self, **kwargs):
        """Updates a record in a table"""
        self._c.execute(
            "update {table} set {key}='{value}' where {identifying_key}='{identifying_value}';"
            .format(**kwargs))
        self._connection.commit()

    def remove(self, table, fields):
        """Removes a record in a table"""
        ### TODO: implement this with videogame db details
        pass

        # if table == "Student":
        #     #probably a spelling or capitalization error somewhere here...
        #     identifier = "Email"
        #     accessor = 2
        # elif table == "Scholarship":
        #     identifier = "id"
        #     accessor = 0
        #print("delete from {} where {}={};".format(table, identifier, fields[accessor]))
        # self._c.execute("delete from {} where {}='{}';"
        # .format(table, identifier, fields[accessor]))
        # self._connection.commit()

def testing():
    active_instance = Active()
    active_instance.insert("Videogame", title="zumbetgan", price=14.50,
    description="you taste the waffle, but you never know it's true flavor")
   #TODO: need more tests for the other fns

if __name__ == "__main__":
    #testing()
    print("Running class file. Nothing to do here.")
