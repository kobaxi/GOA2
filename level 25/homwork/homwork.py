def odd_or_even(n):
    if n % 2 == 0:
        return "ლუწია"
    else:
        return "კენტია"
print(odd_or_even)

def add_numbers(a, b):
    return a + b
print(add_numbers)

def subtract_numbers(a, b):
    return a - b
print(subtract_numbers)

def multiply_numbers(a, b):
    return a * b
print(multiply_numbers)

def divide_numbers(a, b):
    return a / b
print(divide_numbers)

def string_to_list(word):
    result = []
    word = word.upper()
    for ch in word:
        result.append(ch)
    return result
print(string_to_list)

def list_to_string(lst):
    result = ""
    for ch in lst:
        result += ch
    return result.lower()
print(list_to_string)


def max_in_list(numbers):
    max_num = numbers[0]
    for n in numbers:
        if n > max_num:
            max_num = n
    return max_num
print(max_in_list)

def min_in_list(numbers):
    min_num = numbers[0]
    for n in numbers:
        if n < min_num:
            min_num = n
    return min_num
print(min_in_list)

def remove_spaces(text):
    result = ""
    for ch in text:
        if ch != " ":
            result += ch
    return result
print(remove_spaces)