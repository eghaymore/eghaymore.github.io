'''project 1'''
import random
import math
from time import perf_counter
def make_data():
    random.seed(0)
    data = random.sample(range(5000000), 5000000)
    return data

def sort_lists(lyst_one, lyst_two, lyst_three):
    """
    sort all lists
    """
    lyst_one.sort()
    lyst_two.sort()
    lyst_three.sort()

def linear_search(lyst, target):
    for a_item in lyst:
        if a_item == target:
            return True
    return False

def binary_search(lyst, target):
    """
    binary search
    not recursive
    assumes sorted list
    """
    low_bound=0
    high_bound=len(lyst) - 1
    check_me = math.trunc(len(lyst) / 2)#variable used to store the midpoint

    while low_bound <= high_bound:
        if lyst[check_me] > target:
            high_bound = check_me -1
            check_me = math.trunc((high_bound - low_bound)/2)
        elif lyst[check_me] < target:
            low_bound = check_me + 1
            check_me = math.trunc((high_bound - low_bound)/2 + low_bound)
        else:
            return True
    return False

def jump_search(lyst, target):
    block_size = math.trunc(math.sqrt(len(lyst)))
    jump_counter = 0
    checkme = 0

    while checkme <len(lyst) and lyst[checkme]<=target:
        if lyst[checkme] == target:
            return True
        jump_counter+=1
        checkme = jump_counter * block_size
       
    if checkme >= len(lyst):
            checkme = len(lyst)-1
    for a in range(checkme-block_size, checkme + 1):
        if lyst[a] == target:
            return True

    return False

def search_lists(lyst_one, lyst_two, lyst_three, index):
    """
    helper for main
    searches all lists
    """
    #linear search
    startpoint_one = perf_counter()
    linear_search(lyst_one, lyst_one[index])
    endpoint_one = perf_counter()
    #report # 1
    output = endpoint_one - startpoint_one
    print("Time for linear search: " + "{:.9f}".format(output))

    #bianry search
    startpoint_two = perf_counter()
    binary_search(lyst_two, lyst_two[index])
    endpoint_two = perf_counter()
    #report # 2
    output = endpoint_two - startpoint_two
    print("Time for binary search: " + "{:.9f}".format(output))

    #jump search
    startpoint_three = perf_counter()
    binary_search(lyst_three, lyst_three[index])
    endpoint_three = perf_counter()
    #report # 3
    output = endpoint_three - startpoint_three
    print("Time for jump search: " + "{:.9f}".format(output))

def main():
    """
    runs each search, times each run, and
    reports the results to the console in the order above
    array size 5million
    """
    #create 3 lists
    lyst_one = make_data()
    lyst_two = make_data()
    lyst_three = make_data()

    # search #1
    print("Search for first item in list: \n")
    search_lists(lyst_one, lyst_two, lyst_three, 0)
    sort_lists(lyst_one, lyst_two, lyst_three)
    print("\n")

    # search #2 25000000
    print("Search for middle item in list: \n")
    search_lists(lyst_one, lyst_two, lyst_three, 2500000)
    sort_lists(lyst_one, lyst_two, lyst_three)
    print("\n")

    # search #3 49999999
    print("Search for last item in list: \n")
    search_lists(lyst_one, lyst_two, lyst_three, 4999999)
    sort_lists(lyst_one, lyst_two, lyst_three)
    print("\n")
    
    # search #4 -1
    print("Search for item not in list: \n")
    #linear search
    startpoint_one = perf_counter()
    linear_search(lyst_one, -1)
    endpoint_one = perf_counter()
    #report # 1
    output = endpoint_one - startpoint_one
    print("Time for linear search: " + "{:.9f}".format(output))

    #binary search
    startpoint_two = perf_counter()
    binary_search(lyst_two, -1)
    endpoint_two = perf_counter()
    #report # 2
    output = endpoint_two - startpoint_two
    print("Time for binary search: " + "{:.9f}".format(output))

    #jump search
    startpoint_three = perf_counter()
    binary_search(lyst_three, -1)
    endpoint_three = perf_counter()
    #report # 3
    output = endpoint_three - startpoint_three
    print("Time for jump search: " + "{:.9f}".format(output))

if __name__ == "__main__":
    main()