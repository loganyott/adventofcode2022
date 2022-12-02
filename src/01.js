// https://adventofcode.com/2022/day/1
const { sortByCalories } = await import("./elves.mjs");

const calories = sortByCalories();

// Part One
const highestCalories = calories.slice(-1).pop();
console.log(highestCalories, 'Highest Calorie Total');

// Part Two
const topThree = calories.slice(-3);
const total = topThree.reduce((total, cur) => total + cur, 0);
console.log(total, 'Total of Top 3 Highest Calorie Totals');