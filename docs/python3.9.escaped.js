const PYTHON_SYNTAX_TUTORIAL = `
# Use a comment
Characters after the # character are comments and are ignored by python

# Declare a variable and assign the value 5
my_int = 5 # my_int will have the value 5

# Using the add (+) operator
my_int = 2 + 2 # my_int will have the value 4

# Operator precedence
my_int = 50 - 5*6 # multiplication (*) before subtraction (-)

# Grouping operands
my_int = (50 - 5) * 6 # parentheses before multiplication

# Division will return a float
my_float = 8 / 5 # my_float will have the value 1.6

# Using the floor (//) operator
my_float = 8 // 5 # my_float will have the value 1

# Using the modulo (%) operator
my_int = 8 % 5 # my_int will have the value 3

# Exponentiation
my_int = 5 ** 2 # my_int will have the value of 5 squared

# Use an operator on existing variables
my_int = 5 # declare the my_int variable
my_float = 3 # declare the my_float variable
new_float = my_int / my_float # new_float will be my_int divided by my_float

# Declare a string variable in single quotes
my_string = 'Hello world' # 'Hello world'

# Declare a string variable in double quotes
my_string = "Hello world" # "Hello world"

# Escaping a single quote in single quotes
my_string = 'doesn\\'t' # 'doesn\\'t'

# Using a single quote in double quotes
my_string = "doesn't" # "doesn't"

# Using double quotes in single quotes
my_string = '"Yes," they said.' # '"Yes," they said.'

# Escaping double quotes in double quotes
my_string = "\\"Yes,\\" they said." # "\\"Yes,\\" they said."

# Escaping single quotes in double quotes
my_string = '"Isn\\'t," they said.' # '"Isn\\'t," they said.'

# Assign the raw value (r) of the string to a variable
my_string = r'C:\\my\\path' # C:\\my\\path

# Show the value of a variable
print(my_string) # will output the value of my_string

# Multiline string in double quotes
my_string = """\\
    first line
    second line
    """

# Multiline string in single quotes
my_string = '''\\
    first line
    second line
    '''

# Concateneting strings 
my_string = "Mi" + "ssi" + "ssi" + "ppi" # Mississippi

# Make use of the multiplication (*) operator
my_string = "Mi" + 2 * "ssi" + "ppi" # Mississippi

# Concatenate string without using the + sign
my_string = "Py" "thon" # Python

# Declare a long one line text
my_string = ('My' # My long text in one line
' long text'
' in one line.') 

# Concatenate a variable and a string literal
my_string = "initial value" # initial value
new_string = "Add value to the " + my_string # Add value to the initial value

# Access the first character of a string
my_string = "Hello world" # Hello world
my_string[0] # H

# Access the character at a certain position
my_string = "Hello world" # Hello world
my_string[4] # o

# Access the last character
my_string = "Hello world" # Hello world
my_string[-1] # d

# Slice a string from the initial character
my_string = "Hello world" # Hello world
my_string[0:5] # Hello

# Omiting initial character
my_string = "Hello world" # Hello world
my_string[:5] # Hello

# From the sixth character to the last one
my_string = "Hello world" # Hello world
my_string[6:] # world

# From the third character to the second to last one
my_string = "Hello world" # Hello world
my_string[3:-1] # lo worl

# From the second last to the last one
my_string = "Hello world" # Hello world
my_string[-2:] # ld

# A string cannot be modified
my_string[0] = 'A' # will throw an error

# Get the size of the string
my_string = "Hello world" # Hello world
len(my_string) # 11

# Declare a list
my_list = [1, 2, 3, 4, 5]

# Access the first element of the list
my_list = [1, 2, 3, 4, 5]
my_list[0] # 1

# Access the last element of the list
my_list = [1, 2, 3, 4, 5]
my_list[-1] # 5

# Slice a list
my_list = [1, 4, 9, 17, 32]
my_list[2:3] # [9]

# Return a shallow copy of the list
my_list = [1, 4, 9, 17, 32]
my_list[:] # [1, 4, 9, 17, 32]

# Concatenate lists
my_list = [1, 4, 9, 17, 32]
my_list + [35, 49] # [1, 4, 9, 17, 32, 35, 49]

# Change a value
my_list = [1, 3, 3]
my_list[1] = 2 # [1, 2, 3]

# Using the append method
my_list = [1, 2]
my_list.append(3) # [1, 2, 3]

# Count elements of a list
my_list = [1, 2, 3]
len(my_list) # 3

# List of lists
my_list = [[1, 2, 3], [4, 5, 6]]

# Calculate the Fibonacci series by using the while loop
curr, next = 0, 1 # multiple variables assignment
while curr < 10: # loop to 10
    print(curr) # show the current value
    curr, next = next, curr+next # calculate new values

# Use the if statement to compare a number to 0
val = input("Enter a number: ") # ask for an input and assign it to val
number = int(val) # cast val to an integer
if number < 0: # if number is less than 0
    print('You entered a negative number') # confirm that the number is negative
elif number == 0: # if the number is equal to 0
    print('You entered 0') # confirm that the number is 0
else:
    print('You entered a positive number') # confirm that the number is positive

# Use the for statement to iterate over a list
words = ['first', 'second', 'third'] # ['first', 'second', 'third']
for word in words: # iterate over words
    print(word) # show the current word

# Generate lists of numbers
list(range(5, 10)) # [5, 6, 7, 8, 9]
list(range(0, 10, 3)) # [0, 3, 6, 9]
list(range(-10, -100, -30)) # [-10, -40, -70]

# Iterate over a list of generated numbers
for i in range(5): # iterate with the for loop through a generated list
    print(i) # show the curent number

# Iterate over a list of elements
my_list = ['Mary', 'had', 'a', 'little', 'lamb'] # ['Mary', 'had', 'a', 'little', 'lamb']
for i in range(len(my_list)): # iterate over my_list
    print(i, my_list[i]) # print the index and the current element

# Find the prime numbers in a range of numbers
for n in range(2, 10): # iterate over numbers between 2 and 10
    for x in range(2, n): # iterate from 2 to n
        if n % x == 0: # if n is equally divided by x
            print(n , 'equals', x, '*', n//x) # print the number and it's factors (e.g. 4 equals 2 * 2)
            break # exit the nested loop
        else: # if the number does not have common factors
            print(n, 'is a prime number') # print the message that n is prime

# Find the even numbers in range
for n in range(2, 10): # iterate from 2 to 10
    if n % 2 == 0: # if the current number is divisible by 2
        print("Found the even number", n) # print the message that we found an even number
        continue # continue with the next number and skip the next statement
    print("Found the odd number", n) # print the message that the number is odd

# Declare a function that does nothing
def my_function(*arguments): # declare a function that receives arguments
    pass # do nothing

# Function with standard argument
def standard_arg(arg): # declare a function that receive a standard argument
    print(arg) # print the argument
standard_arg(2) # will print 2
standard_arg(arg=2) # will print 2

# Function with positional argument only
def pos_only_arg(arg, /): # declare a function with positional argument
    print(arg) # print the argument
pos_only_arg(2) # will print 2
pos_only_arg(arg=2) # will throw an error

# Function with keyword argument
def kwd_only_arg(*, arg): # declare a function that receive a keyword argument
    print(arg) # print the argument
kwd_only_arg(2) # will throw an error
kwd_only_arg(arg=2) # will print 2

# Create a function that calculates the Fibonacci series
def fib(n): # declare the function that receives n as argument
    first, second = 0, 1 # initialize the variables
    while first < n: # while first is less than n
        print(first, end=' ') # print the first number and the empty space as suffix
        first, second = second, first+second # calculate and assign the next values
    print() # print a new line
fib(2000) # call the function with a value as argument
f = fib # assign the function to a variable
f(10) # call the variable as a function

# Return the Fibonacci series as a list
def fib_as_list(n): # declare the function that receives n as argument
    result = [] # declare a list to be returned
    first, second = 0, 1 # initialize the variables
    while first < n: # while first is less than n
        result.append(first) # append the number to the list
        first, second = second, first+second # calculate the next values
    return result # return the list
f100 = fib_as_list(100) # assign to a variable the list that the function returns

# Use default arguments in a function
def print_number(n=10): # declare the function with default value as argument
    print(n) # print parameter
print_number() # call function with default argument (will print 10)
print_number(5) # call function with a specific argument (will print 5)

# Appending to a list on subsequent calls
def append_to(num, my_list=[]): # declare a function that receives a number and defaults an empty list
    my_list.append(num) # append the passed parameter to the list
    return my_list # return the list
print(append_to(1)) # will print [1]
print(append_to(2)) # WARNING: will print [1, 2]
print(append_to(3)) # WARNING: will print [1, 2, 3]

# Avoid appending on subsequent calls by reseting the list
def append_to(num, my_list=None): # declare a function that receives a number and defaults a null list
    if my_list is None: # if the list is null
        my_list = [] # initialize an empty list
    my_list.append(num) # append the parameter to the list
    return my_list # return the list
append_to(1) # will print [1]
append_to(2) # will print [2]
append_to(3) # will print [3]

# Passing keyward arguments to a function
def about_me(name, age=18, eyes_color="blue"): # declare a function with positional arguments
    print(f"My name is {name}, I'm {age} years old, and my eyes are {eyes_color}.") # f"My name is {name}, I'm {age} years old, and my eyes are {eyes_color}."
about_me("Mike") # My name is Mike, I'm 18 years old, and my eyes are blue.
about_me("Mike", 25, eyes_color="brown") # My name is Mike, I'm 25 years old, and my eyes are brown.

# Function with a list as parameter
def print_list_elements(*elements): # declare the function that receives a list as positional argument
    for el in elements: # iterate over the list
        print(el) # print the element
print_list_elements(1,2,3) # will output 1, 2, 3

# Function with a dictionary or keywords as parameter
def print_dictionary(**keywords): # declare a function with a dictionary or keywords as parameter
    for k in keywords: # iterate over keys
        print(f"The key is {k} and the value is {keywords[k]}. ") # (format print) The key is {k} and the value is {keywords[k]}
print_dictionary(a=1) # The key is a and the value is 1
print_dictionary(a=1, b=2) # The key is a and the value is 1. The key is b and the value is 2.  

# Lambda
def make_incrementor(n): # declare a function
    return lambda x: x + n # return rambda to increment x by n
incr = make_incrementor(42) # define a variable and se the value of lambda
incr(0) # 42
incr(1) # 43

# Use lambda for sorting
pairs = [(4, 'four'), (3, 'three'), (2, 'two')] # declare a list of pairs
pairs.sort(key=lambda pair: pair[0]) # use lambda for sorting
pairs # [(2, 'two'), (3, 'three'), (4, 'four')]

# Use convention to document a function
def my_function(): # declare a function
    """First line must start with capital letter and end with dot. # First line must start with capital letter and end with dot.
    # empty line
    On multiline comment, the second one must be empty. # On multiline comment, the secont one must be empty.
    """
    pass # the function body
print(my_function.__doc__) # print function documentation

# Function's annotations
def my_function(arg: str) -> str: # define a function that receive a string as argument and returns a string
    print("Annotations:", my_function.__annotations__) # print annotations
    return arg # return argument
my_function("arg") # Annotations: {'arg': <class 'str'>, 'return': <class 'str'>}

# Working with lists
numbers = [0, 2, 2] # declare a list
numbers.count(2) # count the occurance of 2
numbers.append(1) # [0, 2, 2, 1]
new_numbers = numbers.copy() # shallow copy existing numbers to a new variable
numbers.extend([4]) # [0, 2, 2, 1, 4]
numbers.pop() # [0, 2, 2, 1]
numbers.index(2) # 1
numbers.index(2, 2) # 2
numbers.remove(2) # [0, 2]
numbers.append(1) # [0, 2, 1]
numbers.sort() # [0, 1, 2]
numbers.reverse() # [2, 1, 0]
numbers.clear() # []

# List as stack
stack = [3, 4, 5] # declare a list
stack.append(6) # [3, 4, 5, 6]
stack.append(7) # [3, 4, 5, 6, 7]
stack.pop() # [3, 4, 5, 6]

# Queue
from collections import deque # import deque
queue = deque(["one", "two", "three"]) # create a deque
queue.append("four") # ['one', 'two', 'three', 'four']
queue.popleft() # ['two', 'three', 'four']

# List comprehensions
squares = [] # declare an empty list
for x in range(10): # iterate over the first 10 numbers
    squares.append(x**2) # append the squared number to list
squares = list(map(lambda x: x**2, range(10))) # squares = list(map(lambda x: x**2, range(10)))
squares = [x**2 for x in range(10)] # squares = [x**2 for x in range(10)]
vec = [-4, -2, 0, 2, 4] # create a new list
[x*2 for x in vec] # [x*2 for x in vec] will output [-8, -4, 0, 4, 8]
[x for x in vec if x >= 0] # [x for x in vec if x >= 0] will output [0, 2, 4]
[abs(x) for x in vec] # [abs(x) for x in vec] will output [4, 2, 0, 2, 4]
fresh_fruit = ['   banana', '   loganberry ', 'passion fruit  '] # ['   banana', '   loganberry ', 'passion fruit  ']
[fruit.strip() for fruit in fresh_fruit] # [fruit.strip() for fruit in fresh_fruit] -> ['banana', 'loganberry', 'passion fruit']
[(x, x**2) for x in range(6)] # [(x, x**2) for x in range(6)] -> [(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]

# Nested list comprehensions
matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]] # create nested lists
[[row[i] for row in matrix] for i in range(4)] # [[row[i] for row in matrix] for i in range(4)] -> [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]

# Del
my_list = [1, 2, 3] # declare a list
del my_list[0] # [2, 3]
del my_list # delete the entire list

# Tuple
my_tuple = 12345, 54321, 'hello!' # declare a tuple -> 12345, 54321, 'hello!'
nested_tuple = my_tuple, (1, 2, 3, 4, 5) # ((12345, 54321, 'hello!'), (1, 2, 3, 4, 5))
my_tuple[0] = 88888 # will throw an error because tuples are immutable
empty_tuple = () # declare an empty tuple
single_element_tuple = 'hello', # a tuple with a single element

# Set 
fruits = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'} # declare a set -> {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
fruits # no duplicate elements -> {'banana', 'apple', 'orange', 'pear'}
'orange' in fruits # test existing element in set
a = set('abracadabra') # {'a', 'r', 'b', 'c', 'd'}
b = set('alacazam') # {'c', 'l', 'm', 'z', 'a'}
a - b # {'r', 'd', 'b'}
a | b # {'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}
a & b # {'a', 'c'}
a ^ b # {'r', 'd', 'b', 'm', 'z', 'l'}
a = {x for x in 'abracadabra' if x not in 'abc'} # {x for x in 'abracadabra' if x not in 'abc'} -> {'r', 'd'}

# Dictionary
ascii = {'a': 97, 'b': 98} # declare a dictionary
ascii['c'] = 99 # {'a': 97, 'b': 98, 'c': 99}
del ascii['a'] # {'b': 98, 'c': 99}
ascii['a'] = 97 # {'b': 98, 'c': 99, 'a': 97}
sorted(ascii) # ['a', 'b', 'c']
'a' in ascii # True
'd' in ascii # False
dict([('a', 97), ('b', 98)]) # {'a': 97, 'b': 98}
dict(a=97, b=98) # {'a': 97, 'b': 98}
{x: x**2 for x in (2, 4, 6)} # {2: 4, 4: 16, 6: 36}

# Looping
ascii = {'a': 97, 'b': 98} # declare a dictionary
for k, v in ascii.items(): # loop through dictionary
    print(k, v) # a 97 b 98
for i, v in enumerate(['tic', 'tac', 'toe']): # loop through tic tac toe
    print(i, v) # 0 tic 1 tac 2 toe
questions = ['name'] # ['name']
answers = ['Lancelot'] # ['Lancelot']
for q, a in zip(questions, answers): # loop through questions and answers
    print('What is your {0}?  It is {1}.'.format(q, a)) # What is your name?  It is Lancelot.

# Conditions
a = True # assign True
b = False # assing False
a and b # False
a or b # True
a and not b # True
not a or b # False
if b:=True: # assign True to b
    print(b) # True

# Modules
my_module.py # a py file is a module
import my_module # use a module
my_module.__name__ # print module's name
from my_module import my_function # import my_function from my_module
my_function() # call my_function from my_module
import my_module as module # import my_module with a different name
from my_module import my_function as function # import my_function as function

# String format
animals = 'eels' # declare a string
print(f'My hovercraft is full of {animals}.') # My hovercraft is full of eels
print(f'My hovercraft is full of {animals!r}') # My hovercraft is full of 'eels'.
print('We are the {} who say "{}!"'.format('knights', 'Ni')) # We are the knights who say "Ni!"
print('{0} and {1}'.format('spam', 'eggs')) # spam and eggs
print('{1} and {0}'.format('spam', 'eggs')) # eggs and spam
print('This {food} is {adj}.'.format(food='spam', adj='horrible')) # This spam is horrible
print('The story of {0}, {1}, and {other}.'.format('Bill', 'Manfred', other='Georg')) # The story of Bill, Manfred, and Georg.
ascii = {'a': 97, 'b': 98, 'c': 99} # declare a dictionary
print('a: {0[a]:d};'.format(ascii)) # a: 97;
print('a: {a:d}; b: {b:d}; c: {c:d}'.format(**ascii)) # a: 97; b: 98; c: 99
'12'.zfill(5) # '00012
'-3,14'.zfill(7) # -003.14
'3.14159265359'.zfill(5) # 3.14159265359

# Declare a class that does nothing
class MyEmptyClass: # declare the class
    pass # do nothing

# Files
file = open('workfile.txt', 'w', encoding="utf-8") # open the workfile.txt file in write mode
with open('workfile.txt', encoding="utf-8") as file: # open file
    read_data = file.read() # read data from file
file.closed # check if the file was closed
file.readline() # read file line by line
for line in file: # iterate over file lines
    print(line, end='') # print each line
file.write('This is a test\\n') # write to file, return number of characters written
file = open('workfile.txt', 'rb+') # open file in reading and writing binary mode
file.write(b'0123456789abcdef') # write bytes to file
file.seek(5) # go to the sixth byte in the file
file.read(1) # b'5'
file.seek(-3, 2) # go to the 3rd byte before the end
file.read(1) # b'd'

# Json
import json # use json
x = [1, 'simple', 'list'] # [1, 'simple', 'list']
json.dumps(x) # '[1, "simple", "list"]'

# Exceptions
while True: # infinite loop
    try: # try
        x = int(input("Please enter a number: ")) # ask for a number
        break # exit loop
    except ValueError: # catch exception
        print("Oops! That number was not valid. Try again...") # print an error message
import sys # use sys
try: # try
    f = open('myfile.txt') # open myfile.txt file
    s = f.readline() # read the first line
    i = int(s.strip()) # convert the first line to an int
except OSError as err: # catch an operating system error
    print("OS error: {0}".format(err)) # print the error message
except ValueError: # catch the error while converting to int
    print("Could not convert data to an integer") # print a custom message
except: # catch all the other errors
    print("Unexpected error:", sys.exc_info()[0]) # print execution error
for arg in sys.argv[1:]: # get program's argument except the name
    try: # try
        file = open(arg, 'r') # open the file passed as argument
    except OSError: # catch exception
        print('cannot open', arg) # print an error message
    else: # step to execute if the exception was not raised
        print('file opened') # print a success message
        file.close() # close the file
def this_fails(): # define a function
    x = 1/0 # make the function raise an exception
try: # try
    this_fails() # call the function that will raise the exception
except ZeroDivisionError as err: # catch the exception
    print('Handling run-time error:', err) # print the exception's message
try: # try
    raise NameError('HiThere') # raise an exception with a custom message
except NameError: # catch the exception
    print('An exception flew by!') # print a message
    raise # raise the exception
def divide(x, y): # create a function
    try: # try
        result = x / y # divide the two arguments
    except ZeroDivisionError: # catch the division by 0 error
        print('division by zero') # print division by 0 message
    else: # else
        print('result is', result) # execute if no error occured
    finally: # execute always
        print('executing finally clause') # print the finally message
with open('myfile.txt') as file: # always close the opened file
    for line in file: # iterate over file's lines
        print(line, end="") # print the line

# Namespace
def scope_test(): # define a function
    def do_local(): # define an inner function to use the local variable
        spam = 'local spam' # assign a value to the local variable
    def do_nonlocal(): # define an inner function to change an outer variable
        nonlocal spam # define an outer scope variable 
        spam = 'nonlocal spam' # assign a value to the outer variable
    def do_global(): # define an inner function to change a global variable
        global spam # declare a global variable
        spam = 'global spam' # assign a value to the global variable
    spam = 'test spam' # declare and assign value to a local variable
    do_local() # do_local()
    print('After local assignment:', spam) # After local assignment: test spam
    do_nonlocal() # do_nonlocal()
    print('After nonlocal assignment:', spam) # After nonlocal assignment: nonlocal spam
    do_global() # do_global()
    print('After global assignment:', spam) # After global assignment: nonlocal spam
scope_test() # scope_test()
print('In global scope:', spam) # In global scope: global spam

# Class
class MyClass: # declare a class
    """A simple class.""" # breaf class description
    def my_class_function(self): # declare a class function
        return 'hello from my class function' # return a string
my_class = MyClass() # create an object of type MyClass
print(my_class.my_class_function()) # hello from my class function
class Complex: # define the Complex class
    def __init__(self, realpart, imagpart): # define the instantiation function
        self.r = realpart # assign the realpart argument to class variable
        self.i = imagpart # assign imagpart argument to class variable
comp_no = Complex(3.0, -4.5) # create an instance of the Complex class
print(comp_no.r, comp_no.i) # 3.0 -4.5
comp_no.r = 5.5 # change the r value
print(comp_no.r, comp_no.i) # 5.5 -4.5
class Dog: # declare a Dog class
    kind = 'canine' # declare a class variable shared by all instances
    def __init__(self, name): # define the instantiation function
        self.name = name # assign an instance variable
fido = Dog('Fido') # create a Dog object
buddy = Dog('Buddy') # create a Dog object
print(fido.kind) # canine
print(buddy.kind) # canine
print(fido.name) # Fido
print(buddy.name) # Buddy
class Warehouse: # declare a class
    region = 'west' # define the region attribute
w1 = Warehouse() # declare a Warehouse object
w2 = Warehouse() # declare another Warehouse object
print(w1.region) # west
print(w2.region) # west
w2.region = 'east' # change the second Warehouse attribute value
print(w1.region) # west
print(w2.region) # east
print(Warehouse.region) # west
Warehouse.region = 'north' # change class attribute value
print(w1.region) # north
print(w2.region) # east
class Bag: # define the Bag class
    def __init__(self) -> None: # define the instantiation function
        self.data = [] # initialize a list
    def add(self, x): # define a class method
        self.data.append(x) # append argument to class list
    def add_twice(self, x): # define a new class method
        self.add(x) # call other class method
        self.add(x) # second call to the class method
class DerivedClass(BaseClass): # define a class that derives from another class in the same module
class DerivedClass(module.BaseClass): # define a class that derives from a class in another module
d = DerivedClass() # create a DerivedClass object
isinstane(d, DerivedClass) # True
issubclass(DerivedClass, BaseClass) # True
class Employee: # declare an Employee class
    pass # no implementation
john = Employee() # declare an Employee object
john.name = 'John Doe' # create a name field
john.age = 30 # create an age field

# Iterator
s = 'abc' # declare a string
it = iter(s) # declare an itearator
print(next(it)) # a
print(next(it)) # b

# Generator
def reverse(data): # declare the reverse function
    for index in range(len(data)-1, -1, -1): # iterate backwards
        yield data[index] # return the value and interrupt execution
my_list = [1, 2, 3] # declare a list
current = reverse(my_list) # get the current element
print(next(current)) # 3
print(next(current)) # 2
`
