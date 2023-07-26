import { useState,useEffect } from "react";
import React from "react";
import ReactDOM, { render } from "react-dom";

const Step2 = ({ handleChange, data, decresstep,setData, stepincrease,value,setValue }) => {
  // const [value, setValue] = useState(0)
  const [Calculate, setCalculation] = useState(0)



  // useEffect(() => {
  //   setCalculation(() => value * 2);
  // }, [count]); // <- add the count variable here

const multipleValue = async (event) => {
  const value = event.target.value;
  const id = event.target.id;
  console.log("id=",id);
  if(data.education[id]){
    data.education.splice(id,1,value);
    setData((data) => ({...data,education:[ event.target.value]}));
  }else{
    setData((data) => ({...data,education:[...data.education, event.target.value]}));
  }
};

const multipleValuecourse = (event) => {
  const value = event.target.value;
  const id = event.target.id;
  console.log("course",data.course);
  if(data.course[id]){
    console.log("if");
    data.course.splice(id,1,value);
    setData((data) => ({...data,course:[ event.target.value]}));
  }
  else{
    console.log("else");
    setData((data) => ({...data,course:[...data.course, event.target.value]}));
  }
};


const multipleValuepass = (event) => {
  const value = event.target.value;
  const id = event.target.id;
  if(data.passing_Year[id]){
  setData((data) => ({...data,passing_Year: [...data.passing_Year, event.target.value],
  }));
}
};

const minus = ()=>{
  data.education.pop();
    data.course.pop();
    data.passing_Year.pop();
    
  setValue(value > 0 ? value-1:0)
}
  
const Val = () =>{
  let temp1=0;
  let arr=[];

for(let i=0; i <= value; i++) {

  console.log("step2",data.education[temp1]);
  arr.push( 
  <div className="row g-3" key={i}>
  <br />
  <div className="col">
  <label>Select Board</label>
  <select value={data.education[temp1]} name={i+"education"} className="form-select fw-bolder" id={i} onChange={multipleValue}>
    <option value="-" disabled="disabled" selected="selected">Select Univercity</option>
    <option value="CBSE">CBSE</option>
    <option value="GSEB">GSEB</option>
    <option value="GTU">GTU</option>
  </select>
  </div>
  <br />
  <div className="col">
  <label>Select Course</label>
  <select value={data.course[temp1]} name={i+"course"} id={i} className="form-select fw-bolder" onChange={multipleValuecourse}>
  <option value="-" disabled="disabled" selected="selected">Select Course</option>
    <option value="BTech">BTech</option>
    <option value="MCA">MCA</option>
    <option value="BCom">BCom</option>
  </select>
    </div>
  <br />
  <div className="col">
  <label>
    Passing year:
    <input
      type="date"
      name={i+"passing_Year"}
      id={i}
      className="form-control fw-bolder"
      value={data.passing_Year[temp1]}
      onChange={multipleValuepass}
    />
  </label>
  </div>
  </div>
)

temp1++;
}

// if(data.education.length > value){
//   console.log("in if demo");
//   data.education.pop();
//   data.course.pop();
//   data.passing_Year.pop();
//   }

console.log("last array",arr);
return arr;
}

  return (
    <center>
    <form>
    <div className="row g-3">
      <br />
      <div className="col">
      <button type="button" className="btn btn-primary me-md-2" onClick={()=>{setValue(value + 1)}} >
        +
      </button>
      <button type="button" className="btn btn-primary my me-md-2" onClick={minus} >
        -
      </button>
      <Val/>

      <br />
      <br />
      </div>
      </div>
      <button type="button" className="btn btn-primary me-md-2" onClick={decresstep}>
        Prev
      </button>
      <button type="button" className="btn btn-primary me-md-2" onClick={stepincrease}>
        {" "}
        Next
      </button>
    </form>
    </center>
  );
};

export default Step2;
