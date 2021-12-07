let ballots = []

let BALLOTS_ID = 0
let VOTING_OPEN = true


function submitVote() {
	if (!VOTING_OPEN) {
		alert('ხმის მიცემა უკვე დასრულდა')
		return 
	}
	let choiceSelected = document.querySelector('input[name="choice"]:checked');
	if (choiceSelected) {
		BALLOTS_ID++
		let choice = choiceSelected.value
		ballots.push({
			id: BALLOTS_ID,
			choice: choice,
			void: false
		})
	}
	else {
		alert('არცერთისთვის არ მიგიციათ ხმა')
	} 
}
document.getElementById('vote-button').onclick = submitVote

function displayBallots() {
	for (let i=0; i < ballots.length; i++) {
		let result = ballots[i]
		let elem = getBallotDisplay(result)
		document.getElementById('ballots').insertAdjacentHTML('beforeend', elem)
	}
}

function makeBallotVoid(id) {
	for (let i=0; i < ballots.length; i++) {
		if (ballots[i].id == id) {
			ballots[i].void = true
			document.getElementById('ballot-' + id).className = 'void'
		}
	}	
}
function getBallotDisplay(ballot) {
	return `<div id="ballot-${ballot.id}"> 
		ballot: ${ballot.id} choice: ${ballot.choice}
		<button  onclick="makeBallotVoid(${ballot.id})">ბიულეტინის გაბათილება</button>
	</div>`
}
function closeVoting() {
	VOTING_OPEN = false
	displayBallots()
}
document.getElementById('close-voting').onclick = closeVoting