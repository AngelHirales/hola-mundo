
'use strict';

import { pokeSearch } from './pokefetch.js';

async function callPokemon(data) {
    return await pokeSearch(data.toLowerCase());
}
  
const pokemon = await callPokemon('Pikachu');
  
console.log(pokemon);

const search = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'Search Pokemon';

const ul = document.createElement('ul');
ul.textContent = pokemon.name;

const main = document.getElementById('main');

const image = document.createElement('img');
image.src = pokemon.sprites.front_default;
image.alt = pokemon.name;

const type = document.getElementById('type');
type.textContent = 'Type: '+pokemon.types[0].type.name;
const health = document.getElementById('Experience');
health.textContent = 'Experience: '+pokemon.base_experience+'xp';
const weight = document.getElementById('weight');
weight.textContent = 'Weight: '+pokemon.weight+'kg';

main.append(search);
main.append(button);
main.append(ul);
main.append(image);
main.append(type);
main.append(health);
main.append(weight);

async function poke() {
    const res = await callPokemon(search.value);
    image.src = res.sprites.front_default;
    ul.textContent = res.name;
    type.textContent = 'Type: '+res.types[0].type.name;
    health.textContent = 'Experience: '+res.base_experience+'xp';
    weight.textContent = 'Weight: '+res.weight+'kg';
}
  
button.onclick = poke;