/*
const PI =Math.PI;

function area(radius) {
    return PI*radius8radius;
}
MediaSourceHandle.exports = {
    area: area
};

const myFunctions = require('./myFunctions');
console.log('Area:',myFunctions.area(5));


const func = require('./function');
console.log(func.greet()); */


import http from 'http';

const PORT = 9000;

const SERVER = http.createServer((req, res) => {
    res.write("Hello World, welcome to  world");
    res.end();
});

SERVER.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
