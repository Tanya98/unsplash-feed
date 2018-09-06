import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, ButtonIcon } from 'rmwc/Button';

const Photo = (props) => {

    const { photo, index } = props;

    return (
        <div className="card">
            <img className="card-image" src={photo.urls.small} />
            <div className="card-block">
                <p className="card-text"><span className="title-author">Автор:</span> {photo.user.name} <br/> <a href={photo.user.links.html} target="_blank">{photo.user.links.html}</a></p>
                <p className="card-text">Likes: {photo.likes} <br />
                    <NavLink to={`/photo/${index}`} className="next-page">Перейти </NavLink>
                </p>
              
            </div>
        </div>
    );
};

export default Photo;