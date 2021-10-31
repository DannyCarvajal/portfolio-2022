const usePuzzleGenerator = () => {
	const solution = [
		["html", 1],
		["css", 2],
		["javascript", 3],
		["sass", 4],
		["git", 5],
		["figma", 6],
		["react", 7],
		["daniel", 8],
		["blank", null],
	];

	const puzzleGenerator = () => {
		let puzzleItems;
		do {
			puzzleItems = [];
			while (puzzleItems.length < solution.length - 1) {
				const random = Math.floor(Math.random() * solution.length);
				if (!puzzleItems.includes(solution[random][0]) && solution[random][0] !== "blank") {
					puzzleItems.push(solution[random][0]);
				}
			}
			puzzleItems.push("blank");
		} while (!isSlidePuzzleSolvable(puzzleItems));

		return puzzleItems;
	};

	// CHECK IF SLIDE PUZZLE IS SOLVABLE
	function isSlidePuzzleSolvable(arrayOfItems) {
		const arrayOfPositions = arrayOfItems.map(item => {
			return solution.filter(s => s[0] === item)[0][1];
		});

		let inversionCount = arrayOfPositions.reduce((acc, curr, index) => {
			for (let i = index; i < arrayOfPositions.length; i++) {
				if (arrayOfPositions[i] !== null && arrayOfPositions[i] < curr) {
					acc++;
				}
			}
			return acc;
		}, 0);
		return inversionCount % 2 === 0;
	}

	return {puzzleGenerator};
};

export default usePuzzleGenerator;
