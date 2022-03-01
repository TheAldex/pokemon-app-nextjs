import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url.split('/').filter(x => x).pop();
  return (
    <li key={pokemon.name}>
      <Link href={`/pokemons/${id}`}>{pokemon.name}</Link>
    </li>
  );
};

export default function Pokemons({ pokemons }) {
  return (
    <div>
      <p>Mi App de Pokemons</p>
      <ul>
        {pokemons.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemons.name} />
        ))}
      </ul>
    </div>
  );
}

//permite indicar a next que la app se ejecutará de manera estatica
export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();

  return {
    props: { pokemons: data.results },
  };
};
