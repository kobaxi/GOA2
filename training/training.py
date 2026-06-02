bot_name: str = "bob"

print(f"hello! I'm {bot_name}! How can I assist you")

while True:
    user_input: str = input("You: ").lower()

    if user_input in ["hi", "hello"]:
        print(f"{bot_name}: How can I help you")

    elif user_input in ["goodbye", "bye"]:
        print(f"{bot_name}: see you")
        break

    elif user_input in ["+", "add"]:
        print(f"{bot_name}: sure give me numbers")
        try:
            num1: float = float(input("enter your first number: "))
            num2: float = float(input("enter your second number: "))
            print(f"{bot_name}: sum is {num1 + num2}")
        except ValueError:
            print(f"{bot_name}: ups that doesn't work")

    elif user_input in ["-", "minus"]:
        print(f"{bot_name}: sure give me numbers")
        try:
            num1: float = float(input("enter your first number: "))
            num2: float = float(input("enter your second number: "))
            print(f"{bot_name}: result is {num1 - num2}")
        except ValueError:
            print(f"{bot_name}: ups that doesn't work")

    elif user_input in ["/", "division"]:
        print(f"{bot_name}: sure give me numbers")
        try:
            num1: float = float(input("enter your first number: "))
            num2: float = float(input("enter your second number: "))
            if num2 == 0:
                print(f"{bot_name}: cannot divide by zero")
            else:
                print(f"{bot_name}: result is {num1 / num2}")
        except ValueError:
            print(f"{bot_name}: ups that doesn't work")

    elif user_input in ["*", "multiplication"]:
        print(f"{bot_name}: sure give me numbers")
        try:
            num1: float = float(input("enter your first number: "))
            num2: float = float(input("enter your second number: "))
            print(f"{bot_name}: result is {num1 * num2}")
        except ValueError:
            print(f"{bot_name}: ups that doesn't work")
    elif user_input in ["animal"]:
        print(f"{bot_name} sure give me first later")
        if user_input in ["elephant",]:
            print(animal)

    else:
        print(f"{bot_name}: I don't understand that")   