import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import ProjectResolver from "./resolvers/ProjectResolver";
import TaskResolver from "./resolvers/TaskResolver";

const PORT = '4000'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ProjectResolver, TaskResolver],
    emitSchemaFile: true,
  });

  const server = new GraphQLServer({
    schema,
  });

  server.start(() => console.log(`Server is running on http://localhost:${PORT}`));
}

bootstrap();
