import React from 'react'

const CommentAsGuestForm = () => {
    return (
        <form className="contact-form" id="comment-form">
            <h2 className="contact-form__title">
                Write a Comment
            </h2>
            <div className="row">
                <div className="col-md-6">
                    <input className="contact-form__input-text" type="text" name="name" placeholder="name:"/>
                </div>
                <div className="col-md-6">
                    <input className="contact-form__input-text" type="email" name="email" placeholder="email:"/>
                </div>
            </div>
            <textarea className="contact-form__textarea" name="body" placeholder="Comment"></textarea>
            <input className="contact-form__submit" type="submit" name="submit-contact" value="Send Comment"/>
        </form>
    )
}

export default CommentAsGuestForm;