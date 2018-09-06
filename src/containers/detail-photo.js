import React, { Component } from 'react';
import { connect } from 'react-redux';
import { likePhoto, unLikePhoto } from "../unsplash/unsplash";
import { like, unlike } from "../action/action";
import { withRouter } from 'react-router-dom';

class DetailPhoto extends Component {

    constructor(props) {
        super(props);
        const { params } = props;

        this.state = {
            id_photo: '',
        }
    }

    componentDidMount() {
        const photos = this.props.photos;
        const id = this.props.match.params.id;
        const id_photo = photos[+id].id;

        this.setState(
            {
                id_photo
            }
        )
    }

    goBack() {
        this.props.history.goBack()
    }

    changeLikePhotoStatus() {
        const id = this.props.match.params.id;
        let status = this.props.photos[+id].liked_by_user;


        if (!status) {
            likePhoto(this.state.id_photo, localStorage.getItem('token'));
            this.props.likePhotoAction(this.state.id_photo);
        } else {
            unLikePhoto(this.state.id_photo, localStorage.getItem('token'));
            this.props.unlikePhotoAction(this.state.id_photo);
        }
    }

    render() {

        const id = this.props.match.params.id;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="card main-card">
                        <img className="card-img-top" src={this.props.photos[+id].urls.full} alt="Card image cap" />
                        <div className="card-block description">
                            <p className="card-text"> <span>Автор:</span> {this.props.photos[+id].user.name}<br/> <a href={this.props.photos[+id].user.links.html}>{this.props.photos[+id].user.links.html}</a></p>
                            <p className="card-text">Likes: {this.props.photos[+id].likes}</p>
                            <button className="but_like" onClick={this.changeLikePhotoStatus.bind(this)}>
                                {this.props.photos[+id].liked_by_user ? 'Unlike' : 'Like'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <button type="button" className="but_go_back" onClick={this.goBack.bind(this)}>&#8592; back</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        photos: state.photoReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        likePhotoAction: (id) => dispatch(like(id)),
        unlikePhotoAction: (id) => dispatch(unlike(id))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailPhoto));