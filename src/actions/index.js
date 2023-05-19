export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARC_RESULT = 'ADD_SEARC_RESULT';

//this functions are called action creator
export function addMovies (movies){
    return {
        type: ADD_MOVIES,
        movies
    };
}
export function addFavourite (movie){
    return {
        type: ADD_FAVOURITE,
        movie
    };
}
export function removeFromFavourites(movie){
    return{
        type: REMOVE_FROM_FAVOURITES,
        movie
    };
}
export function setShowFavourites(val){
    return{
        type: SET_SHOW_FAVOURITE,
        val
    };
}
export function addMovieToList(movie) {
    return {
      type: ADD_MOVIE_TO_LIST,
      movie,
    };
  }
  //async action
  export function handleMovieSearch (movie){
    const url = `https://www.omdbapi.com/?apikey=244c340b&t=${movie}`;
    return function (dispatch){
        fetch(url)
        .then(Response=> Response.json())
        .then(movie =>{
            //console.log(movie);

            //dipatch an action
            dispatch(addMovieSearchResult(movie));
        })
    }
 } 

 export function addMovieSearchResult(movie) {
    return {
        type: 'ADD_SEARC_RESULT',
        movie
    };
 }