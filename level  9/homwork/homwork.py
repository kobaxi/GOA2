#1
num = int(input("შეიყვანე რიცხვი: "))

if num % 2 == 0:
    print("ლუწია")
else:
    print("კენტია")
#2
num = float(input("შეიყვანე რიცხვი: "))

if num < 0:
    print("რიცხვი უარყოფითია")
else:
    print("რიცხვი დადებითია ან ნულია")
#3
age = int(input("შეიყვანე შენი ასაკი: "))

if age < 18:
    print("დაბლოკილი ხარ")
else:
    print("ზრდასრული ხარ")

#4
color = input("შეიყვანე ფერი (მწვანე, ყვითელი, წითელი): ").lower()

if color == "მწვანე":
    print("წადი")
elif color == "ყვითელი":
    print("მოემზადე")
else:
    print("გაჩერდი")

#5
price = 22.50
money = float(input("რამდენი ფული გაქვს: "))

if money >= price:
    print("ხურდა:", round(money - price, 2), "ლარი")
else:
    print("გაკლია:", round(price - money, 2), "ლარი")
