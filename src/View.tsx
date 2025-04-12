import { Flex, Progress } from "@mantine/core"
import { pokemons } from "./data/pokemons.ts"
import { Pokemon } from "./Types/Pokemon.ts"
import { computeRecommendedTypesArray } from "./logic/computeRecommendedTypes.ts"
import { computeDefiningStat } from "./logic/computeDefiningStat.ts"

export default function View() {
    return <PokemonCollectionView />
}

function PokemonCollectionView() {
    return (
        <Flex ml={32} direction="column" gap={30}>
            {pokemons.map((pokemon) => (
                <PokemonView key={pokemon.id} pokemon={pokemon} />
            ))}
        </Flex>
    )
}

function PokemonView(props: { pokemon: Pokemon }) {
    const pokemon = props.pokemon
    const recommendedTypesArrays = pokemon.types.map((type) => computeRecommendedTypesArray(type))

    return (
        <Flex key={pokemon.id} gap={32} align="center">
            <div style={{ fontFamily: "monospace" }}>{pokemon.id}</div>
            <Flex align="center" direction="column">
                <img alt="sprite" src={pokemon.spriteURL} width={96} height={96} />
                <div>{pokemon.name}</div>
            </Flex>

            <TypeStackView types={pokemon.types} />
            <StatsGraphView stats={pokemon.stats} />

            {recommendedTypesArrays.map((recommendedTypes, i) => (
                <TypeStackView key={i} types={recommendedTypes} />
            ))}
        </Flex>
    )
}

function StatsGraphView(props: { stats: Pokemon["stats"] }) {
    const stats = props.stats

    const statColors = [
        "#5D9B78", // HP (Pastel Forest Green)
        "#C25B52", // Attack (Pastel Crimson)
        "#7D8C9A", // Defense (Pastel Slate Gray)
        "#9A7AA0", // Special (Pastel Purple)
        "#B89D4D", // Speed (Pastel Gold)
    ]
    const mean = Math.round(stats.reduce((sum, val) => sum + val, 0) / stats.length)

    return (
        <Flex direction="column">
            <div>{computeDefiningStat(stats)}</div>
            <Progress.Root ff="monospace" mb={4} size="xl" w={300}>
                <Progress.Section color="#111" value={(mean * 100) / 150}>
                    <Progress.Label>{mean}</Progress.Label>
                </Progress.Section>
            </Progress.Root>

            {stats.map((stat, i) => (
                <Progress.Root ff="monospace" mb={4} size="xl" w={300} key={i}>
                    <Progress.Section color={statColors[i]} value={(stat * 100) / 150}>
                        <Progress.Label>{stat}</Progress.Label>
                    </Progress.Section>
                </Progress.Root>
                // <meter key={i} style={{ width: "300px" }} min={0} max={150} value={stat} />
            ))}
        </Flex>
    )
}

function TypeStackView(props: { types: Pokemon["types"] }) {
    const types = props.types

    return (
        <Flex direction="column">
            {types.map((type, i) => (
                <img alt="type" key={i} width={48} height={16.4} src={`/type-image/${type}.png`} />
            ))}
        </Flex>
    )
}
