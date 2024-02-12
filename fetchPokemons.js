// Hämta alla pokemons genom en fetch mot API'et
// https://santosnr6.github.io/Data/pokemons.json
// Skapa ett formulär där användaren kan söka efter namnet på en pokemon.

// Leta reda på den pokemon som användaren sökt efter och gör ett nytt API-anrop på den pokemonens URL som bör finnas med från det första anropet.

// Presentera data om eftersökt pokemon för användaren i DOM:en.

fetch("https://santosnr6.github.io/Data/pokemons.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(pokemon => {
            console.log(pokemon);
            const pokemonName = document.createElement('p');
            pokemonName.textContent = pokemon.name;
            document.body.appendChild(pokemonName);
        });
    })
    .catch(error => {
        console.log("Error: ", error);
    });