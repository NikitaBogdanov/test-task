## 1. Simple REST API in NodeJS, that calculates monthly rate

To start server, you can run in the project directory:

### `npm start getMonthlyRate`

and send request to http://localhost:2800/calculate
 with fields (for example):  
 {  
    "interestRate": 30,  
    "downPayment": 20,  
    "monthNum": 6,  
    "finalPayment": 5  
 }  
 where finalPayment is optional
 
 ## 2, 3. Calculate net price and custom flat methods
 For the two remaining tasks - the result can be viewed in tables in html files 
 in customFlat and getNetPrice folders (it is calculated data from the code), 
 results are also displayed in the browser console