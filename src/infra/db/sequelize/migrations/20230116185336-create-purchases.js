'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('purchases', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            productId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'products',
                    key: 'id',
                },
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            total_amount: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            currency: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updateAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
};
