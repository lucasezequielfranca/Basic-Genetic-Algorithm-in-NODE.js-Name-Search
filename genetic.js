const target = 'lucasfranca';
const generations = 100;
const mutationRate = 0.2;
const populationSize = 10;
const elitPopulationPerc = 0.2;

// Initialization
const initPopulation = () => {
    let population = [];
    for (let i = 0; i < populationSize; i++) {
        let individual = [];
        for (let j = 0; j < target.length; j++) {
            let randomIndex = Math.floor(Math.random() * 'abcdefghijklmnopqrstuvwxyz'.length);
            let gene = 'abcdefghijklmnopqrstuvwxyz'.charAt(randomIndex);
            individual.push(gene);
        }
        population.push(individual);
    }
    return population;
}
// evaluation fitness check
const fitnessCheck = (individual = []) => {
    let score = 0;
    for (let i = 0; i < target.length; i++) {
        if (individual[i] == target[i]) {
            score++;
        }
    }
    return score;
}

const selection = (population = [[]]) => {
    let scoreArrayForSorting = [];
    population.forEach((individual, index) => {
        scoreArrayForSorting[index] = fitnessCheck(individual);
    })
    // console.log(scoreArrayForSorting);
    let combinedArray = population.map((value, index) => { return { individual: value, score: scoreArrayForSorting[index] } });
    combinedArray.sort((a, b) => b.score - a.score);
    let sortedPopulation = combinedArray.map(value => value.individual);

    // now we are going to get only the top 20% of the sorted population based on the score of the fitcheck

    const vintePercentLen = Math.ceil(sortedPopulation.length * elitPopulationPerc);
    const selectedPopulation = sortedPopulation.slice(0, vintePercentLen);

    return selectedPopulation;

}

// Now going to Crossover Section



let population = initPopulation();
// console.log(population.map(value => value.join('')));
console.log(selection(population));

