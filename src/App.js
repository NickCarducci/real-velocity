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
    /*const setting = (n, more) => {
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
    };*/
    return (
      <div
        style={{
          color: "grey",
          transition: ".3s ease-in",
          display: "flex",
          flexDirection: "column",
          justifyContent: this.props.onscroll ? "start" : "space-around",
          height: "calc(100vh - 20px)",
          fontFamily: "sans-serif",
          textAlign: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            position: "fixed",
            //alignSelf: "start",
            bottom: "3px",
            left: "5px"
          }}
        >
          <a style={{ color: "rgb(120,150,200)" }} href="https://commie.dev">
            efficiency per hour for profit should be in use value versus
            exchange
          </a>
        </div>
        <div
          style={{
            position: "fixed",
            //alignSelf: "start",
            top: "3px",
            right: "5px"
          }}
        >
          <a style={{ color: "rgb(120,150,200)" }} href="https://thetax.party">
            crowdfundingfortaxes.quora.com
            {/**"imitation socialists, raise expectations without behavior, more [less trust withou]t" edwina currie */}
          </a>
        </div>
        <div
          style={{
            position: "fixed",
            //alignSelf: "start",
            top: "3px",
            left: "5px"
          }}
        >
          /
          <a style={{ color: "rgb(120,150,200)" }} href="https://saltbank.org">
            moneyquantity
          </a>
          {/**velocity money without inflation shut uo tiik uf you wanna ay me @nickcarducci */}
        </div>
        <div
          style={{
            color: "black",
            backgroundColor: "rgb(200, 230, 240)",
            position: "relative",
            marginTop: "20px"
          }}
        >
          <br />
          Renegotiated premium vs whole price control
          <br />
          Recessions are when wages are paid{/*} (-phillips & )*/}
          <h2>
            <a href="https://marx.quora.com/What-were-Karl-Marxs-writings-1">
              What were Karl Marx's writings
            </a>
            ?
          </h2>
          <h2>
            <a href="https://www.quora.com/unanswered/Is-capital-not-debenture-trust-as-Karl-Marx-discerns">
              Is capital not debenture trust as Karl Marx discerns
            </a>
            ?
          </h2>
          <h2>
            <a href="https://www.quora.com/unanswered/Is-real-velocity-not-an-NBER-recession-with-hours-worked-notwithstanding">
              Is real velocity not an NBER recession with hours worked
              notwithstanding
            </a>
            ?
          </h2>
          <h2>
            <a href="https://www.quora.com/If-money-velocity-equals-price-and-quantity-how-are-bonds-money-or-otherwise-not-totally-inflationary">
              If money velocity equals price and quantity, how are bonds money
              or otherwise not totally inflationary
            </a>
            ?
          </h2>
          <h2>
            <a href="https://www.quora.com/Was-the-Holodomor-Great-Leap-Forward-and-Covid-expected-by-population-growth-a-lifetime-ago/answer/Nick-Carducci">
              Was the Holodomor, Great Leap Forward and Covid expected by
              population growth a lifetime ago
            </a>
            ?
          </h2>
          <h2>
            <a href="https://www.quora.com/unanswered/Is-rare-disease-and-luxury-reason-for-government-subsidy-investor-fixed-sunk-costs-notwithstanding">
              Is rare disease and luxury reason for government subsidy, investor
              fixed sunk costs notwithstanding
            </a>
            ?
          </h2>
          <h2>
            <a href="https://www.quora.com/unanswered/Is-overtime-implied-change-order-not-the-very-definition-of-fraud">
              Is overtime-implied change order not the very definition of fraud
            </a>
            ?
          </h2>
          <h2>
            <a href="https://www.quora.com/unanswered/Does-inflation-not-happen-when-bonds-are-bought-by-private-investors">
              Does inflation not happen when bonds are bought by private
              investors
            </a>
            ?
          </h2>
        </div>
      </div>
    );
  }
}

export default SaltBank;
