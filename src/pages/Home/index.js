import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import { fetchAlbums, setSingleAlbumPhotos } from '../../store/actions/albums';
import { fetchPhotos } from '../../store/actions/photos';
import Card from '../../components/Card';
import { AlbumsDiv, StyledLink } from './styles';
import CircleLoader from 'react-spinners/CircleLoader';

const Home = ({ albums, fetchAlbums, fetchPhotos, photos, loading, setSingleAlbumPhotos }) => {
  useEffect(() => {
    fetchAlbums();
    fetchPhotos();
  }, []);

  return (
    <Layout>
      {loading ? (
        <CircleLoader css={'margin: 200px auto;'} size={150} />
      ) : (
        <>
          <h1>Albums</h1>
          <AlbumsDiv>
            {albums.map((album) => {
              const photosChunk = photos.filter((photo) => photo.albumId === album.id);
              return (
                <StyledLink onClick={() => setSingleAlbumPhotos(photosChunk)} key={album.id} to={`/album/${album.id}`}>
                  <Card title={album.title} url={photosChunk[0] ? photosChunk[0].url : ''} photosNumber={photosChunk.length} />
                </StyledLink>
              );
            })}
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
    setSingleAlbumPhotos: (photos) => dispatch(setSingleAlbumPhotos(photos)),
    fetchPhotos: () => dispatch(fetchPhotos()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
