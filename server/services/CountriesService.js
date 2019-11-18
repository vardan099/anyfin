let _ = require('lodash');
let request = require('request');

class CountriesService {

    constructor() {
        this.apiHost = 'https://restcountries.eu';
    }

    findByName(countryName) {
        let options = {
            url: this.apiHost + `/rest/v2/name/${countryName}`
        };

        return this._performAsyncRequest(options);
    }

    _performAsyncRequest(opt) {
        return new Promise((resolve, reject) => {
            request.get(opt, (err, resp, body) => {
                if (err) {
                    reject(err);
                } else {
                    let response = JSON.parse(body);
                    resolve(response);
                }
            });
        });
    }
}

module.exports = new CountriesService();