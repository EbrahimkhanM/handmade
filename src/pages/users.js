import React from 'react'
import { getAuth } from "firebase/auth";
export default function Users() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
      console.log("===>>>users are", user);
    }
    console.log("user not found");
  return (
    <div>Users</div>
  )
}
