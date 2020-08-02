import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import css from './index.module.css';
import Video from '../Video';

const VideoList = ({ videos, videoWidth }) => {
    const ref = useRef();
    const [videoListWidth, setVideoListWidth] = useState('100%');
    const [videoHeight, setVideoHeight] = useState(null);

    useEffect(() => {
        if (document === undefined) {
            console.log('document undefined');
            return;
        }

        const onIframeLoad = event => {
            console.log('in onIframeLoad');
            const width = event.target.clientWidth;
            const goldenRatio = 1.61803398875;
            setVideoListWidth(width);
            setVideoHeight(width / goldenRatio); // make height proportional to width
        };

        document.querySelector('iframe').addEventListener('load', onIframeLoad);

        return () => {
            document
                .querySelector('iframe')
                .removeEventListener('load', onIframeLoad);
        };
    }, []);

    const renderVideoList = () => {
        return videos.map(video => {
            return <Video data={video} height={videoHeight} />;
        });
    };

    return (
        <div
            className={css.videoList}
            style={{ width: videoListWidth }}
            ref={ref}
        >
            {renderVideoList()}
        </div>
    );
};

export default VideoList;
