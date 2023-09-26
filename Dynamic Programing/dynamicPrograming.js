/* Recursive approach */

function fibonacciSequenceRecursive(number, memo = []) {
	if (memo[number] !== undefined) return memo[number];

	if (number <= 2) return 1;

	const result =
		fibonacciSequence(number - 1, memo) + fibonacciSequence(number - 2, memo);

	memo[number] = result;

	return result;
}

const fibonacciSequenceTabulated = (number) => {
	if (number <= 2) return 1;

	const fibonacciSequence = [0, 1, 1];

	for (let index = 3; index <= number; index++) {
		fibonacciSequence[index] =
			fibonacciSequence[index - 1] + fibonacciSequence[index - 2];
	}

	return fibonacciSequence[number];
};
