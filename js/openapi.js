const pokeAPI = "https://pokeapi.co/api/v2/";
const pokemonURL = "pokemon/";
const speciesURL = "pokemon-species/";

const poke1info = document.querySelector(".poke1info");
const poke2info = document.querySelector(".poke2info");
const poke3info = document.querySelector(".poke3info");

async function getPokeInfo (pokemonName, appendLocation) {

    const intro = document.createElement("p");
    intro.textContent = "Here's some information about this pokemon:"
    appendLocation.appendChild(intro);
    const infoList = document.createElement("ul");

    fetch(pokeAPI + pokemonURL + pokemonName)
    .then((response => response.json()))
    .then((data)=> {

        let pokemonData = data;  

        const infoPiece = document.createElement("li");
        infoPiece.innerHTML = `Name: ${pokemonData.name}`;
        infoList.appendChild(infoPiece);

        if (data.types.length == 1) {

            const pokeType = document.createElement("li");
            pokeType.innerHTML = ("Type: " + pokemonData.types[0].type.name);
            infoList.appendChild(pokeType);
        }

        else if (pokemonData.types.length == 2) {
            
            for (types in pokemonData.types) {
            const pokeType = document.createElement("li");

            pokeType.innerHTML = (`Type ${Number(types) + 1}: ${pokemonData.types[types].type.name}`);
            infoList.appendChild(pokeType);
            }
        }

        const pokeHeight = document.createElement("li");
        pokeHeight.innerHTML = `Height: ${Number(pokemonData.height) / 10} meters`;
        infoList.appendChild(pokeHeight);

        const pokeWeight = document.createElement("li");
        pokeWeight.innerHTML = `Weight: ${Number(pokemonData.weight) / 10} kg`;
        infoList.appendChild(pokeWeight);
            
        
    })

    fetch(pokeAPI + speciesURL + pokemonName)
    .then((response => response.json()))
    .then((data)=> { 
        let speciesData = data; 

        const pokeGen = document.createElement("li");
        pokeGen.innerHTML = ("Generation: " + speciesData.generation.name);
        infoList.appendChild(pokeGen);



        fetch (speciesData.generation.url)
        .then((response => response.json()))
        .then((data)=> { 

            const pokeRegion = document.createElement("li");
            pokeRegion.innerHTML = ("Main Region: " + data.main_region.name);
            infoList.appendChild(pokeRegion);
        })


    })

    appendLocation.appendChild(infoList);
}

getPokeInfo("Oshawott", poke1info);
getPokeInfo("Cyndaquil", poke2info);
getPokeInfo("Toucannon", poke3info);