import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.raw(`
        CREATE TABLE IF NOT EXISTS cashier(
        id SERIAL PRIMARY KEY,
        branch_id INTEGER REFERENCES branch(id) ON DELETE CASCADE,
        name VARCHAR(20),
        password VARCHAR(255),
        role VARCHAR(50) DEFAULT 'cashier',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `);
}

export async function down(knex: Knex): Promise<void> {
  return knex.raw(`
        DROP TABLE IF EXISTS cashier;
        `);
}
