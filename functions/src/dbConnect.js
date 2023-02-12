import { MongoClient } from "mongodb";
import { service_acccount } from "../CONNECT.js";

export default function dbConnect() {
    const client = new MongoClient(service_acccount)
    const db = client.db("affirmation-db")
    return db
}

