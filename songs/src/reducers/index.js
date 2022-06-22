// This is the REDUCERS index file
import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "Holiday", duration: "4:05", artist: "Green Day" },
        { title: "Hey, Jude", duration: "3:34", artist: "The Beatles" },
        { title: "Hello Hello Hello", duration: "4:25", artist: "Remi Wolf" },
        {
            title: "Hypotheticals",
            duration: "3:55",
            artist: "Lake Street Dive",
        },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
