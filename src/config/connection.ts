import { Sequelize } from 'sequelize';

import { config } from './config';

const db = new Sequelize();

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
    }
);

export { sequelize };
