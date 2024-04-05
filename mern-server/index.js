const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});



const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://book-store:2kPoAGKJAaWpMX6c@cluster0.idjacao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const bookCollections = client.db("BookInventory").collection("books");

    app.post("/upload-book",async(req,res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

// displaying details

    app.get("/all-books",async(req,res) => {
      const books = bookCollections.find();
      const result = await books.toArray();
      res.send(result);
    });

// updating details

    app.patch("/book/:id",async(req,res) => {
      const id = req.params.id;
      // console.log(id);
      const updateBookData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const updateDoc = {
        $set:{
          ...updateBookData
        }
      }
      const result = await bookCollections.updateOne(filter, updateDoc, options);
      res.send(result);
    });

// deleting

    app.delete("/book/:id",async(req,res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    });

// category finding

    app.get("/all-books", async(req,res) => {
      let query = {};
      if(req.query?.category){
        query = {category: req.query.category};
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    });

// single book data

    app.get("/book/:id",async(req,res) => {
      const id = req.params.id;
      const filter = {_id:new ObjectId(id)};
      const result = await bookCollections.findOne(filter);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
