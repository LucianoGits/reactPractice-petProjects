import RestaurantContext from './RestaurantContext';
const OpenOrClosed = () => {
     return (
          <RestaurantContext.Consumer>
               {({ isOpen: status }) => (
                    <div className={status ? 'res-open' : 'res-closed'}>
                         {status ? 'Open Now' : 'Closed'}
                    </div>
               )}
          </RestaurantContext.Consumer>
     );
};

export default OpenOrClosed;
