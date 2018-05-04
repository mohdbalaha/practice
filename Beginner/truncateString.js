function truncateString(str, num) {
  // Clear out that junk in your trunk
  var string = '';

  if (num <= 3) {
    string = str.slice(0, num);
  } else {
    string = str.slice(0, num - 3);
  }
  return string + '...';
}


console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));