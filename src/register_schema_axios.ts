import fs from 'fs/promises';
import axios from 'axios';
import { host as schemaRegistryUrl, absolutePathToSchema } from './config';

async function registerSchema() {
    const topic = 'test-topic';
    console.log({
        "Schema Registry URL": schemaRegistryUrl,
        "Topic": topic,
        "Schema file": absolutePathToSchema
    });

    try {
        const schema = await fs.readFile(absolutePathToSchema, {encoding: 'utf-8'});
        const url = schemaRegistryUrl + "/subjects/" + topic + "-value/versions";
        const headers = {"Content-Type": "application/vnd.schemaregistry.v1+json"};

        const response = await axios.post(url, {schema}, {
            headers,
        });
        const {data} = response;

        console.log("Schema Registered Successfully!", data);
    } catch (error: any) {
        console.error(error);
    }
}

registerSchema();
