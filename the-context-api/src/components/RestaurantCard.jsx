import Score from './Score';
import Details from './Details';
import { PropTypes } from 'prop-types';
import RestaurantContext from './RestaurantContext';

const RestaurantCard = ({
     name,
     categories,
     location,
     isOpen,
     offer,
     score,
}) => (
     <RestaurantContext.Provider
          value={{ name, categories, location, isOpen, offer, score }}
     >
          <div className="restaurant">
               <Details />
               <Score />
          </div>
     </RestaurantContext.Provider>
);

{
     /* <Details
               name={name}
               category={categories}
               location={location}
               status={isOpen}
               offer={offer}
          />
          <Score value={score} /> */
}

RestaurantCard.propTypes = {
     name: PropTypes.string,
     categories: PropTypes.string,
     location: PropTypes.string,
     isOpen: PropTypes.boolean,
     offer: PropTypes.string,
     score: PropTypes.number,
};

export default RestaurantCard;
