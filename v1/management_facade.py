###Programmer: Ben Sehnert
###Date: 3/11/2020
###Program: Managment Facade class
###Software: CS680ST Assignment 4: Database Backed Scholarship Management System.

from Student import Student
from Scholarship import Scholarship
import sqlite3

from v1.Game import Game
from v1.Rating import Rating

"""
Module level docstring: Implements simple interface for managing a 
Student or Scholarship Database.
"""

class Management_Facade(object):

    version = 0.4

    def __init__(self):
        """
    Creates a connection with the database
        """
        self._connection = sqlite3.connect('records.db')
        self._c = self._connection.cursor()

    def display(self, table):
        """
    Loop over contents of database, output contents.
    No return value, single positional param for table type (game or rating)
        """
        for row in self._c.execute("select * from {};".format(table.title())):
            print(row)

    def add(self, mode):
        """
    Adds a row to one of the tables.
    No return value. Single Positional for mode
    1 for Game, 2 for Rating (????)
        """
        if int(mode) == 1:
            s = Game()
            s.insert()
        elif int(mode) == 2:
            s = Rating()
            s.insert()

        
if __name__ == "__main__":
    print("Running class file. Nothing to do here.")