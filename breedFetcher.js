const request = require("request");
const myArg = process.argv.slice(2);
const input = myArg[0];




const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, function(error, response, body) {
    const data = JSON.parse(body);
    if (!data[0]) {
      callback(`${breedName} breed not found`);
    } else if (error) {
      callback(error);
    } else if (breedName === data[0].name) {
      callback(null, data[0].description);
    }
  });
};



module.exports = { fetchBreedDescription };