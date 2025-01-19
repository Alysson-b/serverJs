import fastify from "fastify";
import { routesUser } from "../http/routes/routes-user.js";

const app = fastify()
app.register(routesUser)

export default app