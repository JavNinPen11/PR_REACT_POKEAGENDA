import './App.css';
import { useMemo, useState } from 'react';
import Layout from './components/Layout.jsx';
import Header from './components/Header.jsx';
import SearchForm from './components/SearchForm.jsx';
import PokemonGrid from './components/PokemonGrid.jsx';

const MOCK_POKEMONS = [
  {
    id: 25,
    name: 'pikachu',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    types: ['electric'],
    weight: 6,
    height: 0.4,
  },
  {
    id: 1,
    name: 'bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    types: ['grass', 'poison'],
    weight: 6.9,
    height: 0.7,
  },
];

function App() {
  const [query, setQuery] = useState('');
  const [pokemons, setPokemons] = useState(MOCK_POKEMONS);

  const filteredPokemons = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();

    if (!trimmedQuery) {
      return pokemons;
    }

    return pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(trimmedQuery)
    );
  }, [pokemons, query]);

  return (
    <div className="app">
      <Layout>
        <Header />
        <SearchForm
          value={query}
          onChange={setQuery}
          onReset={() => setQuery('')}
        />
        <PokemonGrid items={filteredPokemons} />
      </Layout>
    </div>
  );
}

export default App;