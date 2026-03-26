#4
nums = [1, 2, 3, 2, 1, 4, 5, 4]

nums_set = set(nums)

unique_once = [x for x in nums_set if nums.count(x) == 1]

print(unique_once)

#5
colors = {"red", "blue"}
colors.add("green")

print(colors)

#6
evens = set()

for i in range(0, 11):
    if i % 2 == 0:
        evens.add(i)

print(evens)