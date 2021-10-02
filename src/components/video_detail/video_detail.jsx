import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => {
  console.log(video);
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type='text/html'
        title='youtube video player'
        width='100%'
        height='500px'
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder='0'
        allowFullScreen
      />
      <h2>{video.title}</h2>
      <h3>{video.channelTitle}</h3>
      <pre className={styles.description}>{video.description}</pre>
    </section>
  );
};

export default VideoDetail;
