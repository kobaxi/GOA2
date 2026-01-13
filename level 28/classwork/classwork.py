lst = ["Gamarjoba", 6, 8.9, True]
lst.append("Hello")
print("1:", lst)

word = "Gamarjoba"
count_letters = len(word)
print("2:", count_letters)

lst_numbers = [1, 2, 3]
count_elements = len(lst_numbers)
print("3:", count_elements)

sentence = "I love python"
words = sentence.split()
print("4:", words)

lst_chars = ['h', 'j', 'k']
joined = "".join(lst_chars)
print("5:", joined)

text1 = "gamarjoba"
upper_text = text1.upper()
print("6:", upper_text)

text2 = "GAMARJOBA"
lower_text = text2.lower()
print("7:", lower_text)

text3 = "gamarjoba"
capitalized = text3.capitalize()
print("8:", capitalized)

lst_remove = [1, 2, 3]
lst_remove.remove(3)
print("9:", lst_remove)

var1 = "Gamarjoba"
var2 = 5
var3 = 6.7
var4 = True
print("10:", type(var1), type(var2), type(var3), type(var4))