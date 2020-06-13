import React from 'react'

const Comment = () => {
    return (
        <div className="comments">
            <h2 className="comments-title">
                2 Comments
            </h2>
            <ul className="comments__list">
                <li className="comments__list-item">
                    <img className="comments__list-item-image" src="upload/single/th1.jpg" alt=""/>
                    <div className="comments__list-item-content">
                        <h3 className="comments__list-item-title">
                            Philip W
                        </h3>
                        <span className="comments__list-item-date">
                            Posted October 7, 2018
                        </span>
                        <a className="comments__list-item-reply" href="#">
                            <i className="la la-mail-forward"></i>
                            Reply
                        </a>
                        <p className="comments__list-item-description">
                            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                        </p>
                    </div>
                </li>
                <li className="comments__list-item">
                    <img className="comments__list-item-image" src="upload/single/th2.jpg" alt=""/>
                    <div className="comments__list-item-content">
                        <h3 className="comments__list-item-title">
                            Philip W
                        </h3>
                        <span className="comments__list-item-date">
                            Posted October 7, 2018
                        </span>
                        <a className="comments__list-item-reply" href="#">
                            <i className="la la-mail-forward"></i>
                            Reply
                        </a>
                        <p className="comments__list-item-description">
                            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Comment;