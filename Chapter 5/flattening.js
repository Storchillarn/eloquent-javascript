const arr = [[1,2,3],[4,5,6],[7,8,9,10]];

const flattened = arr.reduce((acc, curr) => {
    curr.forEach(val => acc.push(val));
    return acc;
}, []);

function loop(value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }
}

let value = 5;
function test(value) {
    return value >= 0;
}
function update(value) {
    return value - 1;
}
function body(value) {
    console.log(value, 'lol');
}

loop(value, test, update, body);