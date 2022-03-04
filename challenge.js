const Facts = {
  Name: prompt("enter a city"),
  population: prompt("enter the Population of city"),
  continent: prompt("enter the continent name"),
};

function cityFacts(obj) {
  console.log(
    obj.Name +
      " has a " +
      "population " +
      "of " +
      obj.population +
      " and is situated in " +
      obj.continent
  );
}
cityFacts(Facts);
