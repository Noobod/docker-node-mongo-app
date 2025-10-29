const express = require("express");
const app = express();
const path = require("path");
const { MongoClient } = require("mongodb");

const PORT = 3030;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const MONGO_URL = "mongodb://delta_admin:delta_password@mongo-db:27017";
const client = new MongoClient(MONGO_URL);

// GET all users
app.get("/getUsers", async (req, res) => {
    await client.connect();
    console.log('Connected successfully to MongoDB');

    const db = client.db("my-sample-db");
    const data = await db.collection("users").find({}).toArray();

    await client.close();
    res.json(data);
});

// POST new user
app.post("/addUser", async (req, res) => {
    const userObj = req.body;
    await client.connect();
    console.log('Connected successfully to MongoDB');

    const db = client.db("my-sample-db");
    const result = await db.collection("users").insertOne(userObj);

    await client.close();
    res.json({ message: "User added successfully", result });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
