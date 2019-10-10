import axios from 'axios'

export default function search (query) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
}
