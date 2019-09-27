function groupAdultsByAgeRange(people) {
  return people.reduce((categorizedPeople, people) => {
    if (people.age >= 18 && people.age <= 20) {
      if (categorizedPeople['20 and younger'] === undefined) {
        categorizedPeople['20 and younger'] = [];
      }
      categorizedPeople['20 and younger'].push(people);
    } else if (people.age >= 21 && people.age <= 30) {
      if (categorizedPeople['21-30'] === undefined) {
        categorizedPeople['21-30'] = [];
      }
      categorizedPeople['21-30'].push(people);
    } else if (people.age >= 31 && people.age <= 40) {
      if (categorizedPeople['31-40'] === undefined) {
        categorizedPeople['31-40'] = [];
      }
      categorizedPeople['31-40'].push(people);
    } else if (people.age >= 41 && people.age <= 50) {
      if (categorizedPeople['41-50'] === undefined) {
        categorizedPeople['41-50'] = [];
      }
      categorizedPeople['41-50'].push(people);
    } else if (people.age >= 51) {
      if (categorizedPeople['51 and older'] === undefined) {
        categorizedPeople['51 and older'] = [];
      }
      categorizedPeople['51 and older'].push(people);
    }
    return categorizedPeople;
  }, {});
}

module.exports = { groupAdultsByAgeRange };
