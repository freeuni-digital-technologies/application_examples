

let primitiveEncryptButton = document.querySelector('#primitiveEncrypt .encrypt')

primitiveEncryptButton.onclick = function () {
	let userInput = getInput('#primitiveEncrypt .userInput')
	let encryptedText = offsetEncrypt(userInput)
	setResult('#primitiveEncrypt', encryptedText)
}

let primitiveDecryptButton = document.querySelector('#primitiveEncrypt .decrypt')

primitiveDecryptButton.onclick = function () {
	let userInput = getInput('#primitiveEncrypt .userInput')
	let decryptedText = offsetDecrypt(userInput)
	setResult('#primitiveEncrypt', decryptedText)
}

let passwordEncryptButton = document.querySelector('#passwordEncrypt .encrypt')
passwordEncryptButton.onclick = function () {
	let userInput = getInput('#passwordEncrypt .userInput')
	let password = getInput('#passwordEncrypt .password')
	let encryptedText = passwordEncrypt(userInput, password)
	setResult('#passwordEncrypt', encryptedText)
}

let passwordDecryptButton = document.querySelector('#passwordEncrypt .decrypt')
passwordDecryptButton.onclick = function () {
	let userInput = getInput('#passwordEncrypt .userInput')
	let password = getInput('#passwordEncrypt .password')
	let decryptedText = passwordDecrypt(userInput, password)
	setResult('#passwordEncrypt', decryptedText)
}

let hackPasswordButton = document.querySelector('#hackPassword .hack')
hackPasswordButton.onclick = function() {
	let results = '<h2>შესაძლო პაროლები და შედეგები</h2>'
	let userInput = getInput('#hackPassword .userInput')
	let possiblePasswords = hackPassword(userInput)
	for (let password of possiblePasswords) {
		let decryptedText = passwordDecrypt(userInput, password)
		results += `<div>${password} ${decryptedText}</div>`
	}
	setResult('#hackPassword', results)
}

function getInput(selector) {
	return document.querySelector(selector).value
}

function setResult(selector, text) {
	document.querySelector(selector + ' .result').innerHTML = text
}

