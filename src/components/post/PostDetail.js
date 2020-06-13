import React from 'react'

const PostDetail = () => {
    return (
        <>
        <div class="title-single-post">
            <a class="text-link" href="#">Lifestyle</a>
            <h1>Vivamus vestibulum ntulla necante.</h1>
            <ul class="post-tags">
                <li>1 week ago</li>
                <li><a href="#">3 comments</a></li>
            </ul>
        </div>
        <div class="single-post-content">
            <img src="upload/single/4.jpg" alt=""/>
            <div class="post-content">
                <div class="post-social">
                    <span>Share</span>
                    <ul class="share-post">
                        <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                    </ul>
                </div>
                <div class="post-content-text">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula <a href="#">sollicitudin laoreet viverra</a>, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                    <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent <a href="#">elementum hendrerit </a> tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                    <blockquote>
                        “ Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. ”
                    </blockquote>
                    <p>Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu <a href="#">pulvinar nunc sapien</a> ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                    <h3>Nulla vitae mauris non felis mollis faucibus.</h3>
                    <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, <a href="#">adipiscing varius </a>, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>
                    <div class="image-alt-box">
                        <div class="image-holder">
                            <img src="upload/single/2.jpg" alt=""/>
                            <span>Nulla sed leo.</span>
                        </div>
                        <div class="image-holder">
                            <img src="upload/single/3.jpg" alt=""/>
                            <span>Fusce lacinia arcu et nulla.</span>
                        </div>
                    </div>
                    <p>Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>

                    <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullam
                    corper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra 
                    malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est.</p>
                    <div class="share-tags-box">
                        <ul class="tags">
                            <li><a href="#">travel</a></li>
                            <li><a href="#">adventure</a></li>
                            <li><a href="#">lifestyle</a></li>
                        </ul>
                        <ul class="shares-likes">
                            <li><a href="#" class="likes">Like <i class="fa fa-heart-o"></i> 14</a></li>
                            <li><a href="#" class="facebook"><i class="fa fa-facebook"></i> 23</a></li>
                            <li><a href="#" class="twitter"><i class="fa fa-twitter"></i> 5</a></li>
                            <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i> 2</a></li>
                        </ul>
                    </div>
                </div>	
            </div>
            <div class="prev-next-box">
                <div class="prev-box">
                    <a class="text-link" href="single-post.html"><i class="fa fa-angle-left"></i> Previous Post</a>
                    <h2><a href="single-post.html">Sed adipiscing ornare risus.</a></h2>
                </div>
                <div class="next-box">
                    <a class="text-link next-link" href="single-post.html">Next Post <i class="fa fa-angle-right"></i></a>
                    <h2><a href="single-post.html">Quisque a lectus.</a></h2>
                </div>
            </div>
            <div class="related-box">
                <h2>Related Posts</h2>
                <div class="row">
                    <div class="col-lg-4 col-md-4">
                        <div class="news-post standard-post text-left">
                            <div class="image-holder">
                                <a href="single-post.html"><img src="upload/blog/p1.jpg" alt=""/></a>
                            </div>
                            <a class="text-link" href="#">Food</a>
                            <h2><a href="single-post.html">Fusce pellentesque suscipit.</a></h2>
                            <ul class="post-tags">
                                <li>by <a href="#">Stan Enemy</a></li>
                                <li>3 days ago</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="news-post standard-post text-left">
                            <div class="image-holder">
                                <a href="single-post.html"><img src="upload/blog/p2.jpg" alt=""/></a>
                            </div>
                            <a class="text-link" href="#">Lifestyle</a>
                            <h2><a href="single-post.html">Quisque a lectus. </a></h2>
                            <ul class="post-tags">
                                <li>by <a href="#">Stan Enemy</a></li>
                                <li>3 days ago</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="news-post standard-post text-left">
                            <div class="image-holder">
                                <a href="single-post.html"><img src="upload/blog/p3.jpg" alt=""/></a>
                            </div>
                            <a class="text-link" href="#">Travel</a>
                            <h2><a href="single-post.html">Vestibulum commodo tortor.</a></h2>
                            <ul class="post-tags">
                                <li>by <a href="#">Stan Enemy</a></li>
                                <li>3 days ago</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PostDetail;