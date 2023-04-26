# Array Methods in JavaScript 

## The array class has a set of built-in methods that can be used in strings

## Arrays

### An array is a special variable which can hold more Than one value

``` 
const friends = ["Ross", "Jim", "Bob", "Jenny"]

```
### You can access an array element by referring to the index number:
**Note: indexing in JavaScript starts at [0] being the first element.** 

```
const friends = ["Ross", "Jim", "Bob", "Jenny"]
let friend = friends[0];
console.log(friend)

Result: Ross
```

## Array Methods 

### toString()
#### The JavaScript method toString() converts an array to a string of array values separated by commas.

```
const.friends = ["Ross", "Jim", "Bob", "Jenny"]
console.log(friends.toString())

Result: Ross,Jim,Bob,Jenny

```
### join()
#### The join() method is similar to the toString() method as it also joins all the elements into a string. To differentiate the join method allows you to specify a delimeter such as | or * </p>

```
console.log(friend.join(" | "))

Result: Ross|Jim|Bob|Jenny

```

### length
#### The .length method returns the length of an array

``` 
console.log(friends.length)

Result: 4

```
### pop
#### The pop method removes the last element in the array and returns the element that has been removed.

```
friends.pop()

Result = Jenny

```

### push
#### The push method adds a new element to the end of the array<p>

```
friends.push("Jill")
console.log(friends)

Result: ["Ross", "Jim", "Bob", "Jenny", "Jill"]

```
### splice
#### The splice method can be used remove or replace items in an array. First you select at what position you want the splice operation to start by index, and then you declare the number of values you want to remove/replace and finally you enter the value you want to put into the array.  

``` 
const vegtables = ["Carrots", "Potatoes", "Broccoli", "Apples", "Oranges", "Spinach"]
const fruits = vegtables.splice(3, 2)
console.log("Fruits", fruits)
console.log("Vegtables", vegtables)

Result: Fruits ['Apples', 'Oranges']
        Vegtables ['Carrots','Potatoes','Broccoli', 'Spinach']

```
### slice
#### The slice method slices out a portion of an array into a new array.</p>

```
const dogBreeds = ["Bulldog", "Beagle", "Labrador", "Springer Spaniel", "Boxer"]
const myFavoriteDogs = dogBreeds.slice(1, 4)
console.log("Dog Breeds", dogBreeds)
console.log("My Favorite", myFavoriteDogs)

Result: Dog Breeds ['Bulldog', 'Beagle', 'Labrador', 'Springer Spaniel', 'Boxer']
        My Favorite ['Beagle','Labrador','Springer Spaniel']


```
**Note** 
The slice() method creates a new array.
The slice method does not remove an element from the original array 
 