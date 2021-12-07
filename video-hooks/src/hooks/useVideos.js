import { useEffect, useState } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
    // videos is an array received from the API after using the
    // term/defaultSearchTerm value from the users input
    const [videos, setVideos] = useState([]);

    // empty array = run once on mount, roughly equivalent to componentDidMount
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    // when the enter key is hit and term is given, make a call to the YouTube API
    // with term as the query parameter. A default term is given on mount
    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
            },
        });
        setVideos(response.data.items);
    };

    // return an array with the value- videos, which is an array
    // and search which is the function used to make a search with the API
    // alternatively, you could return { videos, search } which would work
    // but it isn't React oriented it is more plain JS oriented
    return [videos, search];
};

export default useVideos;
