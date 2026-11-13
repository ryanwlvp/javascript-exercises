/* 
You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

const nums = [3, 3, 3];

const target = 7;


function twoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            console.log(`Números somados: ${array[i]} + ${array[j]}`);

            console.log(`Índice dos números na lista: :${i} e ${j}`);

            console.log('----------------');

            if (array[i] + array[j] === target && i !== j) {
                return [i, j];
            }
        }
    }

    return `Não existe um par que atinja o resultado ${target}`;

};

console.log(twoSum(nums, target));