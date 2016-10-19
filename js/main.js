var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");

// Use the forEach method to add the name of each planet to a div element in your HTML with an id of "planets".
planets.forEach(function(current, index, array){
  el.innerHTML += "<div>" + current + "</div>";
});

el.innerHTML += "<br>";

// Use the map method to create a new array where the first letter of each planet is capitalized
var Planets = planets.map(function(current, index, array){
  return current.charAt(0).toUpperCase() + current.slice(1);
});

Planets.forEach(function(current, index, array){
  el.innerHTML += "<div>" + current + "</div>";
});

el.innerHTML += "<br>";

// Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanets = planets.filter(function(current, index, array){
  return current.includes("e");
}).map(function(current, index, array){
  return current.charAt(0).toUpperCase() + current.slice(1);
});

ePlanets.forEach(function(current, index, array){
  el.innerHTML += "<div>" + current + "</div>";
});

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(previous, current, index, array){
  return previous + " " + current;
});

el.innerHTML += sentence;
