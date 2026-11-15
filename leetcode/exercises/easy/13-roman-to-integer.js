const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

number = 'MCMXCIV';

function romanToInt(nums) {
    let result = 0;
    let i = 0;
    
    for (num of nums) {
        if (romanNumerals[nums[i]] < romanNumerals[nums[i+1]]) {
            result -= romanNumerals[num];
        } else {
            result += romanNumerals[num];
        }
        i += 1;
    }

    return result;
};


console.log(romanToInt(number));