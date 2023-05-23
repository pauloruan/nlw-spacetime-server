import cors from "@fastify/cors"
import jwt from "@fastify/jwt"
import multipart from "@fastify/multipart"
import "dotenv/config"
import fastify from "fastify"
import { resolve } from "path"
import { authRoutes } from "./routes/auth"
import { memoriesRoutes } from "./routes/memories"
import { uploadRoutes } from "./routes/upload"

const app = fastify()

app.register(multipart)
app.register(cors, { origin: "http://localhost:3000" })
app.register(jwt, { secret: "XHtFvME1exKt7Z1Cbvzb4a+NreYSFuS7WHl2oZ9+qjI=" })
app.register(require("@fastify/static"), {
  root: resolve(__dirname, "../uploads"),
  prefix: "/uploads"
})

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("🚀 HTTP server running on http://localhost:3333")
})
