// https://adventofcode.com/2022/day/1
import fs from 'node:fs';

/**
 * Get elves sorted by their total calories
 * @return number[]
 */
const sortByCalories = () => {
    const buffer = fs.readFileSync(new URL('../priv/input.txt', import.meta.url));
    const data = buffer.toString();
    const elves = data.split('\n\n'); // ['2020\n2021\n2022', ...]
    const caloriesPerElf = elves.map(block => block.split('\n') // ['2020', '2021', '2022']
        .reduce((total, cur) => total + +cur, 0)); // 6063
    return caloriesPerElf.sort((a, b) => a - b);
}


// Part One
export const partOne = () => sortByCalories()
    .slice(-1) // Get last (highest) count
    .pop(); // Get value from array created by slice

// Part Two
export const partTwo = () => sortByCalories()
    .slice(-3) // Get last (highest) 3 counts
    .reduce((total, cur) => total + cur, 0); // Sum them together
