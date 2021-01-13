import graphql from "graphql";
import axios from "axios";

//importing and destructuring necessary graphql types
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = graphql;

//the joke category type has one field (category) which is a string

const JokeCategoryType = new GraphQLObjectType({
  name: "JokeCategory",
  fields: () => ({
    category: { type: GraphQLString },
  }),
});

//the random joke type has 3 fields, the id and value swhich are strings, and the category of custom category type

const RandomJokeType = new GraphQLObjectType({
  name: "RandomJoke",
  fields: () => ({
    id: { type: GraphQLString },
    value: { type: GraphQLString },
    category: { type: JokeCategoryType },
  }),
});

//root query has 2 main queries, one for fetching all categories as category types
//and one for fetching a random joke with a category as an argument

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //get all categories query

    getCategories: {
      type: new GraphQLList(JokeCategoryType),
      resolve(parent, args) {
        return axios
          .get("https://api.chucknorris.io/jokes/categories")
          .then((res) => res.data);
      },
    },

    //get random joke query

    randomJokeByCategory: {
      type: RandomJokeType,
      args: {
        category: { type: GraphQLString },
      },
      resolve(parent, args) {
        // const category = "food";
        return axios
          .get(
            `https://api.chucknorris.io/jokes/random?category=${args.category}`
          )
          .then((res) => res.data);
      },
    },
  },
});

//exporting schema with queries

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
