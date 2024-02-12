
// https://santosnr6.github.io/Data/pokemons.json
// Rendera ut objekten en och en ut i konsollen

// Rendera ut objektens namn i DOM'en istället så de blir synliga för en användare
// Hämta alla pokemons genom en fetch mot API'et
fetch('https://santosnr6.github.io/Data/pokemons.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(pokemon => {
            console.log(pokemon);
            const pokemonName = document.createElement('p');
            pokemonName.textContent = pokemon.name;
            document.body.appendChild(pokemonName);
        });
    })