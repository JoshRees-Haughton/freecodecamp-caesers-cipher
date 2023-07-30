function rot13(str) {

    //String containing the alphabet, to use the index:
    let alphStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    //Empty string to store the final output
    var newStr = ''
  
    //Loop through string:
    for (let i = 0; i < str.length; i++) {
      //Get the index of each characters position in the alphabet string:
      let charIndex = alphStr.indexOf(str[i]);
      //If the character isn't an uppercase letter, indexOf above will return -1, so use an if statement to seperate the two cases:
      if (charIndex != -1) {
        //Shift the index of the letter by 13:
        let charIndexShift = charIndex + 13;
        //Calculate it mod 26:
        let charShiftMod = charIndexShift % 26;
        //Add the resulting letter at that index to the output string:
        newStr += alphStr[charShiftMod];
      } else {
        //If not a letter, just add the original character:
        newStr += str[i];;
      }
    } 
    return newStr;
  }
  
  rot13("SERR PBQR PNZC");