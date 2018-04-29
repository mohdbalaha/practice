
function myReplace(str, before, after) {
   var char=before[0];
   if(char===char.toUpperCase()){
       after = after.replace(/[a-z]/,after[0].toUpperCase());   
   }
  str = str.replace(before,after);
  console.log(str);
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
  myReplace("His name is Tom", "Tom", "john");// should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms");// should return "Let us get back to more Algorithms".