import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.css';
import Video from '../Video';

const VideoList = ({ videos }) => {
    const renderVideoList = () => {
        return videos.map(video => {
            return <Video data={video} />;
        });
    };

    return <div className={css.videoList}>{renderVideoList()}</div>;
};

export default VideoList;
