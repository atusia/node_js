const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize('shop', 'root', 'rootroot', {
            host: 'localhost',
            dialect: 'mysql'
        });

        let models = {};

        function getModels() {
            fs.readdir(path.join(process.cwd(), 'dataBase', 'models'), (err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    models[modelName] = client.import(path.join(process.cwd(), 'dataBase', 'models', modelName));
                })
            })
        }

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }

            return instance;
        }
    }
})();
