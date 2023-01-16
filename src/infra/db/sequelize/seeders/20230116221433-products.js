const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize, amount = 10) => {
        const records = [];
        for (let i = 0; i < amount; i++) {
            records.push({
                name: faker.commerce.product(),
                image: faker.image.cats(),
                price: faker.datatype.number(),
                currency: faker.helpers.arrayElement(['ARG', 'COP', 'USD']),
                quantity: faker.datatype.number(),
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }
        return queryInterface.bulkInsert('products', records);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('products', null, {});
    },
};
