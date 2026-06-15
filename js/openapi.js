// Selecting Page Elements and Creating API Endpoint Locations
const pokeAPI = "https://pokeapi.co/api/v2/";
const pokemonURL = "pokemon/";
const speciesURL = "pokemon-species/";

const poke1 = document.querySelector(".poke1");
const poke2 = document.querySelector(".poke2");
const poke3 = document.querySelector(".poke3");

const poke1info = document.querySelector(".poke1info");
const poke2info = document.querySelector(".poke2info");
const poke3info = document.querySelector(".poke3info");

const poke1Button = poke1.querySelector("button");
const poke2Button = poke2.querySelector("button");
const poke3Button = poke3.querySelector("button");


// Get Pokemon Info Function from PokeAPI
async function getPokeInfo (pokemonName, appendLocation) {

    // Create Opening Text
    const intro = document.createElement("p");
    intro.textContent = "Here's some information about this pokemon:"
    appendLocation.appendChild(intro);

    // Start List to store elements
    const infoList = document.createElement("ul");

    // Fetch Main Poke info
    fetch(pokeAPI + pokemonURL + pokemonName)
    .then((response => response.json()))
    .then((data)=> {

        let pokemonData = data;  

        // Pokemon Name
        const infoPiece = document.createElement("li");
        infoPiece.textContent = `Name: ${pokemonData.name}`;
        infoList.appendChild(infoPiece);

        // If only 1 type
        if (data.types.length == 1) {

            // Singular type 
            const pokeType = document.createElement("li");
            pokeType.textContent = ("Type: " + pokemonData.types[0].type.name);
            infoList.appendChild(pokeType);
        }

        // Multiple Types
        else if (pokemonData.types.length == 2) {

            // Iterate with Index Storing
            let i = 0; 
            for (let types of pokemonData.types) {

                // Create List Element for each type with number
                const pokeType = document.createElement("li");
                pokeType.textContent = (`Type ${i+1}: ${types.type.name}`);
                infoList.appendChild(pokeType);
                i++;
            }
        }

        // Pokemon Height
        const pokeHeight = document.createElement("li");
        pokeHeight.textContent = `Height: ${Number(pokemonData.height) / 10} meters`;
        infoList.appendChild(pokeHeight);

        // Pokemon Weight
        const pokeWeight = document.createElement("li");
        pokeWeight.textContent = `Weight: ${Number(pokemonData.weight) / 10} kg`;
        infoList.appendChild(pokeWeight);
            
        // Different Fetch for Generation 
        fetch(pokeAPI + speciesURL + pokemonName)
        .then((response => response.json()))
        .then((data)=> { 
            
            let speciesData = data; 

            // Pokemon Generation
            const pokeGen = document.createElement("li");
            pokeGen.textContent = ("Generation: " + speciesData.generation.name);
            infoList.appendChild(pokeGen);

            // Different Fetch for Region
            fetch (speciesData.generation.url)
            .then((response => response.json()))
            .then((data)=> { 

                // Pokemon Region
                const pokeRegion = document.createElement("li");
                pokeRegion.textContent = ("Main Region: " + data.main_region.name);
                infoList.appendChild(pokeRegion);
            })
            .catch((error) => console.log("Could not fetch Pokemon info through PokeAPI: ", error));

        })
        .catch((error) => console.log("Could not fetch Pokemon info through PokeAPI: ", error));
    })
    .catch((error) => console.log("Could not fetch Pokemon info through PokeAPI: ", error));


    // Append information to Append Location specified
    appendLocation.appendChild(infoList);
}

poke1Button.addEventListener("click", function() {

    if (poke1info.querySelector("ul")) {

        return;
    }

    this.remove();
    const poke1text = document.createElement("p");
    poke1text.textContent = "Starting off, we have my primary favorite pokemon: Oshawott!"
    poke1.appendChild(poke1text);

    const poke1image = document.createElement("img");
    poke1image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26OtkiucsVqVghmrngmsT23GkF9WJ2GnjNg&s";
    poke1image.alt = "Image of the pokemon Oshawott";
    poke1.appendChild(poke1image);

    getPokeInfo("Oshawott", poke1info);
}) 

poke2Button.addEventListener("click", function() {

    if (poke2info.querySelector("ul")) {

        return;
    }

    this.remove();
    const poke2text = document.createElement("p");
    poke2text.textContent = "Next up, we have my second favorite pokemon: Cyndaquil!"
    poke2.appendChild(poke2text);

    const poke2image = document.createElement("img");
    poke2image.src = "https://img.pokemondb.net/artwork/large/cyndaquil.jpg";
    poke2image.alt = "Image of the pokemon Cyndaquil";
    poke2.appendChild(poke2image);

    getPokeInfo("Cyndaquil", poke2info);
}) 

poke3Button.addEventListener("click", function() {

    if (poke3info.querySelector("ul")) {

        return;
    }

    this.remove();
    const poke3text = document.createElement("p");
    poke3text.textContent = "Finally, we have my third favorite pokemon: Toucannon!"
    poke3.appendChild(poke3text);

    const poke3image = document.createElement("img");
    poke3image.src = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/733.png";
    poke3image.alt = "Image of the pokemon Toucannon";
    poke3.appendChild(poke3image);

    getPokeInfo("Toucannon", poke3info);
}) 