import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../store/actions/albums';
import { fetchPhotos } from '../../store/actions/photos';
import Card from '../../components/Card';
import { AlbumsDiv, StyledLink } from './styles';
import CircleLoader from 'react-spinners/CircleLoader';

const Home = ({ albums, fetchAlbums, fetchPhotos, photos, loading }) => {
  const [covers, setCovers] = useState([]);

  useEffect(() => {
    fetchAlbums();
    fetchPhotos();
  }, []);

  useEffect(() => {
    const newCovers = [...covers];
    photos.forEach((photo) => {
      if (!covers.length || covers.some((cover) => cover.albumId !== photo.albumId)) newCovers.push(photo.url);
    });
    setCovers(newCovers);
  }, [photos]);

  return (
    <Layout>
      {loading ? (
        <CircleLoader css={'margin: 200px auto;'} size={150} />
      ) : (
        <>
          <h1>Albums</h1>
          <AlbumsDiv>
            {albums.map((album, i) => (
              <StyledLink key={album.id} to={`/album/${album.id}`}>
                <Card title={album.title} url={covers[i]} photosNumber={1} />
              </StyledLink>
            ))}
          </AlbumsDiv>
        </>
      )}
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    albums: state.albums.albums,
    photos: state.photos.photos,
    loading: state.albums.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchPhotos: () => dispatch(fetchPhotos()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
