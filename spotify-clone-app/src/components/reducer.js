import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    item: null,
    // Remove after finished developing
    // token: 'BQCnPCLQk0APe_P7oMr_4rpOY6kpHG89fnh0-0-weO6xzXqM0_45f0SHtH9W2WbJPirf2xcJhhuJQ7_OBn5r7wKSVJ3bj8KVMmuoHz2MkRz9gejJb4RFJQyWWrFtSEdWjTU2Gy66zF1LtdEWyh_sEDpNAM3k2yOfUEn1pfiQCm8NEqWjmIclOma2LaACt7FSKa1Rvf-gYvYZUzdl-w8C'
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
          
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        default:
            return state;
    }
}

export default reducer;