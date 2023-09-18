import { PokemonType } from "./PokemonType"
export type Pokemon = {
    name: string
    id: number
    spriteURL: string
    types: PokemonType[]
    stats: number[]
}
