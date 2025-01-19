import dotenv from 'dotenv'

dotenv.config()

export default{
    host: process.env.URL_HOST || 'localhost',
    port: parseInt(process.env.URL_PORT) || 3030,
    proxy: process.env.PROXY || ''
}