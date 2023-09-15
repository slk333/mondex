import fs from 'fs'

const pokemons = []

for (let i = 1; i < 152; i++) {

    const endpoint = `https://pokeapi.co/api/v2/pokemon/${i}`
    const result = await fetch(endpoint)
    const data = await result.json()

    const name = data.name
    const id = data.id
    const spriteURL = data.sprites.versions["generation-i"].yellow.front_transparent
    const types = data.types.map(type => type.type.name)
    const stats = data.stats.map(stat => stat.base_stat)

    const pokemon = { name, id, spriteURL, types, stats }
    pokemons.push(pokemon)
    console.log(id)

}


const jsonString = JSON.stringify(pokemons, null, 4);  // 4 spaces for indentation

// Write the JSON string to a file
fs.writeFile('output.json', jsonString, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File has been saved!');
    }
});
