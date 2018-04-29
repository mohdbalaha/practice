//AT  TA  CG  GC

function pairElement(str) {
  str = str.split('');
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'A':
        str[i] = ['A', 'T'];
        break;

      case 'T':
      str[i] = ['T', 'A'];
        break;

      case 'C':
      str[i] = ['C', 'G'];
        break;

      case 'G':
      str[i] = ['G', 'C'];
        break;
    }
  }
  return str;
}

pairElement("GCG");
pairElement("ATCGA");// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG");//should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA");// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].