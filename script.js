// mean function
const getMean = (array) => array.reduce((acc, el) => acc + el , 0) / array.length;

// median function
const getMedian = (array) => {
    const sorted = array.slice().sort((a, b) => a - b);
    const median = array.length % 2 === 0 
        ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
        : sorted[Math.floor(array.length / 2)];
    
    return median;
};

// mode function
const getMode = (array) => {
    const counts = {};
    array.forEach(el => {
        counts[el] = (counts[el] || 0) + 1;
    });

    if(new Set(Object.values(counts)).size === 1) {
        return null;
    }

    const highest = Object.keys(counts).sort((a, b) => {
        return counts[b] - counts[a];
    })[0];

    const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);
    return mode.join(', ');
};

// range function
const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
};

// variance function
const getVariance = (array) => {
    const mean = getMean(array);
    const variance = array.reduce(((acc, el) => {
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared;
    }), 0) / array.length;
    return variance;
};

// standard deviation function
const getStandardDeviation = (array) => {
    const variance = getVariance(array);
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
};

// calculate function
const calculate = () => {
    const value = document.querySelector('#numbers').value;
    const array = value.split(/,\s*/g);
    const numbers = array
        .map(el => Number(el))
        .filter(el => !isNaN(el));

    const mean = getMean(numbers);
    document.querySelector('#mean').textContent = mean;

    const median = getMedian(numbers);
    document.querySelector('#median').textContent = median;

    const mode = getMode(numbers);
    document.querySelector('#mode').textContent = mode;

    const range = getRange(numbers);
    document.querySelector('#range').textContent = range;

    const variance = getVariance(numbers);
    document.querySelector("#variance").textContent = variance;

    const standardDeviation = getStandardDeviation(numbers);
    document.querySelector("#standardDeviation").textContent = standardDeviation;
};