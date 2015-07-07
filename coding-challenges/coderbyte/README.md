# [CoderByte-Solutions](http://www.oderbyte.com)

##### By: [Leo](http://coderbyte.com/CodingArea/Profile/?user=odran037)

#### First Reverse

```
function FirstReverse(str) {
  return str.split('').reverse().join('');
}
```

#### First Factorial

```
function FirstFactorial(num) { 
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
```

#### Longest Word

```
// Solution 1

function LongestWord(sen) {
  var words = sen.match(/(\w+)/g);
  var longest = '';
  for (var i = 0; i < words.length; i++) {
    if(words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest; 
}

// Solution 2

function LongestWord(sen) { 
    var words = sen.split(' '),
        longest = '';
    for (var index in words) {
        if (words[index].charCodeAt(0) >= 'a'.charCodeAt(0) && words[index].charCodeAt(0) <= 'z'.charCodeAt(0) && 
            words[index].charCodeAt(words[index].length - 1) >= 'a'.charCodeAt(0) && words[index].charCodeAt(words[index].length - 1) <= 'z'.charCodeAt(0)) {
            if (words[index].length > longest.length) {
              longest = words[index];
            }
        }
    }
    return longest;
}
```

#### Letter Changes

```
// Solution 1

function LetterChanges(str) {
  str = str.toLowerCase();
  var shift = [];
  var shifted = "";
  var vowels = ['a','e','i','o','u'];
  for(var i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) >= "a".charCodeAt() &&
      str.charCodeAt(i) <= "z".charCodeAt()) {
      shift.push(String.fromCharCode(str.charCodeAt(i) + 1));
    } else {
      shift.push(str[i]);
    }
  }
  for(var j = 0; j < shift.length; j++) {
    for(var v in vowels) {
      if(shift[j] === vowels[v]) {
        shift[j] = shift[j].toUpperCase();
      }
    }
    shifted += shift[j];
  }
  return shifted;
}

// Solution 2

function LetterChanges(str) { 
    var transform = '';
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 'a'.charCodeAt(0) && 
            str.charCodeAt(i) <= 'z'.charCodeAt(0)) {
            switch (String.fromCharCode(str.charCodeAt(i) + 1)) {
                case 'a':
                    transform += 'A';
                    break;
                case 'e':
                    transform += 'E';
                    break;
                case 'i':
                    transform += 'I';
                    break;
                case 'o':
                    transform += 'O';
                    break;
                case 'u':
                    transform += 'U';
                    break;
                default:
                    transform += String.fromCharCode(str.charCodeAt(i) + 1);
            }
        } else {
            transform += str[i];
        }
    }
    return transform;     
}
```

#### Simple Adding

```
function SimpleAdding(num) {
  var result = 0;
  for(var i = 0; i <= num; i++) {
    result += i;
  }
  return result; 
}
```

#### Letter Capitalize

```
// Solution 1

function LetterCapitalize(str) { 
  var words = str.split(' ');
  var capitalized = [];
  for(var i = 0; i < words.length; i++) {
    capitalized.push(words[i].charAt(0).toUpperCase() + words[i].substr(1));
  }
  return capitalized.join(' ');     
}

// Solution 2

function LetterCapitalize(str) { 
    var words = str.split(' ');
    for (var index in words) {
        var capitalized = words[index][0].toUpperCase();
        words[index] = capitalized + words[index].substring(1);
    }
    return words.join(' ');   
}
```

#### Simple Symbols

```
// Solution 1

function SimpleSymbols(str) { 
  for(var i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) >= 'a'.charCodeAt(0) && str.charCodeAt(i) <= 'z'.charCodeAt(0)) {
      return str.charCodeAt(i - 1) === '+'.charCodeAt(0) && str.charCodeAt(i + 1) === '+'.charCodeAt(0);
    }
  }
}

// Solution 2

function SimpleSymbols(str) { 
    var arr = str.split('=');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < 3 || !isNaN(arr[i])) {
            break;
        } else if (arr[i].indexOf('+') === 0 && arr[i].lastIndexOf('+') === (arr[i].length - 1)) {
            return true;
        }
    }
    return false;  
}
```

#### Check Nums

```
function CheckNums(num1,num2) { 

  if(num1 < num2) {
    return true;
  } else if(num1 > num2) {
    return false;
  } else {
    return -1;
  }
         
}
```

#### Time Convert

```
// Solution 1

function TimeConvert(num) {
  var hours = 0;
  var minutes = 0;
  if(num > 60) {
    hours = Math.floor(num / 60);
  } else if(num % 60 === 0) {
    hours = num / 60;
  }
  minutes = num % 60;
  return hours.toString() + ":" + minutes.toString();
}

// Solution 2

function TimeConvert(num) { 
  var minutes = num % 60;
  var hours = Math.floor(num/60);
  return hours + ":" + minutes;
}
```

