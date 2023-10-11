import { Component } from 'react';
import PropTypes from 'prop-types';
import songs from './services/songs';
import SongCard from './components/SongCard';

class App extends Component {
     constructor(props) {
          super(props);
          this.state = {
               songs: [...songs],
          };
     }

     sortSongsByTitle = () => {
          const sortedSongs = [...this.state.songs].sort((a, b) =>
               a.title.localeCompare(b.title)
          );
          this.setState({ songs: sortedSongs });
     };

     sortSongsByRating = () => {
          const sortedSongs = [...this.state.songs].sort(
               (a, b) => b.rating - a.rating
          );
          this.setState({ songs: sortedSongs });
     };

     render() {
          return (
               <div id="super-tunes">
                    <h2 id="st-title">SuperTunes - Songs of the Week</h2>
                    <button className="st-btn" onClick={this.sortSongsByTitle}>
                         Sort by Title
                    </button>
                    <button className="st-btn" onClick={this.sortSongsByRating}>
                         Sort by Rating
                    </button>
                    <div id="song-list">
                         <SongCard data={this.state.songs} />
                    </div>
               </div>
          );
     }
}

export default App;

App.propTypes = {
     data: PropTypes.arrayOf(
          PropTypes.shape({
               thumb: PropTypes.string.isRequired,
               title: PropTypes.string.isRequired,
               artist: PropTypes.string.isRequired,
               rating: PropTypes.number.isRequired,
          })
     ),
};
