// Go get React from installed node modules
// Go find react and assign it to a variable React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Importing SearchBar
// But whatever we write ( we write our own .js files)
// we have to give an actua; file reference to Babel
import SearchBar from './components/search_bar';

// Importing the seacrh package
import YTSearch from 'youtube-api-search';

// Import Video list
import VideoList from './components/video_list'

// VideoDetail import
import VideoDetail from './components/video_detail';

// Lodash import
import _ from "lodash";

// Youtube API_Key
// This will allow us to make requests to Youtube
const API_KEY = 'AIzaSyD1sFzAQTiXe5x3QnGkHYIBm5ramMLw_Ww';




// We want to create a new componenet.
// This component should produce some HTML


// Refactoring the App component from the functional component
// to a class component

// List of videos is going to be changing over time
// Therefore use state
class App extends Component{
    constructor(props){
        super(props);

        // We need an array of videos
        this.state = {
            videos : [],
            selectedVideo : null
        };

        this.videoSearch("surfoards");
    }

    videoSearch(term){
        YTSearch({key : API_KEY, term: term}, (videos) => {
            this.setState(
                {
                    videos: videos,
                    selectedVideo: videos[0]
                });
            // ES6 usaage if key is same as value
            // this.setState({videos});
        });
    }

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        );
    }
}


// Take this component's generated HTML and put this in
// the DOM. But react doesn't have where to put this .

// render - takes a second argument, target component
// Inside the index.html - there is a div called <div class='container'>
ReactDOM.render(<App />, document.querySelector('.container'));
