import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import dotenv from "dotenv";

//simple express server using graphql
dotenv.config();
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
