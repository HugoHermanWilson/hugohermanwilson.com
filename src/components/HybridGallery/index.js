import React, { useState, useEffect, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { debounce } from './utils';

function ExampleDynamicLoading({ photos }) {
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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        const scrollY =
            window.scrollY ||
            window.pageYOffset ||
            document.documentElement.scrollTop;
        if (window.innerHeight + scrollY >= document.body.offsetHeight - 50) {
            loadMorePhotos();
        }
    };

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Gallery photos={images} direction="row" onClick={openLightbox} />
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

export default ExampleDynamicLoading;
