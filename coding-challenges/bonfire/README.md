# [Bonfire-Solutions](http://www.freecodecamp.com)

##### By: [Leo](http://coderbyte.com/CodingArea/Profile/?user=odran037)

#### 01. Waypoint: Pair Program on Bonfires 

```
// http://www.freecodecamp.com/challenges/Waypoint:%20Pair%20Program%20on%20Bonfires
```

#### 02. Meet Bonfire 

```
function meetBonfire(argument) {
  console.log('you can read this function\'s argument in the developer tools', argument);
  return true;
}

meetBonfire('You can do this!');
```

#### 03. Reverse a String 

```
function reverseString(str) {
  var result = '';
  for(var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

reverseString('hello');
```

#### 04. Factorialize a Number 

```
function factorialize(num) {
  var result = 1;
  if(num === 0 || num === 1) {
    return 1;
  } else {
    for (var i = num; i > 0; i-- ) {
      result *= i;
    }
  }
  return result;
}

factorialize(5);
```

#### 05. Check for Palindrome 

```
function palindrome(str) { 
  str = str.match(/[a-z]/gi).join('').toLowerCase();
  var reversed = str.split('').reverse().join('');
  return str === reversed;
}

palindrome("eye");
```

#### 06. Find the Longest Word in a String 

```
function findLongestWord(str) {
  var longest = 0;
  var words = str.split(' ');
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > longest) {
      longest = words[i].length;
    }
  }
  return longest;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
```

#### 07. Title Case a Sentence 

```
function titleCase(str) {
  str = str.split(' ');
  for(var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1).toLowerCase();
  }
  return str.join(' ');
}

titleCase("I'm a little tea pot");
```

#### 08. Return Largest Numbers in Arrays 

```
function largestOfFour(arr) {
  var result = [];
  var largest = 0;
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      if(arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    result.push(largest);
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

#### 09. Confirm the Ending 

```
function end(str, target) {
  if(target.length < 2) {
    if(str[str.length - 1] === target) {
      return true;
    } else {
      return false;
    }
  } else {
    var arr = str.split(' ');
    if(arr[arr.length - 1] === target) {
      return true;
    } else {
      return false;
    }
  }
}

end('Bastian', 'n');
```

#### 10. Repeat a string repeat a string 

```
function repeat(str, num) {
  var result = '';
  if(num <= 0) {
      return '';
  } else {
      for(var i = 0; i < num; i++) {
          result += str;
      }
  }
  return result;
}

