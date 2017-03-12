const Axios = require('axios');

let connectionDetails = {
    hostUrl: 'http://api.openweathermap.org/data/2.5/weather?',
    appID : '4e29094094e006be5d4f8226d2400b1b',
    unitStyle: 'imperial',
    baseUrl: null,
    setBaseUrl: function () {
        this.baseUrl = `${this.hostUrl}&appid=${this.appID}&units=${this.unitStyle}`;
        return  this.baseUrl !== null;
    }
};

connectionDetails.setBaseUrl();

function callSuccessHandler(res) {
    //debugger
    if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
    }
    return res.data.main.temp;
}

function callFailureHandler(res) {
    throw new Error(res);
}

module.exports = {
  getTemp: function(city) {
    let encodedLocation = encodeURIComponent(city);
    let requestUrl = `${connectionDetails.baseUrl}&q=${encodedLocation}`;
    console.log(`Request URL was: ${requestUrl}`);
    return Axios.get(requestUrl).then(callSuccessHandler, callFailureHandler);
  }
};