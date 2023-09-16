import { Flex, Space } from "@mantine/core"
import { pokemons } from "./data/pokemons.ts"

export default function View() {
    return (
        <div>
            <Flex direction="column" gap={30}>
                {pokemons.map(pokemon => (
                    <Flex key={pokemon.id} gap={10} align={"center"}>
                        <div>{pokemon.id}</div>
                        <img src={pokemon.spriteURL} width={96}></img>
                        <Flex direction={"column"}>
                            <meter style={{ width: "300px" }} min={0} max={200} value={pokemon.stats[0]}></meter>
                            <meter style={{ width: "300px" }} min={0} max={200} value={pokemon.stats[1]}></meter>
                            <meter style={{ width: "300px" }} min={0} max={200} value={pokemon.stats[2]}></meter>
                            <meter style={{ width: "300px" }} min={0} max={200} value={pokemon.stats[3]}></meter>
                            <meter style={{ width: "300px" }} min={0} max={200} value={pokemon.stats[4]}></meter>
                            <meter
                                style={{ width: "300px", backgroundColor: "#777" }}
                                min={0}
                                max={1000}
                                value={pokemon.stats.reduce((a, b) => a + b)}
                            ></meter>
                            {/*   {pokemon.types.map(type => (
                            <span>{type}</span>
                        ))} */}
                        </Flex>
                        <div>{pokemon.name}</div>
                    </Flex>
                ))}
            </Flex>
        </div>
    )
}
