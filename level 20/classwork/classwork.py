#1
numbers = []
numbers.append(int(input("შეიყვანე რიცხვი: ")))
numbers.append(int(input("შეიყვანე კიდევ ერთი რიცხვი: ")))
numbers.append(int(input("შეიყვანე კიდევ ერთი რიცხვი: ")))
print("ნუმერები:", numbers)


#2
fruits = ["apple", "banana", "kiwi"]
print("ელემენტების რაოდენობა:", len(fruits))

#3

words = ["I", "love", "GOA"]
sentence = " ".join(words)
print(sentence) 
words[-1] = "Python"
sentence = " ".join(words)
print(sentence)

#4

s = "one,two,three,four"
lst = s.split(",")
print(lst)

#5

text = "hello world"
print(text.upper())

#6

text = "PYTHON IS FUN"
print(text.lower())


#7
text = "python programming is cool"
print(text.capitalize())
