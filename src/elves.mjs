import fs from 'node:fs';

/**
 * Get elves sorted by their total calories
 * @return number[]
 */
export const sortByCalories = () => {
    const buffer = fs.readFileSync(new URL('input.txt', import.meta.url));
    const data = buffer.toString();
    const elves = data.split('\n\n'); // ['2020\n2021\n2022', ...]
    const caloriesPerElf = elves.map(block => block.split('\n') // ['2020', '2021', '2022']
        .reduce((total, cur) => total + +cur, 0)); // 6063
    return caloriesPerElf.sort((a, b) => a - b);
}
