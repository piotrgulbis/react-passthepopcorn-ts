import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from './ThumbStyles';

type Props = {
  image: string;
  movieId?: number;
  clickable: boolean;
};

const Thumb: React.FC<Props> = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} clickable={clickable} alt='movie-thumb' />
      </Link>
    ) : (
      <Image src={image} clickable={false} alt='movie-thumb' />
    )}
  </div>
);

export default Thumb;
