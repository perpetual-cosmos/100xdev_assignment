/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let s1=new Array.apply(0,Array(26));
  let s2=new Array.apply(0,Array(26));
  for(let i=0;i<str1.length;i++){
    s1[str1.charCodeAt(i)-97]++;
  }
  for(let i=0;i<str2.length;i++){
    s2[str2.charCodeAt(i)-97]++;
  }
  for(let i=0;i<26;i++){
    if(s1[i]!=s2[i])
      return false;
  }
  return true;
}

module.exports = isAnagram;
