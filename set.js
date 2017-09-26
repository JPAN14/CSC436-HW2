var set = new Set();

set.add(1);
set.add(10);
set.add("here is some text");
var o = {a: 1, b: 2};
set.add(o);

console.log(set.has(1)); 									// Should return true
console.log(set.has(3)); 									// False. 3 has not been added into the Set yet.
console.log(set.has(10)); 									// True
console.log(set.has(Math.sqrt(100))); 						// True, the square root of 25 is 5. 
console.log(set.has("Here is some text".toLowerCase())); 	// True
console.log(set.has(o));  									// True
console.log(set.size);										// 4 elements

set.delete(10);												// This removes 10 from the Set
console.log(set.has(10));									// Now is false, as 10 was removed.
console.log(set.size);										// Is now 3. 