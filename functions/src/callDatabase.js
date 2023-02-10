import dbConnect from "./dbConnect.js"

export async function retrieveLetters(req,res){
        //console.log("RETREIVE LET")
        const db = dbConnect()
        const letters = await db.collection("letters").find({}).toArray()
        res.send(letters)
}
export async function addLetter(req,res){
        const db = dbConnect()
        await db.collection("letters").insertOne(req.body)
       //console.log(req.body)
        res.send({message: "Letter sent!"})
}