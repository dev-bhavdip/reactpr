import {useState} from "react";

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

const Step1 = ({ handleChange, data, stepincrease }) => {



  return (
    <center>
    <form>
      <label className="fw-bolder">
        First Name:
        <input
          type="text"
          name="fname"
          className="form-control"
          value={data.fname}
          onChange={handleChange}
        />
      </label>
      <label className="fw-bolder">
        Second Name:
        <input
          type="text"
          name="lname"
           className="form-control"
          value={data.lname}
          onChange={handleChange}
        />
      </label>
      <label className="fw-bolder">
        Surname Name:
        <input
          type="text"
          name="sname"
          className="form-control"
          value={data.sname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label >
      <input type="radio" className="form-check-input" name="Male" value="Male"/><label className="form-check-label">Male</label>&nbsp;&nbsp;
      <input type="radio" className="form-check-input" name="Female" value="Female"/><label className="form-check-label">Female</label>
      </label>
      <br   />
      <br   />
      <button onClick={stepincrease} className="btn btn-primary me-md-2">Next</button>
    </form>
    </center>
  );
};
export default Step1;
