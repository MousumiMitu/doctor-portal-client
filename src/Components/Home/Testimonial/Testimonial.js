import React from "react";

const Testimonial = (props) => {
  const { quote, name, from, img } = props.testimonial;
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-body">
          <p className="card-text text-center" style={{ textAlign: "justify" }}>
            {quote}
          </p>
        </div>
        <div
          className="card-footer d-flex  align-items-center "
          style={{ marginTop: "20px" }}
        >
          <img className="mx-3" src={img} alt="" width="60" />
          <div>
            <h6 className="text-primary">{name}</h6>
            <p className="m-0">{from}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;