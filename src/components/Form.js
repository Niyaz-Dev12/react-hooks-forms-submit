import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);
  const [error,setError]=useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    if(firstName){
    const formData={firstName: firstName,
                    lastName: lastName};
    //props.sendFormDataSomewhere(formData);
    const dataArray=[...submittedData,formData]
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");}
    else {
      setError(["first name is required"]);
    }
  }

  const listSubmissions=submittedData.map((data,index)=>{
    return <div key={index} >
      {data.firstName} {data.lastName}
    </div>
  })

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {error.length>0? error.map((err,index)=>(
      <p key={index} style={{color: "red"}}>{err}</p>
    )): null}
    <h3>Submissions</h3>
     {listSubmissions}
    </div>
  );
}

export default Form;
