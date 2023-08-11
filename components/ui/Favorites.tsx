import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoritePokemonCard } from '../pokemon';

interface Props {
  favoritesPokemon: number[]
}

export const Favorites: FC<Props> = ({ favoritesPokemon }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        favoritesPokemon.map(id => (
          <FavoritePokemonCard id={id} key={id} />
        ))
      }
    </Grid.Container>
  )
};