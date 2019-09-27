const superagent = require("superagent");

function getTatooineResidents() {
  const promise = superagent
    .get("https://swapi.co/api/planets/1/")
    .then(res => {
      return res.body.residents;
    })
    .catch(err => console.error(err));
  return promise;
}

module.exports = { getTatooineResidents };