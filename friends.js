// Declaring a variable called "friendsList" and assigning it to an array of strings.
const friendsList = ["Ross", "Jim", "Bob", "Jenny"]

// Using console.log() to print the first element of the array "friendsList".
console.log(friendsList[0])

// Using console.log() to print the last element of the array "friendsList".
console.log("Friends List", friendsList.join(" | "))

// Using console.log() to print the length of the array "friendsList".
console.log(friendsList.toString())

// Using console.log() to print the length of the array "friendsList".
console.log(friendsList.length)


// This code adds the string "Jill" to the end of the array.


const vegtables = ["Carrots", "Potatoes", "Broccoli", "Apples", "Oranges", "Spinach"]
const fruits = vegtables.splice(3, 2)
console.log("Fruits", fruits)
console.log("Vegtables", vegtables)


const dogBreeds = ["Bulldog", "Beagle", "Labrador", "Springer Spaniel", "Boxer"]
const myFavoriteDogs = dogBreeds.slice(1, 4)
console.log("Dog Breeds", dogBreeds)
console.log("My Favorite", myFavoriteDogs)