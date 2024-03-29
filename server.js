const express = require('express');
const app = express();
const cors = require('cors')
const { GoogleGenerativeAI } = require("@google/generative-ai");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(3000);
const API_KEY = 'AIzaSyAXPLnnVA_zdEeCEbNOfXoqGs6zvXjj3Oo';
const genAI = new GoogleGenerativeAI(API_KEY);


app.post('/recieve', async (req, res) => {

    console.log(req.body);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = (`Remember you are a investment planner to me you will just give information about investment plannings. 
    you dont listen to anything which is not related to investment planning. if my whole prompt is not related to investment just say sorry i am investment planner. 
    my prompt is: I am ${req.body.age} years old salaried person, who earns ${req.body.salary} every month. I have${req.body.kids} children.
   I have expenses of ${req.body.expenses} per month. After spending all expenses i will save around ${req.body.investment} rupees per month.
    And I can tolerate ${req.body.risk} risk.
   Instead of wasting these money, I want to invest them in multiple categories to get profit, so split my ${req.body.investment} for all categories.
    Please Provide the investment plans and their profit through interest over a period of time. ${req.body.additionalInformation}. 
    `);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.send(text)

})
//And give proper visualization for each investment category and investment amount in each catergory
//donot take any propmts which are not related to investments like codes or donot give any information other than investment planning
//if this  : ${req.body.additionalInformation} - is not related to investment planning then donot consider this in the prompt. even if i ask you other content which is not related to investment planning, dont give reply to that.