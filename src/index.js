import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar.js';
import VideoDetails from './components/VideoDetails.js';
import VideoList from './components/VideoList.js';

const API_KEY = 'AIzaSyBJmyojHRPlMRuL7W3YJ_wp5H9BbZfO4Y8';


class App extends React.Component{

    /**
     *
     * @param props
     */
    constructor(props){
        super(props);

        this.state = { videos: [] , selectedVideo: null};

        this.videoSearch('astronomy');
    }



    videoSearch(term) {

        YouTubeSearch({ key: API_KEY, term: term}, (response) => {
            this.setState( {
                videos: response,
                selectedVideo: response[0]
            });
        });
    }

    /**
     *
     * @returns {XML}
     */
    render (){

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div className="app--layout">

                <header style={{ 'marginTop' : '50px', 'float': 'left', 'width': '100%'}}>
                    <SearchBar onSearchTermChange = { videoSearch } />
                </header>

                <section className="row" style={{ 'width': '100%', 'float': 'left'}}>
                    <VideoDetails video = {this.state.selectedVideo}/>
                    <VideoList videos = {this.state.videos }
                        onVideoSelect = { selectedVideo => this.setState({selectedVideo})}/>
                </section>

                <footer style={{ 'backgroundColor': '#eee', 'float': 'left', 'width':'100%','padding' : '10px', 'marginTop': '40px'}}>
                    <p style={{'fontSize': '0.8em', 'padding':'none' }}>copyright (c)</p></footer>
            </div>
        );

    };

};

ReactDOM.render(<App />, document.querySelector('.container'));