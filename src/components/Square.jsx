const Square = ({ value, onClick, isWinningSquare }) => {
  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winnningClassName = isWinningSquare ? 'winning' : ' ';
  return (
    <button
      type="button"
      className={`square ${colorClassName} ${winnningClassName} `}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Square;
