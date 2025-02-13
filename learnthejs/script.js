document.addEventListener('DOMContentLoaded', () => {
	const topics = [
			"Introduction to JavaScript",
			"Variables and Data Types",
			"Operators and Expressions",
			"Conditional Statements",
			"Loops",
			"Functions",
			"Scope and Hoisting",
			"Arrays",
			"Objects",
			"DOM Manipulation",
			"Events and Event Handling",
			"Form Validation",
			"Error Handling",
			"Asynchronous JavaScript",
			"Promises and Async/Await",
			"Callback Functions",
			"JSON and APIs",
			"Local Storage",
			"Modules and Imports/Exports",
			"ES6+ Features",
			"Regular Expressions",
			"Debugging Techniques",
			"Testing in JavaScript",
			"Introduction to Node.js",
			"Introduction to Frameworks (React, Vue, Angular)",
			"Best Practices and Security",
			"Performance Optimization"
	];

	const topicList = document.getElementById('topic-list');
	const progressBar = document.getElementById('progress-bar');

	let completedTopics = JSON.parse(localStorage.getItem('completedTopics')) || [];

	function renderTopics() {
			topicList.innerHTML = '';
			topics.forEach((topic, index) => {
					const li = document.createElement('li');
					li.textContent = topic;
					if (completedTopics.includes(index)) {
							li.classList.add('completed');
					}
					li.addEventListener('click', () => toggleCompletion(index));
					topicList.appendChild(li);
			});
			updateProgressBar();
	}

	function toggleCompletion(index) {
			if (completedTopics.includes(index)) {
					completedTopics = completedTopics.filter(i => i !== index);
			} else {
					completedTopics.push(index);
			}
			localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
			renderTopics();
	}

	function updateProgressBar() {
			const progress = (completedTopics.length / topics.length) * 100;
			progressBar.style.width = `${progress}%`;
	}

	renderTopics();
});
