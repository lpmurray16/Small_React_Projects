import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  onInputSubmit = async myInput => {
    const response = await youtube.get('/search', {
      params: {
        q: myInput
      }
    });
    this.setState({
      videos: response.data.items/*,
      selectedVideo: response.data.items[0]*/
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      
      <div className="ui container">
        <h1 class="page_header">A Simple Video Search Tools</h1>
        <h2 class="sub_header">Using YouTube Data API v3</h2>
        <SearchBar onFormSubmit={this.onInputSubmit} />
        <div className="ui grid">
          <div className="flex-row">
            <div className="flex-col-70">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="flex-col-30">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>

          </div>

        </div>
      </div>

    );
  }
}
export default App;