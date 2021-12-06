import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
    // two pieces of state, an array of videos received from the API
    // and the video that gets selected from said list
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    // empty array = run once on mount, roughly equivalent to componentDidMount
    useEffect(() => {
        onTermSubmit("harry potter");
    }, []);

    // update the current state of selectedVideo
    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    // when the enter key is hit and term is given, make a call to the YouTube API with search
    // value called term
    const onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
            },
        });
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    return (
        <div className="ui container">
            <h1 class="page_header txt-white">A Simple Video Search Tool</h1>
            <h2 class="sub_header txt-white">Using YouTube Data API v3</h2>
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui grid br-4px">
                <div className="flex-row br-4px">
                    <div className="flex-col-70 bg-white">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="flex-col-30 bg-white">
                        <VideoList
                            videos={videos}
                            onVideoSelect={onVideoSelect}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
