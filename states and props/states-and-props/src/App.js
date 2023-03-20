import {useState} from "react";
import './App.css';

function App() {
  //var studentName = "Akash";

  // const updateName = () => {
  //   //alert(studentName);
  //   setstudentName ("आकाश");
  // }

  const [studentName,setstudentName] = useState("Akash")
    
  return (
    <div>
    <h1>hello {studentName}</h1>
    <button onClick={() => setstudentName("आकाश")}>Update name</button>
    </div>
  );
}




export default App;
