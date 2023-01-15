function offsetEncrypt(text) {
	let encryptedText = ''
	for (let i =0; i< text.length; i++) {
		let characterToNumber = text.charCodeAt(i) 
		let encryptedNumber = characterToNumber + 3
		let encryptedCharacter = String.fromCharCode(encryptedNumber)
		encryptedText += encryptedCharacter
		console.log(i, text[i], characterToNumber, encryptedNumber, encryptedCharacter, encryptedText)
	}
	return encryptedText
}
// სცადე კონსოლში
// offsetEncrypt("hello")


function offsetDecrypt(text, offset=3) {
	let decryptedText = ''
	for (let i =0; i< text.length; i++) {
		let characterToNumber = text.charCodeAt(i)
		let decryptedNumber = characterToNumber - offset
		let decryptedCharacter = String.fromCharCode(decryptedNumber)
		decryptedText += decryptedCharacter
	}
	return decryptedText
}
// სცადე კონსოლში
// offsetDecrypt("khoor")
// offsetDecrypt(offsetEncrypt("hello"))



// შემდეგი ორი ფუნქციის კონენტს ყურადღება არ მიაქციო, 
// CryptoJS ბიბლიოთეკას ვიყენებ. სინტაქსი მნიშვნელოვანი არაა,
// მათი ცოდნის გარეშე შეგიძლია გამოიყენო ფუნქცია
function passwordEncrypt(text, password) {
	return CryptoJS.AES.encrypt(text, password).toString()
}
// სცადე კონსოლში
// passwordEncrypt("top secret message", "mypassword")


function passwordDecrypt(encryptedText, password) {
	let decryptedObject = CryptoJS.AES.decrypt(encryptedText, password)
	try {
		return decryptedObject.toString(CryptoJS.enc.Utf8)
	} catch (e) {
		return ""
	}
}
// სცადე კონსოლში
// let encrypted = passwordEncrypt("top secret message", "mypassword")
// passwordDecrypt(encrypt, "wrongpassword")
// passwordDecrypt(encrypt, "mypassword")


// 4 ციფრიანი პაროლი
function hackPassword(encryptedText) {
	let possiblePasswords = []
	for (let i = 1000; i < 10000; i++) {
		let decrypted = passwordDecrypt(encryptedText, i.toString())
		if (decrypted !== "") {
			console.log(i, decrypted)
			possiblePasswords.push(i.toString())
		}
	}
	return possiblePasswords
}

// სცადე კონსოლში
// hackPassword(encrypted)