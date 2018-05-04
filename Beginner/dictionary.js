let dictionary = {
  wordBank: {
    recursion: 'f inside an f',
    closure: 'inner f',
    abstract: 'summerize',
    callback: 'f as input',
    HOF: 'f get f as input or return f',
  },

  search: function (term) {
    if (this.wordBank.hasOwnProperty(term)) {
      return this.wordBank[term];
    } else {
      return "does not exist!"
    }
  },

  addTerm: function (name, value) {
    this.wordBank[name] = value;
  },

  delTerm: function (term) {
    delete this.wordBank[term];
  }
};


dictionary.addTerm('class', 'Obj Parent');
console.log(dictionary.search('HOF'));
console.log(dictionary.search('Nour'));
console.log(dictionary.search('abstract'));
console.log(dictionary.search('class'));
dictionary.delTerm('class');
console.log(dictionary.search('class'));