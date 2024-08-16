



/* eslint-disable react/prop-types */

const BoltExp = ({ numbering, title, text }) => {
  return (
    <div className="d-flex gap-3">
      <p
        className="p-2 rounded-circle text-light d-flex justify-content-center align-items-center mt-2"
        style={{ backgroundColor: "#32bb78", width: "30px", height: "30px" }}
      >
        {numbering}
      </p>
      <div>
        <h3>{title}</h3>
        <p style={{ width: "25rem" }}>{text}</p>
      </div>
    </div>
  );
};

export default BoltExp;
