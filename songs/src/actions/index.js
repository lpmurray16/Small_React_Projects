// This is the ACTIONS index file


// Action creator to select a song
export const selectSong = (song) => {
    // Return a JS object
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

// named export allows you to export many functions from a file