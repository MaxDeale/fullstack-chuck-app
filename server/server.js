import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import path from "path";
import dotenv from "dotenv";

//simple express server using graphql
const __dirname = path.resolve();
dotenv.config();
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running....");
//   });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
