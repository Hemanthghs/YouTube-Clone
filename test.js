const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://d7sms.p.rapidapi.com/verify/v1/otp/send-otp',
  headers: {
    'content-type': 'application/json',
    Token: 'undefined',
    'X-RapidAPI-Key': '341191dd06msha5a6744c36ad7afp19501bjsn1787843ae336',
    'X-RapidAPI-Host': 'd7sms.p.rapidapi.com'
  },
  data: '{"originator":"SignOTP","recipient":"+971509752555","content":"Greetings from D7 API, your mobile verification code is: {}","expiry":"600","data_coding":"text"}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});