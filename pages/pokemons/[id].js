import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Pokemon = ({ data }) => {
  const router = useRouter();
  console.log(router);

  //si fallback es true utilizar este codigo
  //if (router.isFallback) {
    //return <p>Cargando...</p>;
  //}
  return (
    <div>
      <h3>
        {data.name} número #{data.id}
      </h3>
      <Image
        src={data.sprites.front_default}
        alt={data.name}
        width={300}
        height={300}
      />
      <br />
      <Link href="/">Volver al Inicio</Link>
    </div>
  );
};

export default Pokemon;

//funcion que permite el renderizado de la pagina en el lado del servidor
//export const getServerSideProps = async ({ params }) => {
//const response = await fetch(
//`https://pokeapi.co/api/v2/pokemon/${params.id}`
//);
//const data = await response.json();
//return { props: { data } };
//};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const data = await response.json();
  return { props: { data } };
};

export const getStaticPaths = async () => {
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];
  return {
    paths,
    //fallback: true,
    fallback: 'blocking',
  };
};
