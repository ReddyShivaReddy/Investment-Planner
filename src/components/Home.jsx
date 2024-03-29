import React from "react";

function Home(props) {
  console.log(props.value)
  return (
    
    <div className="home-container" >
      <div>
        {/* <h3 style={{ color: "#b95820", fontFamily:"Anditha"}}>Faster And Simpler</h3> */}
        <p style={{ textAlign: "center", padding:'20px'}}>
          At Finplan, we believe in turning your dreams into reality through
          meticulous financial planning. Our team of dedicated financial
          advisors is here to guide you on your journey towards financial
          success. At Finplan, we believe in turning your dreams into reality
          through meticulous financial planning. Our team of dedicated financial
          advisors is here to guide you on your journey towards financial
          success.
        </p>
      </div>
      <h1>
        Why Choose Finplan<span>?</span>
      </h1>
      <div className="details">
        <div className="left1">
          <h3>Expert Financial Planning</h3>
          <p>
            Contact our experienced financial planners to create a customized
            roadmap for your financial future. We understand that everyone`s
            goals are unique, and our plans are tailored to suit your individual
            needs.
          </p>
        </div>
        <div className="right1">
          <h3>Financial Analysis</h3>
          <p>
            Gain insight into your current financial standing with our in-depth
            analysis. We assess your assets, liabilities, income, and expenses
            to create a comprehensive financial picture, laying the foundation
            for a detailed financial plan.
          </p>
        </div>
        <div className="left2">
          <h3>Personalized Guidance</h3>
          <p>
            Our team of skilled financial advisors is committed to providing you
            with personalized guidance every step of the way. Whether you are
            planning for a major life event, retirement, or wealth accumulation,
            we cover every aspect.
          </p>
        </div>
        <div className="right2">
          <h3>Personalized Guidance</h3>
          <p>
            Our team of skilled financial advisors is committed to providing you
            with personalized guidance every step of the way. Whether you are
            planning for a major life event, retirement, or wealth accumulation,
            we cover every aspect.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
