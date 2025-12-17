import React,{useState} from "react";

function App() {
  const [eu,setEu]=useState("");
  return (
    
    <div style={{margin:"30px",padding:"30px"}}>
      
      <div>
      <label for="region">Region: </label>
      <input id="region" /><br/>
      <label for="country">Country Code: </label>
      <input id="country" /><br/>
      <label for="partner">Partner Name: </label>
      <input id="partner" /><br/>
      {/* <select id="region" onChange={(e)=>setEu(e.target.value)} >
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
      } */}
      <label for="FeedID">FeedID: </label>
      <input className="FeedID" id="FeedID" name="FeedID" style={{width:"250px"}} /><br/>
      <label for="cd">CD: </label>
      <input className="cd" id="cd" name="cd" /><br/>
      <label for="ap">AP: </label>
      <input className="ap" id="ap" name="ap" /><br/>
      <label for="sp">SP: </label>
      <input className="sp" id="sp" name="sp" /><br/>
      <label for="fp">CD: </label>
      <input className="fp" id="fp" name="fp" />
      
      </div>
    </div>

  );
}

export default App;
