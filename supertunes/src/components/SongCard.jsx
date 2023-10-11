import PropTypes from 'prop-types';
import Rating from './Rating';

function SongCard({ data }) {
     return (
          <div>
               {data.map(song => (
                    <div className="song-card" key={song.id}>
                         <img
                              className="st.thumb"
                              src={song.thumb}
                              alt={song.title}
                         />
                         <div className="song-title">
                              {song.title} by {song.artist}
                         </div>
                         <Rating stars={song.rating} />
                    </div>
               ))}
          </div>
     );
}

export default SongCard;

SongCard.propTypes = {
     data: PropTypes.arrayOf(
          PropTypes.shape({
               thumb: PropTypes.string.isRequired,
               title: PropTypes.string.isRequired,
               artist: PropTypes.string.isRequired,
               rating: PropTypes.number.isRequired,
          })
     ),
};
