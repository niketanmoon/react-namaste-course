import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "container" },
//   "Hello Everyone!"
// );
const heading2 = (
  <h1 id="container" key="h1">
    Namaste React
  </h1>
);

const Title = () => {
  return <h1 id="title">Hello Title</h1>;
};
const HeaderComponent = () => {
  return (
    <header>
      {/* {Title()} */}
      <Title />
      <h1>Header</h1>
    </header>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
