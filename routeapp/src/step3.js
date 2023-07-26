import { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Router, Routes } from "react-router-dom";


const Step3 = ({ handleChange, data, decresstep, stepincrease , handleCheckbox,setData }) => {
  const [checkedState, setCheckedState] = useState();
 
const handleSubcheckbox = (event)=>{
  let ev=event.target.checked
  console.log("checked",ev);
  const ischecked = event.target.checked;
  if(ischecked){
    setData(data=>({...data,sub_Language:[...data.sub_Language,event.target.value]}));
  }
  else{
      const index=data.sub_Language.indexOf(event.target.value);
      data.sub_Language.splice(index,1);
    setData(data=>({...data,sub_Language:[...data.sub_Language]}));
  }
}
const handleExpertize = (event) =>{
let ev=event.target.checked;
let id=event.target.id;
let value=event.target.value;
// console.log("demo",ev,"id",id);

data.lang_expertize.splice(id, 1, value);
setData(data => ({...data,lang_expertize:data.lang_expertize}))
console.log("lang",data.lang_expertize);
}

  return (
    <center>
    <form>
      <br />
      <label className="fw-bolder form-check"> Select Language</label>
      <input type="checkbox"  className="form-check-input me-md-2" value="Gujarati" name="language" onChange={handleCheckbox} />Gujarati <br />&nbsp; &nbsp; 

      <input type="checkbox"  className="form-check-input me-md-2" value="Gujarati_Read"  name={"language1"} onChange={handleSubcheckbox} />read &nbsp; &nbsp;
      <input type="checkbox"  className="form-check-input me-md-2" value="Gujarati_Write" name={"language1"} onChange={handleSubcheckbox} />Write &nbsp; &nbsp;
      <input type="checkbox"  className="form-check-input me-md-2" value="Gujarati_Speak" name={"language1"} onChange={handleSubcheckbox} />Speak &nbsp; &nbsp;  

      <br/>
      <br/>

      <input type="radio" id={0} className="form-check-input me-md-2" value="Gujarati_beginner"  name={"languagelevel1"} onChange={handleExpertize} />beginner &nbsp; &nbsp;
      <input type="radio" id={0} className="form-check-input me-md-2" value="Gujarati_Mideator" name={"languagelevel1"} onChange={handleExpertize} />Mideator &nbsp; &nbsp;
      <input type="radio" id={0} className="form-check-input me-md-2" value="Gujarati_Expert" name={"languagelevel1"} onChange={handleExpertize} />Expert &nbsp; &nbsp;  
      <br/>
      <br/>

      <input type="checkbox"  className="form-check-input me-md-2" value="Hindi" name="language" onChange={handleCheckbox} />Hindi <br /> &nbsp; &nbsp;

      <input type="checkbox"  className="form-check-input me-md-2" value="Hindi_Read"  name={"language1"} onChange={handleSubcheckbox} />read &nbsp; &nbsp;
      <input type="checkbox"  className="form-check-input me-md-2" value="Hindi_Write" name={"language1"} onChange={handleSubcheckbox} />Write &nbsp; &nbsp;
      <input type="checkbox"  className="form-check-input me-md-2" value="Hindi_Speak" name={"language1"} onChange={handleSubcheckbox} />Speak &nbsp; &nbsp;  
      <br/>
      <br/>

      <input type="radio" id={1} className="form-check-input me-md-2" value="Hindi_beginner"  name={"languagelevel2"} onChange={handleExpertize} />beginner &nbsp; &nbsp;
      <input type="radio" id={1} className="form-check-input me-md-2" value="Hindi_Mideator" name={"languagelevel2"} onChange={handleExpertize} />Mideator &nbsp; &nbsp;
      <input type="radio" id={1} className="form-check-input me-md-2" value="Hindi_Expert" name={"languagelevel2"} onChange={handleExpertize} />Expert &nbsp; &nbsp;  
      <br/>
      <br/>


      <input type="checkbox"  className="form-check-input me-md-2" value="English" name="language" onChange={handleCheckbox} />English <br /> &nbsp; &nbsp;

      <input type="checkbox"  className="form-check-input me-md-2" value="English_Read"  name={"language1"} onChange={handleSubcheckbox} />read &nbsp; &nbsp;
      <input type="checkbox"  className="form-check-input me-md-2" value="English_Write" name={"language1"} onChange={handleSubcheckbox} />Write &nbsp; &nbsp;
      <input type="checkbox"  className="form-check-input me-md-2" value="English_Speak" name={"language1"} onChange={handleSubcheckbox} />Speak &nbsp; &nbsp;  

      <br />
      <br />

      <input type="radio" id={2} className="form-check-input me-md-2" value="English_beginner"  name={"languagelevel3"} onChange={handleExpertize} />beginner &nbsp; &nbsp;
      <input type="radio" id={2} className="form-check-input me-md-2" value="English_Mideator" name={"languagelevel3"} onChange={handleExpertize} />Mideator &nbsp; &nbsp;
      <input type="radio" id={2} className="form-check-input me-md-2" value="English_Expert" name={"languagelevel3"} onChange={handleExpertize} />Expert &nbsp; &nbsp;  
      <br/>
      <br/>

      <br />

      <button type="button" className="btn btn-primary me-md-2" onClick={decresstep}>
        Prev
      </button>
      <button type="button"  className="btn btn-primary me-md-2" onClick={stepincrease}> 
        {/* <Link className="btn-primary "  to="/about" onClick={stepincrease}> */}
                      Submit 
      {/* </Link> */}
      </button>
      {/* <button type="button" className="btn btn-primary me-md-2" onClick={stepincrease}> */}
        {/* {" "}
        Next
      </button> */}
    </form>
    </center>
  );
};

export default Step3;
