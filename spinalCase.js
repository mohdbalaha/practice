function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  
  str=str.replace(/_/g,'');
  str=str.replace(/\s[a-z]/g,function(match){
    return '-' + match;
  });
  str=str.replace(/\s?[A-Z]/g,function(match){
    return '-' + match.toLowerCase();
  });
  str=str.replace(/^-/g,'');
  str=str.replace(/\s/g,'');
  console.log(str);
  return str;
}

spinalCase("This Is Spinal Tap");// should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap");// should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show");// should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh");// should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things");// should return "all-the-small-things".