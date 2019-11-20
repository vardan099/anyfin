const CountriesService = require('../services/CountriesService');
const Fixer = require('fixer-node');
const fixer = new Fixer('65a46a3c3c9c4a87ab07b6a72500b80d');


class CountriesController {

    async getCountriesByName(req, res, next) {
        try {
            const { name } = req.params;
            let newCountries = [];
            const countries = await CountriesService.findByName(name);
            if(countries.length > 0 ){
                let currencies = 'SEK';
                countries.forEach(country => {
                    country.currencies.forEach(currency=>{
                        currencies+=", "+currency.code;
                    })
                });
                const latest = await fixer.latest({ symbols: currencies });
                const rates = JSON.parse(JSON.stringify(latest.rates));
                countries.forEach(country => {
                    let exchange = [];
                    country.currencies.forEach(currency=>{
                        const {code} = currency;
                        const rateExchange = (rates[code] / rates["SEK"]).toFixed(2);
                        if(!isNaN(rateExchange)){
                            exchange.push({code:code,exchange:rateExchange})
                        }
                    });
                    country.exchange = exchange;
                    newCountries.push(country)
                });
            }
            res.status(200).json(newCountries);
        } catch (error) {
            console.log('Get Countries Error: ', error);
            res.status(error.status ? error.status : 500).send({message: error.message});
        }
    };
}

module.exports = new CountriesController();