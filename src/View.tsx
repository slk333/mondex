import { Flex, Space } from "@mantine/core"
import pokemons from "./data/pokemons.json"

export default function View() {
    return (
        <div>
            <Space h={10}></Space>
            {pokemons.map(pokemon => (
                <Flex gap={10} align={"center"}>
                    <div>{pokemon.id}</div>

                    <img src={pokemon.spriteURL} width={96}></img>
                    <div>{pokemon.name}</div>
                    <div>
                        {/*   {pokemon.types.map(type => (
                            <span>{type}</span>
                        ))} */}
                    </div>
                </Flex>
            ))}
        </div>
    )
}
