import React, { useEffect, useState } from "react";
import axios from "axios";
import image from "./time-investment-Recovered.png";
import Test from "./test";
import { Outlet, Link } from "react-router-dom";

function Form() {
  const [resFromAxios, setResFromAxios] = useState([
    "Hello Buddy!, Welcome to investment planner. Please Fill the above form to get investment plans based on your salary and investment Amount. Feel free to ask investment plans 😃.",
  ]);

  const [data, setData] = useState({
    salary: 0,
    expenses: 0,
    investment: 0,
    age: 0,
    kids: 0,
    risk: "Select",
    additionalInformation: "",
  });

  const inputDetails = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const [question, setQuestion] = useState("");
  const questionPrompt = `Salary : ${data.salary}, Expenses : ${data.expenses}, Investment : ${data.investment}, Risk : ${data.risk} `;
  const formDetails = (e) => {
    e.preventDefault();
    console.log("Data:", data);
    setQuestion(questionPrompt);
    axios.post("http://localhost:3000/recieve", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        //for storing previous responses
        //setResFromAxios([...resFromAxios,...res.data.split("\n")]), console.log(res);
        //for not storing previous responses
        setResFromAxios(res.data.split("\n"));
      });
  };

  return (
    <>
      <div className="title">
        <h1
          style={{
            fontFamily: "Anditha",
            padding: "1rem",
            // textDecorationLine: "underline",
            // textDecorationColor: "pink",
          }}
        >
          INVESTMENT <span>PLANNER</span>
        </h1>
      </div>
      <div className="container">
        <div className="left">
          <img
            src={image}
            alt="did you get the image"
            style={{ height: "500px" }}
          />
        </div>

        <div className="right">
          <form className="form" onSubmit={formDetails}>
            <label>Enter your salary : </label>
            <br></br>
            <input
              className="inputbox"
              type="number"
              name="salary"
              // value={data.salary}
              onChange={inputDetails}
              placeholder="Eg : 10000"
              required
            />
            <br></br>

            <label>Monthly Expenses : </label>
            <br></br>
            
            <input
              className="inputbox"
              type="number"
              name="expenses"
              // value={data.expenses}
              onChange={inputDetails}
              placeholder="Eg : 5000"
              required
              
            />
            <br></br>

            <label>Investment Amount : </label>
            <br></br>
            <input
              className="inputbox"
              type="number"
              name="investment"
              // value={data.investment}
              onChange={inputDetails}
              placeholder="Eg : 5000"
              required
            />
            <br></br>

            <label>Enter your Age : </label>
            <br></br>
            <input
              className="inputbox"
              type="number"
              name="age"
              // value={data.salary}
              onChange={inputDetails}
              placeholder="Eg : 25"
              required
            />
            <br></br>
            <label>Number of children : </label>
            <br></br>
            <input
              className="inputbox"
              type="number"
              name="kids"
              // value={data.salary}
              onChange={inputDetails}
              placeholder="Eg : 1"
              required
            />
            <br></br>
            <label>Risk Tolerance : </label>
            <br></br>
            <select
              className="selectbox"
              // id="riskTolerance"
              name="risk"
              value={data.risk}
              onChange={inputDetails}
              required
            >
              <option value="Select">Select</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <br></br>

            <label>Please specify, if you want to mention anything</label>
            <br></br>
            <textarea
              rows="4"
              cols="35"
              style={{
                fontSize: "1rem",
                resize: "none",
                backgroundColor: "black",
                borderRadius: "10px",
                padding: "7px",
                border: "black",
                marginTop: "15px",
                marginBottom: "15px",
              }}
              name="additionalInformation"
              placeholder="Enter here"
              onChange={inputDetails}
            ></textarea>
            <br></br>
            <button type="submit">Generate</button>
          </form>
        </div>

        <div className="response-container">
          {resFromAxios.map((val) => {
            return val.includes("**") ? (
              <b style={{color:'#3bb273'}}>{val.replaceAll("**", "")}</b>
            ) : (
              <p>{val}</p>
            );
          })}
        </div>
      </div>


    </>
  );
}

export default Form;
