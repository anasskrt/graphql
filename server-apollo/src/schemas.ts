import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";
import { userResolvers } from "./users/resolver";
import { songResolvers } from "./songs/resolver";
import { genreResolvers } from "./genres/resolver";

const types = ["users", "songs", "genres"];

export const typeDefs = types.map((type) =>
  gql(
    readFileSync(path.resolve(__dirname, `./${type}/schema.graphql`), {
      encoding: "utf-8",
    })
  )
);

export const resolvers = [userResolvers, songResolvers, genreResolvers];
