import graphql from "graphql";
import axios from "axios";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = graphql;

const JokeCategoryType = new GraphQLObjectType({
  name: "JokeCategory",
  fields: () => ({
    category: { type: GraphQLString },
  }),
});

const RandomJokeType = new GraphQLObjectType({
  name: "RandomJoke",
  fields: () => ({
    id: { type: GraphQLString },
    value: { type: GraphQLString },
    category: { type: JokeCategoryType },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getCategories: {
      type: new GraphQLList(JokeCategoryType),
      resolve(parent, args) {
        return axios
          .get("https://api.chucknorris.io/jokes/categories")
          .then((res) => res.data);
      },
    },

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

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
