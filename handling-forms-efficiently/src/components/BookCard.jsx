import PropTypes from 'prop-types';
const BookCard = ({ data }) => {
     return data ? (
          <div className="book-card">
               <div className="book-title">{data.title}</div>
               {data.thumbnailUrl ? (
                    <img
                         className="book-thumb"
                         src={data.thumbnailUrl}
                         alt={data.title}
                    />
               ) : null}
          </div>
     ) : null;
};

BookCard.propTypes = {
     data: PropTypes.shape({
          title: PropTypes.string.isRequired,
          thumbnailUrl: PropTypes.string.isRequired,
     }),
};

export default BookCard;
