import type { FavoritePokemon } from "@interfaces/favorite-pokemons"
import { For, createSignal } from "solid-js"
import { FavoritePokemonCard } from "./FavoritePokemonCard"



const getLocaleStoragePokemons = (): FavoritePokemon[] => {
    const favoritePokemons = JSON.parse(localStorage.getItem('favorites') ?? '[]')

    return favoritePokemons
}


export const FavoritePokemons = () => {

    const [pokemons, setPokemons] = createSignal(getLocaleStoragePokemons())
    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">

            <For each={pokemons()}>{(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
            </For>
        </div>
    )

}