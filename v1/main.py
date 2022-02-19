import sys
from Game import Game

def main():
    """Begins the program"""
    loop = True
    while loop:
        loop = main_menu()


def create_game():
    """Walks you through creating new game.
    Instantiate and return new game based on the gathered info
    """
    # obviously this will become more rigerous as time goes by
    # put these helper methods inside the class??
    return Game(input("provide game title: "), float(input("provide game price: ")), input("provide game description: "))

def read_games(games : list) -> None:
    # Think these menus should be a dictionary we enumerate over
    for count,game in enumerate(games):
        print(f"{count+1}. {game}")
    while True:
        print("type a number to select a game, or back to return to the previous menu")
        choice = input()
        # Catch all for bad inputs, might not work in 100% all cases
        if choice not in ["b","back",] and int(choice) not in range(1, len(games)):
            print("Sorry, your response was invalid")
        if choice in ["b","back"]:
            return False
        if int(choice) in range(1, len(games)):
            print("selected the game object")
            print("what would you like to do with the game?")
            print("1. edit")
            print("2. delete")
            print("3. rate")
            choice_on_selected = int(input())



def main_menu(games):
    """facilitates C.R.U.D, Games is a list game objects modified in place and returned"""
    
    # you can do error catching for the admin interface here instead of inside sub fns
    prompt()
    opt = ["1","2","3","4","q","h","quit","help"]
    answer = input(">>> ")
    if answer in opt:
        return menu(answer)
    # have some concerns about 'help' or 'quit' triggering the below statement.
    elif len(answer) > 1:
        print("Please only enter the numeric value of your choice\
(ie. 1 2 3, not 1. 2. 3. or 1. Add Scholarship)")
        return True
    else:
        print("Error, unexpected value... Please try again")
        return True




def prompt(admin=False):
    """
Presents the user with options
    """
    opt = ["1. Enter a videogame","2. Enter a rating for videogame",
           "3. Display video games on record"]
    if admin:
        opt.extend(["4. Edit a videogame", "5. Delete a videogame"])
    print("What would you lie to do?\
(q or quit = leave application, h or help = get help)")
    for option in opt:
        print(option)


def menu(choice, admin=False):
    """
Return false to quit menu/prompt system,
and True to continue looping, executes
commands incommenserate with passed in argument
which is the user's input
    """
    limit = 3 if admin else 5
    if int(choice) in range(1,limit):
        print("this is where the management facade goes to work with your choice")
        print(f"you chose: {choice}")
    # if choice == "1":
    #     m.add(1)
    #     return True
    # elif choice == "2":
    #     print("\n")
    #     m.display("Student")
    #     print("\n")
    #     return True
    # elif choice == "3":
    #     m.add(2)
    #     return True
    # elif choice == "4":
    #     print("\n")
    #     m.display("Scholarship")
    #     print("\n")
    #     return True
    elif choice.lower() in ("quit","q","done","d"):
        return False
    elif choice.lower() in ("help","h"):
        print("\n\n<---Help Page--->\nScholarship management Application:\n\nEnter a number to perform an action. \n\n\Make sure to only enter the number!\n\n\n")
        return True
    else:
        print("Error- ",choice," is not a valid option.\n\
Please try again...")
        return True


main()