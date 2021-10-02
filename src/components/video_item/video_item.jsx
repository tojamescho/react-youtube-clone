import React from 'react';
import styles from './video_item.module.css';
const VideoItem = ({ video, onVideoClick, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={video.thumbnail}
          alt='video thumbnail'
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{video.title}</p>
          <p className={styles.channelTitle}>{video.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
