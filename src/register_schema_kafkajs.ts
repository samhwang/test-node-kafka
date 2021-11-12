import {readAVSCAsync, SchemaRegistry} from "@kafkajs/confluent-schema-registry";
import { host, absolutePathToSchema } from "./config";

async function registerSchema() {
    const registry = new SchemaRegistry({ host });

    try {
        const schema = await readAVSCAsync(absolutePathToSchema);
        const data = registry.register(schema);
        console.log("Schema Registered Successfully!", data);
    } catch (error: any) {
        console.error(error);
    }
}

registerSchema();
