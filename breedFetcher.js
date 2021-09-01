const request = require("request");
const myArg = process.argv.slice(2);
const input = myArg[0];


request('https://api.thecatapi.com/v1/breeds/search?q=sib', function(error, response, body) {
  const data = JSON.parse(body);
  let breed = data[0].name;
  let breedData = data[0].description;
  if (breed !== input) {
    console.log(`${input} breed not found`);
  } else if (error) {
    console.log(error);
  } else if (breed === input) {
    console.log(breedData);
  }
});

