import cors from "@fastify/cors"
import fastify from "fastify"
import { memoriesRoutes } from "./routes/memories"

const app = fastify()

app.register(memoriesRoutes)
app.register(cors, { origin: "http://localhost:3000" })

app.listen({ port: 3333 }).then(() => {
  console.log("🚀 HTTP server running on http://localhost:3333")
})
