import { resgisterController } from "../controllers/resgister.js";

export async function routesUser(fastify) {
    fastify.post('/', resgisterController)
}