repeat('abc', 3);
```

#### 11. Truncate a string 

```
function truncate(str, num) {
  if(str.length > num) {
    str = str.split(' ');
    return str[0] + '...';
  } else {
    return str;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
```

#### 12. Chunky Monkey 

```
function chunk(arr, size) {
  var result = [];
  for(var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

chunk(['a', 'b', 'c', 'd'], 2);
```

#### 13. Slasher Flick 

```
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);
```

#### 14. Mutations 

```
function mutation(arr) {
  var one = arr[0].toLowerCase();
  var two = arr[1].toLowerCase();
  var count = 0;
  for(var i = 0; i < one.length; i++) {
    for(var j = 0; j < two.length; j++) {
        if(one[i] === two[j]) {
            count += 1;
        }
    }
  }
  return count >= two.length;
}

mutation(['hello', 'hey']);
```

#### 15. Falsey Bouncer 

```
function bouncer(arr) {
  var result = [];
  for(var i in arr) {
      if(arr[i]) {
          result.push(arr[i]);
      }
  }
  return result;
}

bouncer([7, 'ate', '', false, 9]);
```

#### 16. Where art thou 

```
function where(collection, source) {
  var arr = collection.filter(function(obj){
    var contains = false;
    for(var prop in source) {
      if(obj.hasOwnProperty(prop) && obj[prop] === source[prop]) {
        contains = true;
      }
    }
    return contains;
  });
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
```

#### 17. Seek and Destroy 

```
function destroyer(arr) {
  var remove = [];
  for(var i = 1; i < arguments.length; i++) {
    remove.push(arguments[i]);
  }
  var newArr = arr.filter(function(x){
    var confirm = true;
    for (var i = 0; i < remove.length; i++) {
      if (x === remove[i]) confirm = false;
    }
    return confirm;
  });
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

#### 18. Where do I belong 

```
function where(arr, num) {
  arr.push(num);
  arr.sort();
  return arr.indexOf(num);
}

where([40, 60], 50);
```

#### 19. Sum All Numbers in a Range 

```
function sumAll(arr) {
  var result = 0;
  var first;
  var second;
  if(arr[0] > arr[1]) {
    first = arr[1];
    second = arr[0];
  } else {
      first = arr[0];
      second = arr[1];
  }
  for(var i = first; i <= second; i++) {
    result += i;
  }
  return result;
}

sumAll([1, 4]);
```
###```# 20. Diff Two Arrays 

``````#### 21. Roman Numeral Converter 


```#### 22. Search and Replace 

```
function replace(str, before, after) {
 var loA = "a".charCodeAt();
 var loZ = "z".charCodeAt();
 
 if(before.charAt(0).charCodeAt() > loA && before.charAt(0).charCodeAt() < loZ) {
     after = after.charAt(0).toLowerCase() + after.substr(1);
 } else {
     after = after.charAt(0).toUpperCase() + after.substr(1);
 }
 var arr = str.split(' ');
 for(var i = 0; i < arr.length; i++) {
     if(arr[i] === before) {
         arr[i] = after;
     }
 }
 return arr.join(' ');
}

replace("Let us go to the store", "store", "mall");
```
###```# 23. Pig Latin 

``````#### 24. DNA Pairing 


```#### 25. Missing letters 

```
function fearNotLetter(str) {
  for(var i = 1; i < str.length; i++) {
    if(str[i].charCodeAt() - str[i - 1].charCodeAt() > 1) {
        return (String.fromCharCode(str[i].charCodeAt() - 1));
    }
  }
}

fearNotLetter('abce');
```

#### 26. Boo who 

```
function boo(bool) {
  return bool === true || bool === false;
}

boo(null);
```
###```# 27. Sorted Union 

``````#### 28. Convert HTML Entities 


``````#### 29. Spinal Tap Case 


``````#### 30. Sum All Odd Fibonacci Numbers 


``````#### 31. Sum All Primes 


``````#### 32. Smallest Common Multiple 


``````#### 33. Finders Keepers 


```#### 34. Drop it 

```
function drop(arr, func) {
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

drop([1, 2, 3], function(n) {return n < 3; });
```

#### 35. Steamroller 

```
function steamroller(arr) {
    var result = [];
    arr = arr.join().match(/([a-z0-9])/gi);
    for(var i = 0; i < arr.length; i++) {
        if(Number(arr[i])) {
            result.push(Number(arr[i]));   
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

steamroller([1, [2], [3, [[4]]]]);
```
###```# 36. Binary Agents 

```#### 37. Everything Be True 

```
function every(collection, pre) {
  for(var prop in collection) {
    if(!collection[prop][pre]) {
      return false;
    }
  }
  return true;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
```

#### 38. Arguments Optional 

```


/*
 * ****************************************
 * *** Intermediate Algorithm Scripting ***
 * ****************************************
 *
 */
```

#### 01. Make a Person 

``````

#### 02. Map the Debris 

``````

#### 03. Pairwise 

```


/*
 * ****************************************
 * *** Advanced Algorithm Scripting ***
 * ****************************************
 *
 */
```

#### 01. Validate US Telephone Numbers 

``````

#### 02. Symmetric Difference 

``````

#### 03. Exact Change 

``````

#### 04. Inventory Update 

``````

#### 05. No repeats please ```

```

#### 06. Friendly Date Ranges ```
