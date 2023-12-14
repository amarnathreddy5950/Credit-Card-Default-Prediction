const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const sagemaker = new AWS.SageMakerRuntime();

let lateFunction = (val) =>{
    if(val == 0 || val == -1){
        let pay = {
        "1": -1,
        "2": -1,
        "3": -1,
        "4": -1,
        "5": -1,
        "6": -1
        }
        return pay
    }
    let pay = {
        "one": 0,
        "two": 0,
        "three": 0,
        "four": 0,
        "five": 0,
        "six": 0
    }
    for(let i = 0; i < val; i++){
        if(i % 6 == 0){
            pay.one += 1
        } else if (i % 6 == 1){
            pay.two += 1
        } else if (i % 6 == 2){
            pay.three += 1
        } else if (i % 6 == 3){
            pay.four += 1
        } else if (i % 6 == 4){
            pay.five += 1
        } else if (i % 6 == 5){
            pay.six += 1
        }
        
    }
    return pay
}

let eduFunction = (edu) => {
    let ret ='0,0,0,0,0,0,0'
    if(edu == "Graduate School"){
        return '1,0,0,0,0,0,0'
    } else if (edu == 'University'){
        return '0,1,0,0,0,0,0'
    } else if (edu == 'High School'){
        return'0,0,1,0,0,0,0'
    } else if (edu == 'Other'){
        return '0,0,0,1,0,0,0'
    }
    return ret;
}

let genderFunction = (gender) =>{
    if(gender == "male"){
        return "1"
    } else {
        return "2"
    }
}

exports.handler = async (event, context) => {
    try {

        let edu = eduFunction(event.education);
        let late = lateFunction(event.late)
        
        let eventData = event
        delete eventData.education;
        const csvData = eventData.amt + "," + genderFunction(eventData.gender) + ',' + eventData.marriage +
        "," + eventData.age + "," + late.one + "," + late.two + ","  + 
        late.three + "," + late.four + "," + late.five + "," +  late.six + "," +
        eventData.bill1 + "," + eventData.bill2 + "," + eventData.bill3 + "," +
        eventData.bill4 + "," + eventData.bill5 + "," + eventData.bill6 + "," +
        eventData.pay1 + "," + eventData.pay2 + "," + eventData.pay3 + "," +
        eventData.pay4 + "," + eventData.pay5 + "," + eventData.pay6 + "," + edu
        
        console.log(csvData)
        // Specify the SageMaker endpoint name
        const endpointName = 'sagemaker-xgboost-2023-12-10-18-32-16-392';

        // Invoke the SageMaker endpoint
        const params = {
            EndpointName: endpointName,
            Body: csvData,
            ContentType: 'text/csv', // SageMaker endpoint expects CSV data
        };

        const result = await sagemaker.invokeEndpoint(params).promise();
        console.log(result)
        // Process the result as needed
        const responseBody = {
            result: JSON.parse(result.Body.toString('utf-8')),
        };


    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true, // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify(responseBody),
    };

    return response

    } catch (error) {
        // Handle errors and return an appropriate response
        console.error('Error:', error);
        const response = {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
        return response;
    };
}