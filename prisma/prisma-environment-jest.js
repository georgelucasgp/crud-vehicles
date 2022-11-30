const NodeEnvironment = require('jest-environment-node').default;
const cuid = require('cuid');
const { execSync } = require('child_process');
const { resolve } = require('path');

const prismaCli = resolve(__dirname, '..', 'node_modules', '.bin', 'prisma');

require('dotenv').config({
  path: resolve(__dirname, '..', '.env.test'),
});

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    this.schema = `code_schema_${cuid()}`;
    this.connectionString = `${process.env.DATABASE_URL}${this.schema}`;
  }

  setup() {
    process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;

    execSync(`${prismaCli} migrate dev`);
  }

  teardown() {
    // Teardown the database
  }
}

module.exports = CustomEnvironment;
