import PropTypes from 'prop-types';

function Rating({ stars }) {
     return (
          <div className="rating">
               {[...Array(Math.round(stars <= 5 ? stars : 0)).keys()].map(
                    index => (
                         <div key={index} className="star"></div>
                    )
               )}
          </div>
     );
}

Rating.propTypes = {
     stars: PropTypes.number.isRequired,
};

export default Rating;
