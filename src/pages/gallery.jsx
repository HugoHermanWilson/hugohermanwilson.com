import React from 'react';
import PropTypes from 'prop-types';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';
// import ExampleDynamicLoading from '../components/ExampleDynamicLoading';
// import ExampleWithLightbox from '../components/ExampleWithLightbox';
import HybridGallery from '../components/HybridGallery';

export default function GalleryPage(props) {
    const photos = [
        {
            src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
            width: 4,
            height: 3,
            title: 'hello'
        },
        {
            src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
            width: 1,
            height: 1
        },
        {
            src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
            width: 3,
            height: 4
        },
        {
            src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
            width: 3,
            height: 4
        },
        {
            src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
            width: 3,
            height: 4
        },
        {
            src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
            width: 4,
            height: 3
        },
        {
            src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
            width: 3,
            height: 4
        },
        {
            src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
            width: 4,
            height: 3
        },
        {
            src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
            width: 4,
            height: 3
        },
        {
            src: 'https://source.unsplash.com/XiDA78wAZVw/600x799',
            width: 3,
            height: 4
        },
        {
            src: 'https://source.unsplash.com/x8xJpClTvR0/800x599',
            width: 4,
            height: 3
        },
        {
            src: 'https://source.unsplash.com/qGQNmBE7mYw/800x599',
            width: 4,
            height: 3
        },
        {
            src: 'https://source.unsplash.com/NuO6iTBkHxE/800x599',
            width: 4,
            height: 3
        },
        {
            src: 'https://source.unsplash.com/pF1ug8ysTtY/600x400',
            width: 4,
            height: 3
        },
        {
            src: 'https://source.unsplash.com/A-fubu9QJxE/800x533',
            width: 4,
            height: 3
        },
        {
            src: 'https://source.unsplash.com/5P91SF0zNsI/740x494',
            width: 4,
            height: 3
        }
    ];

    return (
        <Template>
            <Menu path={props.location.pathname} />
            <Body className=" center-text body-font">
                <h1 className="title-font large-text">Gallery</h1>
                <p>Look at the big dog baritone</p>
                <HybridGallery photos={photos} />
            </Body>
        </Template>
    );
}

GalleryPage.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
};
