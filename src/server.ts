import { app } from './app';
import config from './config';

const start = async (): Promise<void> => {
    try {
        app.listen(config.port, () => {
            console.log(`Server started on port ${config.port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

void start();
