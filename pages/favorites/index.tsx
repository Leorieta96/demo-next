import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Layout } from '@/components/layouts'
import { Favorites, NoFavorites } from '@/components/ui';
import { localFavorites } from '@/utils';
import { Card, Grid } from '@nextui-org/react';


const FavoritesPage: NextPage = () => {
  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemon(localFavorites.pokemons);
  }, []);

  return (
    <Layout title='Favoritos'>
      {
        favoritesPokemon.length === 0
          ? (<NoFavorites />)
          : (<Favorites favoritesPokemon={favoritesPokemon} />)
      }

    </Layout>
  )
}


export default FavoritesPage