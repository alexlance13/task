import React from 'react';
import { ImageDiv, Wrapper } from './styles';

const Card = ({ title, url, photosNumber, onClickHandler, id }) => {
  const onClickHandler1 = onClickHandler ? onClickHandler : () => {};

  return (
    <Wrapper onClick={() => onClickHandler1(id)}>
      <div>
        <ImageDiv>
          <img src={url} alt='cover' />
        </ImageDiv>
        {photosNumber && (
          <>
            <h4>{title}</h4>
            <p>
              {photosNumber} photo{photosNumber > 1 ? 's' : ''}
            </p>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Card;
