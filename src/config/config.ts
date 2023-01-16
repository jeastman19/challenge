require('dotenv').config();

import { Dialect } from 'sequelize';

interface SequelizeConfig {
    dialect: Dialect;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    define: {
        timestamps: false;
    };
}

export const config: SequelizeConfig = {
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'secret',
    database: process.env.DB_DATABASE_NAME || 'database',
    define: {
        timestamps: false,
    },
};
