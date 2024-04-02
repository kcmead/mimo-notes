#VARIABLES ----------------------------------------------------------------

# variables with multiple words or letters are connected with "_" in between
home_city_provence = "ABC Provence"
car_1 = "Porsche"  # car_1 is the variable, or name of variable, "porsche" is the value of the variable
movie_quote = "Winter is coming."

# python is read in order of appearance within the code:
step_1 = "Collect plants"
step_2 = "?"
step_3 = "Profit"

# 'print()' tells computer to display a value in the console, or shell
print("Hello, World!")

# storing a value in a variable, then printing the value
greeting = "Hello, World!"
print(greeting)

# change value of variable based on placement of code
status = "Watching Netflix."
status = "Relaxing outside."
print(status)  #prints "Relaxing outside."

# give variables the value of other variables
default_option = "upload"
new_status = "download"
new_status = default_option
print(new_status)

# add string values together
"Following:" + "69"
followers = "53"
following = "69"
print("Followers: " + followers + " and Following: " + following)

# add numbers together
number_of_computers = 5 + 1
print(number_of_computers)  # shows 6 in console

# multiplying numbers
percent = 0.25 * 100

# dividing 
number_from_percent = 25 / 100

# storing calculations in variables
private = 3
public = 10
total = private + public
print("Total Posts:")
print(total)

# True and False
powered_on = True # first letters, T and F, are capitalized

# to negate a True or False - not
print(not True)

available = True
print(not available)

# comparing numbers 
5 == 5
print(10 == 10)  # True
print(9 == 10)   # False
print(1 != 10)  # True (not equal to)

# f-strings (short formatted strings) - display expressions like adding string and number without errors
print(f"{2} new messages")  # shows up as  "2 new messages"

new_messages = 2
print(f"{new_messages} new messages")  # shows up as "2 new messages"

new_msg = 5
read_msg = 2
print(f"{new_msg - read_msg} unread messages")

movie = "Star Wars"
display = f"Airing Tonight: {movie}"
print(display)


