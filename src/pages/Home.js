import React from 'react';
import Slider from '../components/Slider';
import TrendingPost from '../components/post/TrendingPosts';
import FreshStories from '../components/post/FreshStories';

const Home = () => {
    return (
        <>
            <Slider/>
            <TrendingPost/>
            <FreshStories/>
        </>
    )
}

export default Home;