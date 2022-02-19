class Game:
    ### This will have many more attributes as the program develops

    def __init__(self, title, price, description):
        self.title = title
        self.price = price
        self.description = description

    def __str__(self) -> str:
        return f"Title: {self.title}\nPrice: {self.price}\nDescription: {self.description}"

if __name__ == '__main__':
    new_game = Game("Mastif Adventures", 49.99, "a game where you go on adventures with mastifs")
    print(new_game)