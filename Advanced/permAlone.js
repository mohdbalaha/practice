// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
// Assume that all characters in the provided string are each unique.
// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
//  but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

function permAlone(str) {
    //remove words with repeated letters
    var regex = /(\w)\1+/;
    //an array of permutations with no repeat
    var permutations = [];
    //an array of all the permutations
    var all = [];
    return permute(str.split(''), []);

    function permute(s, chosen) {
        if (s.length === 0) {
            if (!regex.test(chosen.join(''))) {
                permutations.push(chosen.join(''));
            }
            all.push(chosen.join(''));
            return chosen;
        } else {
            for (var i = 0; i < s.length; i++) {
                // choose
                var c = s[i];
                chosen.push(c);
                s.splice(i, 1);
                // explore
                permute(s, chosen);
                //un-choose
                chosen.pop();
                s.splice(i, 0, c);
            }
        }
        return permutations.length;
    }
}

// console.log(permAlone("aba"));// should return 2.
// console.log(permAlone("aaa"));// should return 0.
// console.log(permAlone("aabb"));// should return 8.
console.log(permAlone("abcdefa"));// should return 3600.
// console.log(permAlone("abfdefa"));// should return 2640.
// console.log(permAlone("zzzzzzzz"));// should return 0.
// console.log(permAlone("a"));// should return 1.
// console.log(permAlone("aaab"));//should return 0.
// console.log(permAlone("aaabb"));// should return 12.