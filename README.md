# Test Node Avro

Repo to test and validate avro files using `@kafkajs/confluent-schema-registry` for [issue#169](https://github.com/kafkajs/confluent-schema-registry/issues/169)

## Reproduction steps.

```shell
git clone https://github.com/samhwang/test-node-kafka.git
cd test-node-kafka
npm install
docker-compose up -d

# Register schema using an API call
npx ts-node src/register_schema_axios.ts

# Register schema using KafkaJS Confluent Schema Registry
npx ts-node src/register_schema_kafkajs.ts
```
