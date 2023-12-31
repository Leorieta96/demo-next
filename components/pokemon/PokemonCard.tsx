import { SmallPokemon } from '@/interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, img, name } }) => {
    const router = useRouter();
    const onClick = () => {
        router.push(`/name/${name}`);
    }
    return (
        <Grid xs={6} sm={3} md={2} xl={1}>
            <Card isHoverable isPressable onClick={onClick}>
                <Card.Body css={{
                    p: 1
                }}>
                    <Card.Image width="100%" height={140} src={img} />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'>{name}</Text>
                        <Text>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}