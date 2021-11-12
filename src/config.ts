import path from 'path';

export const host = "http://localhost:8081";

const schemaFile = 'sam.avsc';
export const absolutePathToSchema = path.join(__dirname, schemaFile);

