const puzzleGenerator = () => {
	const solution = ["html", "css", "javascript", "sass", "git", "figma", "react", "daniel", "blank"];

	const newPuzzleCombination = () => {
		let shuffledArray;
		do {
			shuffledArray = [];
			while (shuffledArray.length < solution.length - 1) {
				const random = Math.floor(Math.random() * solution.length);
				if (!shuffledArray.includes(solution[random]) && solution[random] !== "blank") {
					shuffledArray.push(solution[random]);
				}
			}
			shuffledArray.push("blank");
		} while (!isSlidePuzzleSolvable(shuffledArray));

		return shuffledArray;
	};

	function isSlidePuzzleSolvable(shuffledArray) {
		const arrayOfPositions = shuffledArray.map(item => solution.indexOf(item));
		let inversionCount = arrayOfPositions.reduce((acc, curr, index) => {
			for (let i = index; i < arrayOfPositions.length; i++) {
				// BLANK ELEMENT SHOULD NOT BE COUNTED
				if (curr !== "8" && arrayOfPositions[i] < curr) {
					acc++;
				}
			}
			return acc;
		}, 0);
		// EVEN NUMBER OF INVERSIONS MEANS THE PUZZLE IS NOT SOLVABLE
		return inversionCount % 2 === 0;
	}

	return {newPuzzleCombination, solution};
};

export default puzzleGenerator;
