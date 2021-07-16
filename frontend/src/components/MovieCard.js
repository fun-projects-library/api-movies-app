import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const MovieCard = ({movie}) => (
    <Card>
    <Image src={movie.cover} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{movie.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{movie.year}</span>
      </Card.Meta>
      <Card.Description>
        {movie.category}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='star' />
        Imdb Score: {movie.imdb_score}
      </a>
    </Card.Content>
  </Card>
)

export default MovieCard