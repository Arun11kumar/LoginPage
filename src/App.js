
import './App.css';
import {useState }from "react";
import axios from "axios";

function App() {
const [name ,setName] = useState(" ");
const [email ,setEmail] = useState(" ");
const [phone ,setPhone] = useState(" ");

const handleSubmit=()=>{
  if(name.length===0){
    alert("Name has left blank")
  }else if(email.length===0){
    alert("Email has not Valid")
  }else if(phone.length===0  ||phone.length >=12){
    alert("Phone No has Valid")
  }else{
    const url ="https://localhost/RegistrationForm/enquiry.php";
    let fData =new FormData()
    fData.append("name",name)
    fData.append("email",email)
    fData.append("phone",phone)

    axios.post(url,fData)
    .then(Response=>alert(Response.data))
    .catch(error=>alert(error));

    console.log(Response.fData)
  }
}
  return (
   <>
      <div className="container">
       <div className='login'><h2 >**LOGIN**</h2></div>
       <label htmlFor="name">Name</label>
       <input type="text"  name='name' id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
       <label htmlFor="email">Email</label>
       <input type="text"  name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <label htmlFor="phone">Phone No</label>
       <input type="text"  name='phone' id='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
       <input type="button"  name='send' id='send' value="SEND" onClick={handleSubmit} />

      </div>
   </>
  );
}

export default App;
