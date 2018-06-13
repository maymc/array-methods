// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!
var nameArray = [];
var firstName = "May";
var lastName = "Chen";
nameArray.push(firstName); //pushes firstName into array
nameArray.push(lastName); //pushes lastName into array

for(var i=6; i<=10; i++){
    genericNumberArray.push(i); //pushes #6-10 to the array
}
//////////
var popResult = colors.pop(); //pops out the last element and returns the value popped
//////////
scrambledWords.reverse(); //reverses the order of the elements
//////////
phoneNumber.reverse(); //reverses the order of the elements
//////////
var nextOrder = orderQueue.shift(); //removes first element in the array and returns the element removed
//////////
mixedNums.sort(); //sorts the numbers in order
//////////
mixedWords.sort(); //sorts this array alphabetically
/////////
var notFruit = fruitCollection.splice(1, 3);
/////////
gemBox.splice(5,2);
gemBox.splice(6,4);
/////////
upToTen.splice(2,0,3,4,5,6,7,8);
//////////
brownOnly.splice(1,5, "brown", "brown", "brown");
//////////
var orderedValuesNewLength = orderedValues.unshift(1,2,3);
//////////
var randomThingsArray = genericNumberArray.concat(colors);
/////////
var order2 = [{takeOut: "pizza"},{takeOut: "candy"}];
var updatedOrders = orderQueue.concat(order2);
//////////