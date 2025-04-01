const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Welcome to ALX, what is your name?\n", (userName) => {
	console.log("Your name is: " + userName);

	console.log("This important software is now closing\n");

	rl.close();
});
