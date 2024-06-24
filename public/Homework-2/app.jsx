// import React from "react";
// import Propis from "../public/Homework-2/Propis";
// import Input from "../public/Homework-2/Input";

export default function App() {
  return (
    <>
      <div>
        <form>
          <Input id="fname" type="text" placeholder="FisrtName: "/>
          <br></br>
          
          <Input id="lname" type="text" placeholder="LastName: "/>
          <br></br>
          
          <Input id="email" type="email" placeholder="email: "/>
          <br></br>
          
          <Input id="pasword" type="password" placeholder="Password: "/>
        </form>
      </div>
      <Propis />
    </>
  );
}
