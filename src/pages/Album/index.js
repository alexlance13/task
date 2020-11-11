import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import { AlbumsDiv } from './styles';
import BigPhoto from '../../components/BigPhoto';

const Albums = ({ title, singleAlbumPhotos }) => {
  const [isBigPhotoVisible, setIsBigPhotoVisible] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const onOpenHandler = (id) => {
    const index = singleAlbumPhotos.findIndex((photo) => photo.id === id);
    setCurrentPhotoIndex(index);
    setIsBigPhotoVisible(true);
  };

  return (
    <Layout>
      <h1>{title}</h1>
      <AlbumsDiv>
        {singleAlbumPhotos.map((photo) => (
          <Card key={photo.id} onClickHandler={onOpenHandler} title={photo.title} url={photo.url} id={photo.id} />
        ))}
        {isBigPhotoVisible && (
          <BigPhoto
            close={() => setIsBigPhotoVisible(false)}
            setCurrentPhotoIndex={setCurrentPhotoIndex}
            currentPhotoIndex={currentPhotoIndex}
            photos={singleAlbumPhotos}
          />
        )}
      </AlbumsDiv>
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    singleAlbumPhotos: state.albums.singleAlbumPhotos,
    loading: state.albums.loading,
  };
}

export default connect(mapStateToProps)(Albums);
