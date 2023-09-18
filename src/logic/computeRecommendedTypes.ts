import { PokemonType } from "../Types/PokemonType"
type WeaknessMap = { [key in PokemonType]: PokemonType[] }

export const weaknessMap: WeaknessMap = {
    normal: ["fighting"],
    fire: ["water", "ground", "rock"],
    water: ["electric", "grass"],
    electric: ["ground"],
    grass: ["fire", "ice", "poison", "flying", "bug"],
    ice: ["fire", "fighting", "rock"],
    fighting: ["flying", "psychic"],
    poison: ["ground", "psychic", "bug"],
    ground: ["water", "grass", "ice"],
    flying: ["electric", "ice", "rock"],
    psychic: ["bug"],
    bug: ["fire", "poison", "flying", "rock"],
    rock: ["water", "grass", "fighting", "ground"],
    ghost: ["ghost"],
    dragon: ["ice", "dragon"],
}

export function computeRecommendedTypesArray(type: PokemonType) {
    return weaknessMap[type]
}
