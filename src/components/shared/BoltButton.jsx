



const BoltButton = ({ text, onClick, style }) => {
  return (
    <button onClick={onClick} className="rounded-pill p-" style={{color:"red"}}>
      {text}
    </button>
  );
};

export default BoltButton;

