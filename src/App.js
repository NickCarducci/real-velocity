import React from "react";

class SaltBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //const {} = this.state;
    //console.log(this.state.username);
    //const space = " ";
    const setting = (n, more) => {
      return {
        style: {
          color: this.state["hoverin" + n] ? "rgb(50,70,90)" : "black",
          cursor: "pointer",
          ...more
        },
        onMouseEnter: () => this.setState({ ["hoverin" + n]: true }),
        onMouseLeave: () => this.setState({ ["hoverin" + n]: false })
      };
    };
    const setting2 = (n, more) => {
      return {
        style: {
          color: this.state["hoverin" + n]
            ? "rgb(80,100,120)"
            : "rgb(50,70,90)",
          cursor: "pointer",
          ...more
        },
        onMouseEnter: () => this.setState({ ["hoverin" + n]: true }),
        onMouseLeave: () => this.setState({ ["hoverin" + n]: false })
      };
    };
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "calc(100vh - 20px)",
          fontFamily: "sans-serif",
          textAlign: "center",
          alignItems: "center",
          backgroundColor: "rgb(200, 230, 240)"
        }}
      >
        <h2>
          <a href="https://marx.quora.com/What-were-Karl-Marxs-writings-1">
            What were Karl Marx's writings?
          </a>
        </h2>
      </div>
    );
  }
}

export default SaltBank;
