"""Module Level Docstring: class for storage of user records."""
from Active import Active
import sqlite3


class User(Active):
    """Class Level Docstring: wrapper/child class for active record class"""

    version = 4.0

    #TODO: what properties do we need to record for user?


    def __init__(self):
        """Establishes connection with db"""
        self._connection = sqlite3.connect('records.db')
        self._c = self._connection.cursor()

    def insert(self):
        """Creates a record in the Student table"""
        questions = "first","last","email"
        super().insert("Student", **{ q : input("{} : "\
            .format(q.title())) for q in questions})

    ###Helper methods
    def update(self):
        """
    All args in kwargs dict
    table = 'Student' or 'Scholarship'
    key = name of field being updated (ie email, first, amount, etc...)
    value = value to substituted
    identifying_key = used for lookup- email for students
    identifying_value = value of the lookup key 
        """
        while True:
            in_key = input("Enter the NAME of the column you want to update:\n\
            (ie. first, last, email): NOTE: write exactly like example-\n\
            errors could result otherwise\n")
            if in_key in ("first", "email","last"):
                break
            else:
                print("Input you provided was not a valid choice [first, last or email]")
        in_value = input("Enter the VALUE you want to replace the old\
        column value with\n")
        in_value2 = input("Enter the email of the Student you want \
        to update:\n")
        super().update(table="Student", key=in_key, value=in_value,
        identifying_key="Email",identifying_value=in_value2)
    
    def remove(self):
        """
    Two Positional arguments
    -table ('Student' or 'Scholarship')
    -field (list of all the columns in a row) 
        """
        questions = "first name: ","Last Name: ","Email: "
        super().remove("Student", [input("{} : "\
            .format(q.title())) for q in questions])


def test():
    s = Student()
    print("Inserting a user...")
    s.insert()
    
    for row in s._c.execute("select * from {};".format("Student")):
        print(row)




if __name__ == "__main__":
    #test()
    print("Running class file. Nothing to do here.")