const phone = /^(07|06|01)([0-9]){8}$/;
const checkPhoneNumber = (number) => {
	
	if (!number.match(phone)){
		return false;
	}
	return true;
}
console.log(checkPhoneNumber('0600000009'));