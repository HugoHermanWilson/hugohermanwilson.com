/* eslint-disable no-undef */
/*
 * Adapted from the lightbox and dynamic loading example components in:
 * https://github.com/neptunian/react-photo-gallery/tree/0bb8e4c4a027c021f8a5a06de71e89026596fd95/examples/src
 */

import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { debounce } from './utils';

function HybridGallery({ photos }) {
    const [images, setImages] = useState(photos.slice(0, 6));
    const [pageNum, setPageNum] = useState(1);
    const [loadedAll, setLoadedAll] = useState(false);
    const TOTAL_PAGES = 3;
    const loadMorePhotos = debounce(() => {
        if (pageNum > TOTAL_PAGES) {
            setLoadedAll(true);
            return;
        }

        setImages(
            images.concat(photos.slice(images.length, images.length + 6))
        );
        setPageNum(pageNum + 1);
    }, 200);

    const handleScroll = () => {
        const scrollY =
            window.scrollY ||
            window.pageYOffset ||
            document.documentElement.scrollTop;
        if (
            !loadedAll &&
            window.innerHeight + scrollY >= document.body.offsetHeight - 50
        ) {
            loadMorePhotos();
        }
    };

    useEffect(() => {
        if (window) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
        return () => {
            console.log('Window object not detected');
        };
    });

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Gallery
                photos={images}
                direction="row"
                targetRowHeight="400" // try fix weird pulsating appearance of gallery
                onClick={openLightbox}
            />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

export default HybridGallery;

HybridGallery.propTypes = {
    photos: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            title: PropTypes.string,
            src: PropTypes.string,
            srcSet: PropTypes.string,
            height: PropTypes.number,
            width: PropTypes.number
        })
    )
};

HybridGallery.defaultProps = {
    photos: []
};
