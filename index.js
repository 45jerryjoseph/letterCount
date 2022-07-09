function char_count(str, letter) 
{
 let Count_letter = 0;
 let i = 0;
 for (; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      Count_letter += 1;
      }
  }
  return Count_letter;
}

console.log(char_count('people', 'p'));




