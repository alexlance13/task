import React from 'react';
import { ImageDiv, Wrapper, ArrowDiv } from './styles';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const BigPhoto = ({ currentPhotoIndex, setCurrentPhotoIndex, photos, close }) => {
  const handleArrowClick = (num) => {
    if (currentPhotoIndex + num > photos.length - 1 || currentPhotoIndex + num < 0) return;
    setCurrentPhotoIndex((prevState) => prevState + num);
  };

  const onOutsideClickHandler = (event) => {
    if (event.target.tagName === 'DIV') close();
  };

  return (
    <Wrapper onClick={onOutsideClickHandler}>
      <ArrowDiv>{currentPhotoIndex > 0 && <BiLeftArrow onClick={() => handleArrowClick(-1)} />}</ArrowDiv>
      <ImageDiv>
        <img src={photos[currentPhotoIndex].url} alt='cover' />
      </ImageDiv>
      <ArrowDiv>{photos.length - 1 > currentPhotoIndex && <BiRightArrow onClick={() => handleArrowClick(1)} />}</ArrowDiv>
    </Wrapper>
  );
};

export default BigPhoto;
