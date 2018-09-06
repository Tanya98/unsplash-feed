import React, { Component } from 'react';
import '../styles/index.scss';
import { setAccessTokenUnplash, listPhoto } from '../unsplash/unsplash';
import { loadPhoto } from '../action/action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, ButtonIcon } from 'rmwc/Button';
import Photo from '../components/photo.js';

class Photos extends Component {
    constructor(props) {
        super(props);
        this.loadPhotos = this.loadPhotos.bind(this);
        if (localStorage.getItem('token') === 'undefined' || localStorage.getItem('token') === '' || !localStorage.getItem('token'))
            this.setAccessToken();
    }

    setAccessToken() {
        const code = location.search.split('code=')[1];

        if (code) {
            setAccessTokenUnplash(code);
        }
    }

    loadPhotos() {
        let start = window.localStorage.getItem('start');
        let end = window.localStorage.getItem('end');
        const data = listPhoto(+start, +end, localStorage.getItem('token'));
        data.then(d => this.props.loadPhoto(d));
        window.localStorage.setItem('start', +start + 10);
        window.localStorage.setItem('end', +end + 10);
        console.log('loading');
    }

    render() {
        return (
            <div className="block-photos">
                <div className="row">
                    {
                        this.props.photos.map((photo, index) => {
                            return <Photo key={index} photo={photo} index={index} />
                        })
                    }
                </div>
                <div className="block-home">
                    <div className="container">
                        {/* <Button raised theme="secondary-bg on-secondary" onClick={this.loadPhotos}>Download photos</Button> */}
                        <button  className="but_auth but_download" onClick={this.loadPhotos}>Load more</button>

                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state=> {
    return {
        photos: state.photoReducer,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadPhoto: photos => {
            dispatch(loadPhoto(photos));
        }
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth));
