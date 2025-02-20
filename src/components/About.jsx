import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }
  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <UserClass
          name={"Niketan (class)"}
          location={"Adelaide class"}
          contact={"niketanmoon"}
        />
      </div>
    );
  }
}
// const About = () => (
//   <div>
//     <h1>About Us Page</h1>
//     {/* <User
//       name={"Niketan (function)"}
//       location={"Adelaide function"}
//       contact={"niketanmoon"}
//     /> */}
//     <UserClass
//       name={"Niketan (class)"}
//       location={"Adelaide class"}
//       contact={"niketanmoon"}
//     />
//   </div>
// );
export default About;
