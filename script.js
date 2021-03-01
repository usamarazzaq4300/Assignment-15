// START OF QUESTION 1

// 1. Write a js program to find maximum between two numbers.
// var firstNum = prompt("Please Enter First Number:")
// var secNum = prompt("Please Enter Second Number:")
// if (firstNum > secNum)
// {
//     alert("First Number is greater than second number.")
// }
// else
// {
//     alert("Second Number is greater than first number.")
// }

// 2. Write a js program to find maximum between three numbers.
// var firstNum = prompt("Please Enter First Number:")
// var secNum = prompt("Please Enter Second Number:")
// var thirdNum =  prompt("Please Enter third Number:")
// if(firstNum>secNum && firstNum>thirdNum)
// {
//     alert("First Number is greater than second and third one.")
// }
// else if (secNum>firstNum && secNum>thirdNum)
// {
//     alert("Second Number is greater than first and third one.")
// }
// else
// {
//     alert("Third Number is greater than first and second one.")
// }

// 3. Write a js program to check whether a number is negative, positive or zero.
// var number = prompt("Please Enter number to check:")
// if (number > 0)
// {
//     alert("The number is positive.")
// }
// else if (number < 0)
// {
//     alert("The number is negative.")
// }
// else
// {
//     alert("The number is zero.")
// }

// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
// var number = prompt("Please enter a number:")
// if(number % 5 == 0 || number % 11 == 0)
// {
//     alert("The number is divisible by 5 or 11.")
// }
// else
// {
//    alert("The number is not divisible by 5 or 11.") 
// }

// 5. Write a js program to check whether a number is even or odd.
// var num = parseInt(prompt("Please enter number:")) ;
// var a1 = []
// var a2 = []
// for (i = 1 ; i<=num; i = i + 2)
// {
//     a1[i] = i ;
//     if(num== a1[i])
//     {
//         document.write("The number is odd.")
//     }
// }
// for (i = 0 ; i<=num; i = i + 2)
// {
//     a2[i] = i ;
//     if(num== a2[i])
//     {
//         document.write("The number is even.")
//     }
// }

// 6. Write a js program to check whether a year is leap year or not.
// var year = prompt("Please enter a year:")
//  if (year % 4 == 0)
//  {
//      alert(year + " is a leap Year.")
//  }
//  else
//  {
//     alert(year + " is not a leap Year.")
//  }

// 7. Write a js program to check whether a character is alphabet or not.
// var character = prompt("Please enter a character:")
// if ((character>="a" && character<="z")||(character>="A" && character<="Z"))
// {
//     alert("This is an alphabet.")
// }
// else
// {
//     alert("This is not an alphabet.")
    
// }

// 8. Write a js program to input any alphabet and check whether it is vowel or consonant
// var character = prompt("Please enter a character:")
// if (character == "A" ||character == "a" || character == "E" ||character == "e" ||character == "I" || character == "i" ||character == "O" ||character == "o" ||character == "U" || character == "u")
// {
//     alert("This character is vowel.")
// }
// else
// {
//     alert("This character is consonant.")
// }
// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.
// var character = prompt("Please Enter a character:")
// if ((character>="a" && character<="z")||(character>="A" && character<="Z"))
// {
//     alert("This is an alphabet.")
// }
// else if (character>="0" && character<="9")
// {
//     alert("The character is a digit.")
// }
// else
// {
//     alert("The character is a special character.")
// }


// END OF QUESTION 1

// STRING HANDLING
// 1. Write a js program to find length of a string.
// var myName = "Usama"
// var strLen = myName.length
// document.write(strLen)

// 2. Write a js program to copy one string to another string.
// var myName = "Usama"
// var newName = myName.slice(0,myName.length)
// document.write(newName)

// 3. Write a js program to concatenate two strings.
// var firstName = "Usama"
// var lastName = "Razzaq"
// var fullName = firstName+" "+lastName
// document.write(fullName)

// 5. Write a js program to convert lowercase string to uppercase.
// var myName = "Usama"
// var upperName = myName.toLocaleUpperCase()
// document.write(upperName)

