import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Posts from '../components/post/Posts';
import Sidebar from '../components/Sidebar';

const AllPosts = () => {
    return (
      <>
        <Breadcrumb />
        <section className="blog-section">
          <div className="container">
            <div className="row">
              <Posts />
              <Sidebar />
            </div>
          </div>
        </section>
      </>
    );
}

export default AllPosts;