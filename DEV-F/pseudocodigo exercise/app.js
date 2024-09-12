function findLastPerson(workers) {
    let index = 0; 
    while (workers.length > 1) {
        workers.splice(index, 1);
        index = index % workers.length;
    }
    return workers[0];
}
const workers = ['Jorge', 'Jose', 'Domingo', 'Bernardo'];
const lastWorker = findLastPerson(workers);
console.log(`The last person you pick up is ${lastWorker}`);
