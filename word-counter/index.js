
// START

// // Function to count words, characters, and sentences
// DEFINE function countTextStats(text)
//     // Initialize counters
//     SET wordCount to 0
//     SET charCount to 0
//     SET sentenceCount to 0

//     // Split text into words
//     SET words to SPLIT text by spaces

//     // Count words
//     SET wordCount to LENGTH of words

//     // Count characters
//     FOR each character in text
//         INCREMENT charCount by 1

//     // Count sentences
//     FOR each character in text
//         IF character is '.' OR character is '!' OR character is '?'
//             INCREMENT sentenceCount by 1

//     RETURN wordCount, charCount, sentenceCount

// // Main program
// DEFINE main()
//     // Get input text from user
//     DISPLAY "Enter text: "
//     SET userInput to GET user input

//     // Get text statistics
//     SET wordCount, charCount, sentenceCount to countTextStats(userInput)

//     // Display results
//     DISPLAY "Word Count: ", wordCount
//     DISPLAY "Character Count: ", charCount
//     DISPLAY "Sentence Count: ", sentenceCount

// CALL main()

// END
// wordCounter.js

// Function to count words, characters, and sentences
function countTextStats(text) {
	// Initialize counters
	let wordCount = 0;
	let charCount = 0;
	let sentenceCount = 0;

	// Split text into words
	let words = text.split(/\s+/);

	// Count words
	wordCount = words.length;

	// Count characters
	charCount = text.length;

	// Count sentences
	for (let i = 0; i < text.length; i++) {
			if (text[i] === '.' || text[i] === '!' || text[i] === '?') {
					sentenceCount++;
			}
	}

	return { wordCount, charCount, sentenceCount };
}

// Main program
function main() {
	const readline = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout
	});

	readline.question('Enter text: ', userInput => {
			const { wordCount, charCount, sentenceCount } = countTextStats(userInput);

			console.log(`Word Count: ${wordCount}`);
			console.log(`Character Count: ${charCount}`);
			console.log(`Sentence Count: ${sentenceCount}`);

			readline.close();
	});
}

// Call the main function to start the program
main();
