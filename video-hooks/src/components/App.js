import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    // using the custom hook useVideos, we provide it a default term as a string
    // we then receive an object back with two values inside,
    // the array of videos and the search function, sort of like
    // useState in a way
    const [videos, search] = useVideos("harry potter");

    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="ui container">
            <h1 class="page_header txt-white">A Simple Video Search Tool</h1>
            <h2 class="sub_header txt-white">Using YouTube Data API v3</h2>
            <SearchBar onFormSubmit={search} />
            <div className="ui grid br-4px">
                <div className="flex-row br-4px">
                    <div className="flex-col-70 bg-white">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="flex-col-30 bg-white">
                        <VideoList
                            videos={videos}
                            // update the current state of selectedVideo
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
