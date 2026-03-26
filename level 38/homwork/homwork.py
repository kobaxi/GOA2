#.1.  შექმენით dictionary მაგ. მოსწავლეზე (სახელი, გვარი, ასაკი, საგანი)
my_dict = {"name":"dato", "surname": "kobaxidze", "age": 14, "subject": "qimia"}

#.2. for ლუპით დაბეჭდეთ ყველა key
for key in my_dict:
    print(key)

#.3. for ლუპით დაბეჭდეთ ყველა value
my_value = {"name": "dato",
            "surname": "kobaxidze",
            "age": 14,
            "subject": "qimia"
}
for value in my_value.values():
    print(value)

#.4. შეცვალეთ ასაკი
my_value["age"] = 15
print(my_value)

#.5. წაშალეთ საგანი

#del my_value["subject"]
#print(my_value)
my_value.pop("subject" , None)
print(my_value)

#.6. სრულად გაასუფთავეთ dictionary
my_value.clear()
print(my_value)

#.7. pop()-ით წაშალეთ გვარი
my_value.pop("surname", None)
print(my_value)

#.8. რა არის key
#  key არის უნიკალური სახელი(მნიშვნელობის ,,მისამართი") dictionary-ში.

#.9. რა არის value
# Value მონაცემი რომელიც key-ს ეკუთვნის.

#.10.

my_list = ['mari', 15]
my_dict = {'სახელი': "მარიამი", "ასაკი": 15}

#.11. 

my_set = { 1, 2, 3}
my_dict = {"a": 1, "b"}