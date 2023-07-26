// import logo from './logo.svg';
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contacts";
import { HomeContent } from "./Home";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./step3";
import { Link } from "react-router-dom";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
></link>;

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://reqres.in/api/users?page=2", true);
// xhr.onload = function(){
//     console.log(xhr.responseText);
// };
// xhr.send();

const LastStep =  ({ data, decresstep }) => {
  return (
    <>
      <center>
        <br />
        <label className="fw-bold">First Name = { data.fname}</label>
        <br />
        <label className="fw-bold">Last Name = { data.lname}</label>
        <br />
        <label className="fw-bold">SurName = { data.sname}</label>
        <br />
        <label className="fw-bold">education = { data.education}</label>
        <br />
        <label className="fw-bold">course = { data.course}</label>
        <br />
        <label className="fw-bold">passing_Year = { data.passing_Year}</label>
        <br />
        <label className="fw-bold">language = { data.language}</label>
        <br />
        <label className="fw-bold">sub_Language = { data.sub_Language}</label>
        <br />
        <label className="fw-bold">
          Language Expertize = { data.lang_expertize}
        </label>
        <br />
        <br />
        {/* <button onClick={decresstep} className="btn btn-primary me-md-2">
          {" "}
          <Link className="btn-primary " to="/">
            Prev
          </Link>
        </button> */}
      </center>
    </>
  );
};

function App() {
  const [step, setStep] = useState(1);
  
  const [value, setValue] = useState(0)

  const [data, setData] = useState({
    fname: "",
    lname: "",
    sname: "",
    education: [],
    course: [],
    passing_Year: [],
    language: [],
    sub_Language: [],
    lang_expertize: [],
  });
  const handleChange = (event) => {
    console.log("cll");
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => {
      return { ...data, [name]: value };
    });
  };
  const handleCheckbox = (event) => {
    const ischecked = event.target.checked;
    if (ischecked) {
      setData((data) => ({
        ...data,
        language: [...data.language, event.target.value],
      }));
    } else {
      const index = data.language.indexOf(event.target.value);
      data.language.splice(index, 1);
      setData((data) => ({ ...data, language: [...data.language] }));
    }
  };




  const stepincrease = (event) => {
    setStep(step + 1);
  };
  const decresstep = (event) => {
    setStep(step - 1);
  };

  <div className="App" id="main-wrapper">
    <Routes>
      <Route path="/*" element={<Home />} />
      {/* <Route  path="/"  element={ <HomeContent/> } /> */}
      <Route path="/about" element={<LastStep />} />
      {/* <Route path='/about/contact_us' element={<Contact />} /> */}
      {/* <Route path="/contact" element={ <Contact/> } /> */}
      {/* <Route path='/about/form' element={<About />} /> */}
    </Routes>
  </div>;

  switch (step) {
    case 1:
      return (
        <>
          <Step1
            handleChange={(e) => handleChange(e)}
            data={data}
            stepincrease={stepincrease}
          />{" "}
          <br />{" "}
          <center>
            {" "}
            <span className="font-monospace">Step 1 of 3</span>
          </center>
        </>
      );
    case 2:
      return (
        <>
          <Step2
            handleChange={(e) => handleChange(e)}
            data={data}
            setData={setData}
            decresstep={decresstep}
            stepincrease={stepincrease}
            setValue={setValue}
            value={value}
          />{" "}
          <br />{" "}
          <center>
            {" "}
            <span className="font-monospace">Step 2 of 3</span>
          </center>
        </>
      );
    case 3:
      return (
        <>
          <Step3 handleChange={(e) => handleChange(e)}data={data}decresstep={decresstep}stepincrease={stepincrease}handleCheckbox={handleCheckbox}setData={setData}
          />
          <br />{" "}
          <center>
            <span className="font-monospace">Step 3 of 3</span>
          </center>
        </>
      );
    case 4:
      return <LastStep data={data} decresstep={decresstep} />;
    default:
      break;
  }
}

export default App;
