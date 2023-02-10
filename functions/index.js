import express from "express"
import cors from "cors"
import functions from "firebase-functions"
import { retrieveLetters, addLetter } from "./src/callDatabase.js"

const app = express()
app.use(express.json())
app.use(cors())


app.get("/getletters", retrieveLetters)

app.post("/addletter", addLetter)




export const api = functions.https.onRequest(app)
