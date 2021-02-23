//jshint esversion:6

const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperheroName = superheroes.random();
//=> 'Spider-Ham'
var myVillainName = supervillains.random();
//=> 'Mud Pack'

console.log(mySuperheroName);
console.log(myVillainName);
