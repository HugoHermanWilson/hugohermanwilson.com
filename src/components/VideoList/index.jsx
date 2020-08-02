/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Video from '../Video';

const VideoList = ({ videos }) => {
    const ref = useRef();
    const [videoListWidth, setVideoListWidth] = useState('100%');
    const [videoHeight, setVideoHeight] = useState('300px');

    useEffect(() => {
        if (document === undefined) {
            console.log('document undefined');
            return;
        }

        const onIframeLoad = event => {
            console.log('in onIframeLoad');
            const width = event.target.clientWidth;
            const goldenRatio = 1.61803398875;
            setVideoListWidth(`${width}px`);
            setVideoHeight(`${width / goldenRatio}px`); // make height proportional to width
        };

        document.querySelector('iframe').addEventListener('load', onIframeLoad);

        // eslint-disable-next-line consistent-return
        return () => {
            document
                .querySelector('iframe')
                .removeEventListener('load', onIframeLoad);
        };
    }, []);

    const renderVideoList = () => {
        return videos.map(video => {
            return (
                <Video
                    key={video.node.fields.slug}
                    data={video}
                    height={videoHeight}
                />
            );
        });
    };

    return (
        <div style={{ width: videoListWidth }} ref={ref}>
            {renderVideoList()}
        </div>
    );
};

export default VideoList;

VideoList.propTypes = {
    videos: PropTypes.arrayOf(
        PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string
                        }),
                        html: PropTypes.string
                    })
                })
            )
        })
    ).isRequired
};
