import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    if (!song) {
        return <h3>Select a song</h3>;
    }
    return (
        <div>
            <h3>Song Details:</h3>
            <p>Title &rarr; {song.title}</p>
            <p>Duration &rarr; {song.duration}</p>
            <p>Artist &rarr; {song.artist}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