// 6. Write a js program to convert uppercase string to lowercase.
// var myName = "USAMA"
// var lowerName = myName.toLocaleLowerCase()
// document.write(lowerName)

// 7. Write a js program to toggle case of each character of a string.
// var char = "JavaScriPT"
// for (var  i = 0 ; i<=char.length; i = i + 2)
// {
//      = char.charAt(i)
// }

// 8. Write a js program to find total number of alphabets, digits or special character in a string.
// var char = "usama33bb27!$"
// var alphaCounter = 0;
// var digitCounter = 0;
// var speCounter = 0;
// for (var i = 0 ; i<=char.length; i++)
// {
//     if ((char[i]>="a" && char[i]<="z")||(char[i]>="A" && char[i]<="Z"))
//     {
//         alphaCounter = alphaCounter + 1 ;
//     }
//     else if (char[i]>="0" && char[i]<="9")
//     {
//         digitCounter =digitCounter + 1;
//     }
//     else
//     {
//         speCounter = speCounter + 1;
//     }
// }
// speCounter= speCounter - 1
// document.write("There are "+alphaCounter+" alphabets"+" "+digitCounter+" digits and "+speCounter+" special characters.")

// 9. Write a js program to count total number of vowels and consonants in a string.
// var char = "A quick brown fox jumps over the lazy dog"
// var vowelCounter = 0;
// var consonantCounter = 0;
// for (var i = 0; i<=char.length; i++)
// {
//     if (char[i] == "A" ||char[i] == "a" || char[i] == "E" ||char[i]== "e" ||char[i] == "I" || char[i] == "i" ||char[i] == "O" ||char[i] == "o" ||char[i] == "U" || char[i] == "u")
//     {
//         vowelCounter = vowelCounter + 1;
//     }
//     else
//     {
//         consonantCounter = consonantCounter + 1;
//     }
// }
// document.write("There are "+vowelCounter+" vowels and "+consonantCounter+" consonant in the string.")

// 10. Write a js program to count total number of words in a string.
// var char = "A quick brown fox jumps over the lazy dog"
// var counter = 1;
// for (var i = 0; i<=char.length; i++)
// {
//     if (char[i] == " ")
//     {
//         counter = counter + 1;
//     }
// }
// document.write("There are "+counter+" words in a string.")

// 11. Write a js program to find reverse of a string.
// var originalString = "javascript"
// var character ;
// var reverseString ;
// reverseString = originalString.slice(originalString.length - 1)
// for (var i = 2; i<=originalString.length; i++)
// {   
//    character = originalString.slice(originalString.length - i , originalString.length - i+1)
//    reverseString = reverseString+character   
// }
// document.write("The original string is "+originalString+" and reverse String is "+reverseString)

// 12. Write a js program to check whether a string is palindrome or not.
// var originalString = "javascript"
// var character ;
// var reverseString ;
// reverseString = originalString.slice(originalString.length - 1)
// for (var i = 2; i<=originalString.length; i++)
// {   
//    character = originalString.slice(originalString.length - i , originalString.length - i+1)
//    reverseString = reverseString+character   
// }
// if(originalString == reverseString)
// {
//     document.write("The string is palindrome.")
// }
// else
// {
//     document.write("The string is not palindrome.")
// }

// 14. Write a js program to find first occurrence of a character in a given string.
// var char  = "javascript"
// var firstOccurence = char.charAt(0);
// document.write("The first occurence of character is "+firstOccurence)

// 15. Write a js program to find last occurrence of a character in a given string.
// var char  = "javascript"
// var lastOccurence = char.charAt(char.length - 1);
// document.write("The last occurence of character is "+lastOccurence)

// START OF ARRAY HANDLING

// 1-Write a js program to read and print elements of array.
// var arr = [1,2,3,4,5,6,7,8,9,10]
// for (var i=0;i<=arr.length;i++)
// {
//     document.write(i)+document.write("&nbsp")
// }

