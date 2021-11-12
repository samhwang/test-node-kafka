import path from 'path';

export const host = "localhost:8081";

const schemaFile = 'sam.avsc';
export const absolutePathToSchema = path.join(__dirname, schemaFile);

