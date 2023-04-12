import React, { useEffect } from "react";
import { getAuth, sendEmailVerification } from "firebase/auth";

const Verify = ()=>{
  const auth = getAuth();
  const user = auth.currentUser
  console.log(user);
sendEmailVerification(user)
  .then(() => {
    // Email verification sent!
    // ...
  }).catch((err)=>{
    console.log("verifacation err",err)
  })
  return(
    <>
    <div>verify your email</div>
    </>
  )
}
 
 export default Verify 
