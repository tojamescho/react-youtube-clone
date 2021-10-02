import styles from './app.module.css';
import React, { useCallback, useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  const search = useCallback((query) => {
    setSelectedVideo(null);
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  }, []);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const onLogoClick = () => {
    setSelectedVideo(null);
  };

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} onLogoClick={onLogoClick} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
