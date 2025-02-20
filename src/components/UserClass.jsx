import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Niketan Moon",
        location: "Adelaide",
        avatar_url: "niketanmoon",
      },
    };
  }
  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/niketanmoon");
    // const json = await data.json();
    // this.setState({
    //   userInfo: json,
    // });
  }
  componentDidUpdate() {}

  componentWillUnmount() {}
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <img src={avatar_url} alt="avatar" />
      </div>
    );
  }
}

export default UserClass;
