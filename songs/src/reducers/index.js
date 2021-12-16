// This is the REDUCERS index file
import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "Holiday", duration: "4:05" },
        { title: "Hey, Jude", duration: "3:34" },
        { title: "Yesterday", duration: "4:25" },
        { title: "Help!", duration: "3:55" },
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
