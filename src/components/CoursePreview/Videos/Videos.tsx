import React from 'react';
import styles from './Videos.module.scss';

interface VideoProps {
  url: string;
}

const Videos: React.FC<VideoProps> = ({ url }) => {

  return (
    <section className={styles.videosWrapper}>
      <div className="container">
        <div className={styles.videosWrap}>
            <iframe
                src={url}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className={styles.videoPlayer}
                title="Vimeo Video"
            />
        </div>
      </div>
    </section>
  );
};

export default Videos;
