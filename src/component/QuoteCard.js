
const QuoteCard = ({ quote }) => {
  return (
    <div className="Card">
      <h2>{quote.character}</h2>
      <p>{quote.quote}</p>
      <img src={quote.image} alt={quote.character} />
    </div>
  );
};

export default QuoteCard;
