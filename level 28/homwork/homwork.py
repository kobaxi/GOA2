# 1. შექმენით ცარიელი სია და ჩაამატეთ 6 ელემენტი სხვადასხვა ტიპის
my_list = []
my_list.append(10)
my_list.append(3.14)
my_list.append("hello")
my_list.append(True)
my_list.append([1, 2])
my_list.append(None)
print("1. სია 6 ელემენტით:", my_list)

# 2. შექმენით სია ორი ელემენტით და ფუნქციით დაამატეთ მესამე
my_list2 = ["python", 3]
my_list2.append("learning")
print("2. სია 3 ელემენტით:", my_list2)

# 3. ცვლადი სიტყვით და მისი სიგრძე
word = "kompüteri"
print("3. სიტყვა:", word, "სიგრძე:", len(word))

# 4. სია და მისი სიგრძე
numbers = [5, 10, 15, 20]
print("4. სიის სიგრძე:", len(numbers))

# 5. წინადადება "Hello World" დაყავით სიტყვებად
sentence1 = "Hello World"
words1 = sentence1.split()
print("5. დაყოფილი სიტყვებად:", words1)

# 6. წინადადება "I am learning python" დაყავით სიტყვებად
sentence2 = "I am learning python"
words2 = sentence2.split()
print("6. დაყოფილი სიტყვებად:", words2)

# 7. სია ["py", "thon"] გააერთიანეთ ერთ წინადადებად
list_join1 = ["py", "thon"]
joined1 = "".join(list_join1)
print("7. გაერთიანებული წინადადება:", joined1)

# 8. სია ["me", "dzalian", "miyvars", "mwvane", "vashli", "imitoro", "magaria"] გააერთიანეთ წინადადებად
list_join2 = ["me", "dzalian", "miyvars", "mwvane", "vashli", "imitoro", "magaria"]
joined2 = " ".join(list_join2)
print("8. გაერთიანებული წინადადება:", joined2)

# 9. სიტყვა "gamarjoba", ყველა ასო დიდ ასოდ
word_upper = "gamarjoba".upper()
print("9. დიდი ასოებით:", word_upper)

# 10. სიტყვა "KARGAD", ყველა ასო პატარა ასოდ
word_lower = "KARGAD".lower()
print("10. პატარა ასოებით:", word_lower)

# 11. მასივი და ბოლო ელემენტის წაშლა
my_array = [1, 2, 3, 4, 5]
my_array.pop()  # წაშლა
print("11. მასივი ბოლოს ელემენტის წაშლის შემდეგ:", my_array)

# 12. ცვლადების ტიპების გადახედვა
var1 = "Gamarjoba"
var2 = 5
var3 = 6.7
var4 = True
print("12. ტიპები:", type(var1), type(var2), type(var3), type(var4))

# 13. სია [1, 5, 7, 9] და ყველაზე დიდი/პატარა ელემენტი
nums = [1, 5, 7, 9]
print("13. ყველაზე დიდი:", max(nums), "ყველაზე პატარა:", min(nums))
