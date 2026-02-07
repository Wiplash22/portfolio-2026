
const require = createRequire(import.meta.url);
const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('C:/Users/Computer/Documents/CV/Antony Jimson Poruthukkaran cv.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(function (error) {
    console.error("Error parsing PDF:", error);
});
