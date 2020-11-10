// delete an item y index

arr = ['a', 'b', 'c', 'd', 'e']

function delete_by_index (arr, i) {
    for (let j = i+1; j<arr.length; j++) {
        arr[j-1]=arr[j]
    }
    arr.length -= 1
    return arr
}

result = delete_by_index(arr, 2)
console.log(result)


// combine two or more arrays and sort the final array

a = [1,2,3]
b = [4,5,6]
c = [7,8,9,0]

function merge_and_sort (...args) {
    let result = [];
    for (let i = 0; i<args.length; i++) {
        result.push(...args[i])
    }

    result.sort(function(a,b){return a-b})
    return result
}

console.log(merge_and_sort(a,b,c))


// flat an array of arrays

nested_arrays = [2,[3,5],[[1,8],4,[7,6]],3]
console.log(nested_arrays.flat(Infinity))


// find an item in an array

items_list = [3,7,1,9,4,6,5]

function find_by_item (arr, item) {
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] == item) {
            return `index: ${i}, item: ${item}`
        }
    }
    
    return `Not Found!!!`
}

console.log(find_by_item(items_list, 9))



// replace an item in array

arr = ['a', 'b', 'c', 'd', 'e', 'f', 'e']

function replace_by_item (arr, currentItem, newItem) {
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] == currentItem) {
            arr[i] = newItem
        }
    }

    return arr
}

console.log(replace_by_item(arr, 'e', 't'))



// extract numbers from a string

my_string = "I have 2 apples and 3 pineapples"

function extract_numbers (text) {
    return text.match(/\d+/g).map(Number)
    
}

console.log(extract_numbers(my_string))


// remove duplicate items of an array

items = [1,3,5,2,6,1,7,3,8,9,3]

let uniqueItems = items.filter((c, index) => {
    return items.indexOf(c) === index;
});

console.log(uniqueItems)
