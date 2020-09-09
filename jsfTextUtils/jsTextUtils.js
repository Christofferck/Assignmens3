/* opgave 2.1
var s = prompt('');
function first(s) {
	return s[0];
}
document.write(first(s))
*/


/* Opgave 2.2
var s = prompt('');
function last(s) {
	return s[s.length-1];
}
document.write(last(s))
*/

/* Opgave 2.3
var s = prompt('');
function middle(s) {
	return s.slice(1,-1);
}
document.write(middle(s))

*/

/* Opgave 2 */
var input = prompt('Write a word');

var isPalindrome = str => {
    var strLen = str.length;

    if (strLen < 2) return true;

    if (str[0] === str[strLen - 1]) {
        return isPalindrome( str.slice(1, strLen - 1) );
    }

    return false;
};

document.write(isPalindrome(input));