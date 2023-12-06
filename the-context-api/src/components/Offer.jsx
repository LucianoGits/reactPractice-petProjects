import React, { useState } from 'react';
import RestaurantContext from './RestaurantContext';

const Offer = () => {
     const [showOffer, setShowOffer] = useState(false);
     return (
          <RestaurantContext.Consumer>
               {({ offer: offerText }) => (
                    <div
                         className="res-offers"
                         onClick={() => setShowOffer(true)}
                    >
                         {showOffer
                              ? offerText
                                   ? offerText
                                   : 'No offers available'
                              : 'Get Offers'}
                    </div>
               )}
          </RestaurantContext.Consumer>
     );
};

Offer.defaultProps = {
     offerText: 'No offers available',
};

export default Offer;
