# 1) გამოიტანეთ ნებისმიერი რამ 15-ჯერ
for i in range(15):
    print("გამარჯობა")


# 2) დაბეჭდეთ რიცხვები 1-დან 20-მდე
for i in range(1, 21):
    print(i)


# 3) დაბეჭდეთ ლუწი რიცხვები 1-დან 20-მდე
for i in range(1, 21):
    if i % 2 == 0:
        print(i)


# 4) დაბეჭდეთ კენტი რიცხვები 1-დან 20-მდე
for i in range(1, 21):
    if i % 2 == 1:
        print(i)


# 5) კენტი და ლუწი რიცხვები ერთად if-else გამოყენებით
for i in range(1, 21):
    if i % 2 == 0:
        print(i, "ლუწი")
    else:
        print(i, "კენტი")


# 6) დაბეჭდეთ ყველა ასო მოცემულ სტრინგში
text = "Hello World"
for char in text:
    print(char)


# 7) სიაზე იტერაცია და თითოეული ელემენტის დაბეჭდვა
items = ["ვაშლი", "მსხალი", "ბალი"]
for item in items:
    print(item)


# 8) "მე მიყვარს: ..." თითოეული ხილისთვის
fruits = ["ვაშლი", "ბანანი", "ატამი"]
for fruit in fruits:
    print("მე მიყვარს:", fruit)


# 9a) 1-დან 10-მდე რიცხვების ჯამი
total = 0
for i in range(1, 11):
    total += i
print("ჯამი:", total)


# 9b) სიის რიცხვებიდან 1-ის გამოკლება
nums = [3, 6, 9, 12]
for n in nums:
    print(n - 1)


# 10) 1-დან 10-მდე რიცხვი თუ იყოფა 3-ზე → True, სხვაგან False
for i in range(1, 11):
    if i % 3 == 0:
        print(i, True)
    else:
        print(i, False)


# 11) სტრინგის გადაბმულად გამოყვანა (ორჯერ)
word = "hello"
result = ""
for char in word:
    result += char
result = result * 2
print(result)  # hellohello

#20 ბონუს რაუნდი
items = ["ვაშლი", "ბანანი", "ატამი", "ატრახი", "ვაშლი"]

count = 0

for item in items:
    count += 1

print("სიის ელემენტები:", items)
print("სულ რაოდენობა:", count)
