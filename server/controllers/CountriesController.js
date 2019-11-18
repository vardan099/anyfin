const CountriesService = require('../services/CountriesService');


class CountriesController {
    constructor(...args) {
        this.args = args;
    }

    async getCountriesByName(req, res, next) {
        try {
            const { name } = req.params;
            const countries = await CountriesService.findByName(name);
            res.status(200).json(countries);
        } catch (error) {
            console.log('Get Tags Error: ', error);
            res.status(error.status ? error.status : 500).send({message: error.message});
        }
    };
}

module.exports = new CountriesController();