#1
numbers = set()
numbers.add(1)
numbers.add(2)
numbers.add(3)
print("1) Set რიცხვებით:", numbers)

#2
words = set()

for i in range(3):
    word = input(f"შეიყვანე {i+1}-ე სიტყვა: ")
    words.add(word)

print("2) სიტყვების set:", words)

#3
set1 = {1, 2, 3}
set2 = {4, 5, 6}

union_set = set1.union(set2)
print("3) გაერთიანებული set:", union_set)
