# 1) ცარიელი სია და 3 რიცხვის დამატება
numbers = []
for i in range(3):
    num = input("შეიყვანე რიცხვი: ")
    numbers.append(num)
print(numbers)

# 2) ფერების დამატება
numbers.append("green")
numbers.append("yellow")
numbers.append("purple")
print(numbers)

# 3) animals სიის ზომა
animals = ["cat", "dog", "lion", "tiger"]
size = len(animals)
print("სიის ზომაა:", size)

# 4) სიტყვის სიმბოლოების რაოდენობა
word = input("შეიყვანე სიტყვა: ")
print(len(word))

# 5) სტრიქონის სიტყვებად გაყოფა
text = "apple orange banana"
words_list = text.split()
print(words_list)

# 6) მომხმარებლის წინადადების სიტყვებად გაყოფა
sentence = input("შეიყვანე წინადადება: ")
sentence_list = sentence.split()
print(sentence_list)

# 7) სიტყვების გაერთიანება წინადადებად
words = ["Python", "is", "awesome"]
joined_sentence = " ".join(words)
print(joined_sentence)

# 8) სახელების სტრიქონად გადაქცევა
names = ["Ana", "Gio", "Saba"]
names_string = ", ".join(names)
print(names_string)

# 9) ყველა ასო დიდად
word = "python"
print(word.upper())

# 10) მომხმარებლის სახელი დიდ ასოებში
name = input("შეიყვანე შენი სახელი: ")
print("YOUR NAME IS:", name.upper())

# 11) დიდი ასოებიდან პატარა ასოებზე
TEXT = "PROGRAMMING IS FUN"
print(TEXT.lower())

# 12) მომხმარებლის წინადადება პატარა ასოებით
user_sentence = input("შეიყვანე წინადადება: ")
print(user_sentence.lower())

# 13) capitalize() გამოყენება
sentence = "python is amazing"
print(sentence.capitalize())

# 14) ფილმის სახელი — მხოლოდ პირველი ასო დიდი
movie = input("შეიყვანე საყვარელი ფილმის სახელი: ")
print(movie.capitalize())
