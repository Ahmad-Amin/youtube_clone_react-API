import React from 'react';
import SearchBar from './components/searchBar/SearchBar'
import youtube from './apis/youtube';
import MainVideoComp from './components/mainVideoComp/MainVideoComp';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    handleSubmit = async(query) => {
        const response = await youtube.getSnippetData().get('/search', {
            params: {
                q: query
            }
        })

        this.setState({videos: response.data.items});
        console.log(this.state.videos);
        
    }

    handleVideoSelect = (v) => {
        this.setState({selectedVideo: v});
        // console.log(this.state.selectedVideo);
    }

    render() {
        return (
            <React.Fragment>
                <SearchBar handleFormSubmit={this.handleSubmit}></SearchBar>
                <MainVideoComp
                    selectedVideo={this.state.selectedVideo} 
                    videos={this.state.videos}
                    handleVideoSelect={this.handleVideoSelect}></MainVideoComp>
            </React.Fragment>
        );
    }

}

export default App