#### Alphabet Soup

```
function AlphabetSoup(str) {
    return str.split('').sort().join('');
}
```

#### AB Check

```
function ABCheck(str) {  
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
      if (str[i] === 'a' && str[i + 4] === 'b') return true;
    }
    return false;
}
```

#### Vowel Count

```
// Solution 1

function VowelCount(str) {
    str = str.toLowerCase();
    var vowels = ['a','e','i','o','u'];
    var count = 0;
    for(var i = 0; i <= str.length; i++) {
        for(var j in vowels) {
            if(str[i] === vowels[j]) {
                count++;
            }
        }
    }
    return count;
}

// Solution 2

var VowelCount = function(str) {
    var vowels = 0;
    for (var i = 0; i < str.length; i++) {
        switch (str[i].toLowerCase()) {
            case 'a':
                vowels++;
                break;
            case 'e':
                vowels++;
                break;
            case 'i':
                vowels++;
                break;
            case 'o':
                vowels++;
                break;
            case 'u':
                vowels++;
        }
    }
    return vowels;
};
```

#### Word Count

```
function WordCount(str) { 
  return str.split(' ').length;
}
```


#### Ex Oh

```
function ExOh(str) { 
  var x = str.split('x').length,
      o = str.split('o').length;
  return x === o;
}
```

#### Palindrome

```
// Solution 1

function Palindrome(str) { 
  str = str.match(/[a-z]/gi).join('').toLowerCase();
  var reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Solution 2

function Palindrome(str) {
  str = str.toLowerCase();
  var words = '';
  for(var i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) >= 'a'.charCodeAt() && str.charCodeAt(i) <= 'z'.charCodeAt()) {
      words += str[i];
    }
  }
  return words === words.split('').reverse().join('');
}
```

#### Arith Geo

```
// Solution 1

function ArithGeo(arr) { 
    var ari = arr[1] - arr[0],
        geo = arr[1] / arr[0];
    if (arr[arr.length - 1] - ((arr.length - 1) * ari) === arr[0]) {
        return 'Arithmetic';
    } else if (arr[arr.length - 1] / Math.pow(geo, arr.length - 1) === arr[0]) {
        return 'Geometric';
    } else {
        return -1;
    }
}

// Solution 2

function ArithGeo(arr) {
    var len = arr.length;
    var ari = arr[len-1] - arr[len-2];
    var geo = arr[len-1] / arr[len-2];
    var result;
    function check(arr, x) {
        !x ? x = 1 : x;
        if(arr[x] - arr[x - 1] === ari) {
            result = 'Arithmetic';
        } else if(arr[x] / arr[x - 1] === geo) {
            result = 'Geometric';
        } else {
            result = '-1';
        }
    }
    if(arr.length < 4) {
        check(arr);
    } else {
        for(var i = 1; i < len - 2; i++) {
            check(arr, i);
        }
    }
    return result;
}
```

#### Array Addition I

```
function ArrayAdditionI(arr) {
    
  function sortArray(a,b) {
      return a - b;
  }
  
  arr = arr.sort(sortArray);
  var largest = arr.pop();
  var total = eval(arr.join('+'));
  
  if(total === largest) return true;
  
  for(var i = 0; i < arr.length; i++) {
    if(total - arr[i] === largest) return true;
  }
  return false;
  
}
```

#### Letter Count I

// Solutions

#### Second GreatLow

// Solutions

#### Division Stringified

// Solutions

#### Counting Minutes I

// Solutions

#### Mean Mode

// Solutions

#### Dash Insert

// Solutions

#### Swap Case

// Solutions

#### Number Addition

```
// Solution 1

function NumberAddition(str) {
  var sum = 0;
  var total = 0;
  for (var i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      sum = sum * 10 + parseInt(str[i]);
    } else {
      total += sum;
      sum = 0;
    }
  }
  total += sum;
  return total;    
}

// Solution 2 - Regular expression

function NumberAddition(str) { 
  var nums = str.match(/\d+/g);
  var result = 0;
  for(var i in nums) {
    result += Number(nums[i]);
  }
  return result; 
}
```

#### Third Greatest

// Solutions

#### Powers of Two

// Solutions

#### Additive Persistence

// Solutions

#### Multiplicative Persistence

// Solutions

#### Off Line Minimum

// Solutions

#### Prime Time

```
function PrimeTime(num) { 
  debugger;
  for (var i = num; i > 2; i--) {
      if (num % (i - 1) === 0) {
      return false;
        }
    }
    return true;
}
```
