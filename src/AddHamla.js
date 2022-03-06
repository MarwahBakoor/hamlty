import React from 'react'
import { useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import './style/addHamla.css';
import Logo from './Logo';


function AddHamla() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Hname, setHname] = useState("");
  const [pass, setPass] = useState("");
  const [errorText, setErrorText] = useState("");
  const num43CollectionRef = collection(db, "hamlah");

  const addInstance = async () =>{
    await addDoc(num43CollectionRef,{Email: String(email), HamlaName:String(Hname),Password:String(pass),UserName:String(name)});
  } 



 const  formSubmite = (e) => {
    e.preventDefault()
    if(name == '' || email == '' || Hname =='' || pass ==''){
      setErrorText('اضف جميع بياناتك من فضلك')
    } else {
      addInstance()
      
    }
    
    setName("")
    setEmail("")
    setHname("")
    setPass("")
  }
  
  return (
 <div className='add-hamla'>
   
      <div className="header"> 
      <Logo />
        <div>
          تسجيل حملة جديد  
        </div>
      </div>
     <form className='add-Hamla-form' onSubmit={(e) => formSubmite(e)}>
       <div className='error-message'>{errorText}</div>
       <div className='field'>
         <label>البريد الالكتروني</label>
         <input type='text' name='Email' htmlFor ='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
       </div>
       <div className='field'>
          <label>اسم الحملة</label>
          <input type='text' name='HamlaName'  htmlFor ='hamlaName' value={Hname} onChange={(e)=> setHname(e.target.value)} />
       </div>
       <div className='field'>
          <label>اسم المستخدم</label>
          <input type='text' name='UserName'  htmlFor ='UserName' value={name} onChange={(e)=> setName(e.target.value)} />
       </div>
       <div className='field'>
          <label>كلمة المرور</label>
          <input type='password' name='Password'  htmlFor ='Password' value={pass} onChange={(e)=> setPass(e.target.value)} />
       </div>
       <div className='field'>
         <input type='submit' value='تسجيل' className='btn' />
       </div>
       
     </form>
   </div>
  );
}

export default AddHamla;