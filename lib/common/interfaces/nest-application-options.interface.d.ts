import { HttpsOptions } from './external/https-options.interface';
import { NestApplicationContextOptions } from './nest-application-context-options.interface';
export interface NestApplicationOptions extends NestApplicationContextOptions {
    cors?: boolean;
    bodyParser?: boolean;
    httpsOptions?: HttpsOptions;
}