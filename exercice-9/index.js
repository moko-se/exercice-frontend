/* checkPalindrome */
const str ='À Cuba, Anna a bu ça';

const checkPalindrome = (str) => {
	let text = str.replace(/[.,'!?\- \"]/g,"");
	let textNormalize = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

	let nw_str = textNormalize.split("").reverse().join("");

	if (textNormalize.toLowerCase() != nw_str.toLowerCase()){
		return false;
	}

	return true
}
console.log(checkPalindrome(str));
