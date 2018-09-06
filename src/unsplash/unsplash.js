import Unsplash, { toJson } from 'unsplash-js';
export const unsplash = new Unsplash({
    applicationId: "bb78a5821afc36acbb39c65811fdaa663574d073365fb3138d85081fc27fc17d",
    secret: "ade758127bdd0cd7035598d808c2e0dcc03b23679c60eee827ee2a5ed8245d8b",
    callbackUrl: "http://localhost:8080/auth"
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
]);

export const setAccessTokenUnplash = (code) => {
    unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json =>{
            // debugger;
            localStorage.setItem('token', json.access_token);}
            
        );
};

export const listPhoto = (start, end, access_token) => {

    unsplash.auth.setBearerToken(access_token);

    return unsplash.photos.listPhotos(start, end, "latest")
        .then(res => res.json());
};

export const likePhoto = (id, token) => {
    unsplash.auth.setBearerToken(token);

    unsplash.photos.likePhoto(id)
        .then(toJson)
        .then(json => {
            console.log(json);
        });
};

export const unLikePhoto = (id, token) => {
    unsplash.auth.setBearerToken(token);

    unsplash.photos.unlikePhoto(id)
        .then(toJson)
        .then(json => {
            console.log(json);
        });
};
