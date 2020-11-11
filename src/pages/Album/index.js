import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../store/actions/photos';
import Card from '../../components/Card';
import { AlbumsDiv } from './styles';
import BigPhoto from '../../components/BigPhoto';

const Albums = ({ fetchPhotos, photos, title }) => {
  const [isBigPhotoVisible, setIsBigPhotoVisible] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const onOpenHandler = (id) => {
    const index = photos.findIndex((photo) => photo.id === id);
    setCurrentPhotoIndex(index);
    setIsBigPhotoVisible(true);
  };

  return (
    <Layout>
      <h1>{title}</h1>
      <AlbumsDiv>
        {photos.map((photo) => (
          <Card key={photo.id} onClickHandler={onOpenHandler} title={photo.title} url={photo.url} id={photo.id} />
        ))}
        {isBigPhotoVisible && (
          <BigPhoto
            close={() => setIsBigPhotoVisible(false)}
            setCurrentPhotoIndex={setCurrentPhotoIndex}
            currentPhotoIndex={currentPhotoIndex}
            photos={photos}
          />
        )}
      </AlbumsDiv>
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    photos: state.photos.photos,
    loading: state.albums.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
