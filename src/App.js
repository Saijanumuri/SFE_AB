import React,{useState} from "react";

function App() {
  const [eu,setEu]=useState("");
  return (
    <div>
      <label for="region">Region: </label>
      <select id="region" onChange={(e)=>setEu(e.target.value)} >
        <option value="">select region</option>
        <option value="EU">EU</option>
        <option value="NA">NA</option>
        <option value="FE">FE</option>
      </select>
      <br/>
      <label for="country">Country: </label>
      {eu=="EU"&&
      <select id="country">
        <option>AE</option>
        <option>AT</option>
        <option>LU</option>
        <option>LV</option>
      </select>
      }
      <label for="FeedID">FeedID: </label>
      <input className="FeedID" id="FeedID" name="FeedID" /><br/><br/>
      <label for="cd">CD: </label>
      <input className="cd" id="cd" name="cd" /><br/><br/>
      <label for="ap">AP: </label>
      <input className="ap" id="ap" name="ap" /><br/><br/>
      <label for="sp">SP: </label>
      <input className="sp" id="sp" name="sp" /><br/><br/>
      <label for="fp">CD: </label>
      <input className="fp" id="fp" name="fp" />
      
      
    </div>

  );
}

export default App;