// 2. Write a js program to print all negative elements in an array.
// var arr = [1,-2,-3,4,-5,6,-7,8,9,-10]
// for (var i=0; i<=arr.length; i++)
// {
//     if(arr[i]<=0)
//     {
//         document.write(arr[i])+document.write("&nbsp")
//     }
// }
// 3. Write a js program to find sum of all array elements.
// var arr = [1,2,3,4,5]
// var sum = 0;
// for (var i =0; i<arr.length; i++)
// {
//     sum = sum + arr[i]
// }
// document.write(sum)

// 4. Write a js program to find maximum and minimum element in an array.
// var arr = [2,1,4,3,5,8,1,7,4]
// var numToComp ;
// var maxNum ;
// maxNum = arr[0]
// for (var i = 1; i<arr.length; i++)
// {
//     numToComp = arr[i] 
//     if(maxNum>numToComp)
//     {
//         maxNum = maxNum
//     }
//     else
//     {
//         maxNum = numToComp
//     }
// }
// document.write(maxNum)


// 6. Write a js program to count total number of even and odd elements in an array.
// var arr = [1,4,6,2,5,9,7,8,12]
// var odd = 0
// var even = 0
// for (var  i =0 ; i<=arr.length; i++)
// {
//     if(arr[i] %2 == 0)
//     {
//         even = even + 1;
//     }
//     else
//     {
//         odd = odd + 1;
//     }
// }
// odd = odd -1;
// document.write("There are "+even+" even numbers and "+odd+" odd numbers.")

// 7. Write a js program to count total number of negative elements in an array.
// var arr = [-1,2,3,-6,-4,7,-3,-9]
// var counter = 0;
// for (var i = 0 ; i<=arr.length; i++)
// {
//     if (arr[i] < 0)
//     {
//         counter = counter + 1;
//     }
// }
// document.write("There are "+counter+" negative numbers.")

// 8. Write a js program to copy all elements from an array to another array.
// var arr1 = [1,2,3,4,5,6,7,8,9]
// var arr2 = []
// for(var i = 0 ; i< arr1.length ; i++)
// {   
//     arr2[i] = arr1[i]   
// }

// document.write(arr2)

// 9. Write a js program to insert an element in an array.
// var arr = []
// arr[0] = "cat"
// arr[1] = "dog"
// document.write(arr)

// 10. Write a js program to delete an element from an array at specified position.
// var cars = ["Honda","Toyota","Suzuki","KIA","Haundai"]
// document.write(cars)
// document.write("<br>")
// cars.splice(2,1)
// document.write("The cars array after delting an element "+cars)

//  END OF ARRAY HANDLING

// STAR OF MATH METHODS

// 2-Write a js program to ceil the number without using math.ceil method!
// var myNumber = 12.3;
// var convertedNumber = parseInt(myNumber)
// var ceiledNumber = convertedNumber + 1
// document.write("The original number is "+myNumber+" and the ceiled number is "+ceiledNumber)

// 3-Write a js program to floor the number without using the math.floor method!

// var myNumber = 12.7;
// var convertedNumber = parseInt(myNumber)
// var flooredNumber = convertedNumber - 1
// document.write("The original number is "+myNumber+" and the floor number is "+flooredNumber)

// END OF MATH METHODS

// START OF LOOPS

// 1. Write a js program to print all natural numbers from 1 to n. - using for loop
// var number = prompt("Please enter a number:")
// for (var i = 1; i<=number; i++)
// {
//     document.write(i)+document.write("&nbsp")
// }

// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using for loop
// var number = prompt("Please enter a number:")
// for (var i = number; i>=1; i--)
// {
//     document.write(i)+document.write("&nbsp")
// }

// 3. Write a js program to print all alphabets from a to z. - using for loop
// var arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
// for (var  i = 0; i<arr.length; i++)
// {
//     document.write(arr[i])+document.write("&nbsp")
// }

// 4. Write a js program to print all even numbers between 1 to 100. - using forloop
// for (var i = 0 ; i<=100 ; i++)
// {
//     if(i%2==0)
//     {
//         document.write(i)+document.write("&nbsp") 
//     }
// }

// 5. Write a js program to print all even numbers between 1 to 100. - using forloop
// for (var i = 0 ; i<=100 ; i++)
// {
//     if(i%2!=0)
//     {
//         document.write(i)+document.write("&nbsp") 
//     }
// }
