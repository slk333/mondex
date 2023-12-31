import { Flex } from "@mantine/core"
import { pokemons } from "./data/pokemons.ts"
import { Pokemon } from "./Types/Pokemon.ts"
import { computeRecommendedTypesArray } from "./logic/computeRecommendedTypes.ts"
import { computeDefiningStat } from "./logic/computeDefiningStat.ts"

export default function View() {
    return <PokemonCollectionView></PokemonCollectionView>
}

function PokemonCollectionView() {
    return (
        <Flex ml={32} direction="column" gap={30}>
            {pokemons.map(pokemon => (
                <PokemonView key={pokemon.id} pokemon={pokemon} />
            ))}
        </Flex>
    )
}

function PokemonView(props: { pokemon: Pokemon }) {
    const pokemon = props.pokemon
    const recommendedTypesArrays = pokemon.types.map(type => computeRecommendedTypesArray(type))

    return (
        <Flex key={pokemon.id} gap={32} align={"center"}>
            <div style={{ fontFamily: "monospace" }}>{pokemon.id}</div>
            <Flex align={"center"} direction={"column"}>
                <img src={pokemon.spriteURL} width={96} height={96} />
                <div>{pokemon.name}</div>
            </Flex>

            <TypeStackView types={pokemon.types} />
            <StatsGraphView stats={pokemon.stats}></StatsGraphView>

            {recommendedTypesArrays.map((recommendedTypes, i) => (
                <TypeStackView key={i} types={recommendedTypes} />
            ))}
        </Flex>
    )
}

function StatsGraphView(props: { stats: Pokemon["stats"] }) {
    const stats = props.stats

    return (
        <Flex direction={"column"}>
            <div>{computeDefiningStat(stats)}</div>
            {stats.map((stat, i) => (
                <meter key={i} style={{ width: "300px" }} min={0} max={150} value={stat}></meter>
            ))}
        </Flex>
    )
}

function TypeStackView(props: { types: Pokemon["types"] }) {
    const types = props.types

    return (
        <Flex direction={"column"}>
            {types.map((type, i) => (
                <img key={i} width={48} height={16.4} src={`/type-image/${type}.png`} />
            ))}
        </Flex>
    )
}
