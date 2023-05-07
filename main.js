// function string_to_array (str1){
//     return str1.split(" ")
// }
// console.log(string_to_array('Robin Singh'));


// function truncate_string(str1,str2)
// {
//     return str1.substring(0,4)

// }
// console.log(truncate_string("Robin Singh",4))


// protect_email=function(str)
// {
//     var splitted,time1,time,time2;
//     splitted=str.split("@");
//     time1=splitted[0];
//     time=time1.length/2;
//     time1=time1.substring(0,(time1.length-time));
//     time2=splitted[1];
//     return time1 +"...@"+time2;
// };
// console.log(protect_email("robin_singh@example.com"));

function repeat_string(string, count) 
  {
    if ((string == null) || (count == null))
      {
        return('Error in string or count.');
      }
       
    return new Array(count + 1).join(string);
  }

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));

function search_word(text, word){
    
    let a = 0, b=0;
   
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    b++;
                  }
                if (b==word.length){
                    a++;
                }
            }
            b=0;
        }
    }
   return "'"+word+"' was found "+a+" times.";
}

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));