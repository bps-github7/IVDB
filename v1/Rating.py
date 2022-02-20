class Rating:

    ###TODO: not sure if this is the best solution. Since we are limiting the scope of the app, do games need more than one rating? rethinking required....

    def __init__(self, title, amount):
        self.title = title
        self.amount = amount

    def __str__(self) -> str:
        return f"Title: {self.title}\nAmount: "

if __name__ == '__main__':
    new_game = Game("Mastif Adventures", 49.99, "a game where you go on adventures with mastifs")
    print(new_game)