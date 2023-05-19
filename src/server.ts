import cors from "@fastify/cors"
import jwt from "@fastify/jwt"
import "dotenv/config"
import fastify from "fastify"
import { authRoutes } from "./routes/auth"
import { memoriesRoutes } from "./routes/memories"

const app = fastify()

app.register(authRoutes)
app.register(memoriesRoutes)
app.register(cors, { origin: "http://localhost:3000" })
app.register(jwt, { secret: "XHtFvME1exKt7Z1Cbvzb4a+NreYSFuS7WHl2oZ9+qjI=" })

app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("🚀 HTTP server running on http://localhost:3333")
})
