import app from "./config/app.js";
import env from "./env/env.js";


app.listen({
    host: '0.0.0.0',
    port: 3030

}).then(() => console.log(`Server running ${env.proxy}${env.host}:${env.port}`)).catch