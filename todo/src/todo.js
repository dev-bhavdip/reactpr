import React, { useState } from "react";
import logomain from "./logo512.png";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [Todo, setTodo] = useState("Add Todo");
  const [Items, setItems] = useState([]);
  const [Toggle,setToogle]=useState(true);
  const [Itemid,setItemId]=useState(null);

  const removeall = ()=>{
    setItems([]);
    setInputData("");
    setTodo("Add Todo");
    setToogle(true);
    setItemId(null);
}

  const addItem = () => {

    if (!inputData) {
    }
    else if(inputData && !Toggle){

        console.log("in else if",inputData);
      const daata=   Items.map((cur) => {
            console.log(cur.key === Itemid);
            if(cur.key === Itemid){
                return {...cur,name:inputData};
                }
                console.log("data",cur);
                return cur;
        }) 
        console.log("out",daata);
        setItems(daata);
        setToogle(true);
        setInputData("")
        setTodo("Add Data");
    }
    else{
        console.log("in if");
        const data={key:new Date().getTime().toString(), name:inputData};
        localStorage.setItem('item',data.name,'key',data.key);
          console.log("item local storage",localStorage.getItem('item'));
      setItems([...Items, data]);
      setInputData("");
      setTodo("Add Data");

    }
  };

    const deleteitem = (ind)=>{
        const updateddata= Items.filter((elem,id)=>{
        return  id !== ind;
        })
        setItems(updateddata);
        }
      

const editTodo = (index)=>{
const editdata=Items.find((cur)=>{
return index === cur.key 
})
console.log("after",editdata);
setInputData(editdata.name);
setItemId(editdata.key);
setTodo("Edit data");
setToogle(false);

  }

  return (
    <>
    <center>
      <div className="main-class">
        <div className="inner-class">
          <img src={logomain} alt="image logo" height="50px" width="50px"></img>
          <p> Enter Your Todos </p>
        </div>
       
        <div>
          <input type="text"onChange={(e) => setInputData(e.target.value)} value={inputData}
          ></input>
          <br/>
          <br/>
          <button className="add-btn" onClick={addItem}>
            {Todo}
          </button>
          <button className="remove-btn" onClick={removeall}>
            Remove All
          </button>
          <br/>
          <br/>
        </div>
        <div>
        <div>
            {Items?.map((cur,)=>{
                return (<div key={cur.key}><label>{cur.name}</label> &nbsp;&nbsp;&nbsp; <button className="rmv-btn" onClick={()=>deleteitem(cur.key)}> -</button> &nbsp;&nbsp;&nbsp; <button className="rmv-btn" onClick={()=>{editTodo(cur.key)}}> Edit</button> <br /></div>)
            })}
        </div>
        </div>
      </div>
      </center>
    </>
  );
};

export default Todo;
