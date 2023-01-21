const Star = ({ filled, onClick }) => (
    <span onClick={onClick}>
        {filled ? "★" : "☆"}
    </span>
);

export default Star;