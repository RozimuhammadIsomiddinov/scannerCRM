import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.raw(`
        CREATE TABLE IF NOT EXISTS debt(
        id SERIAL PRIMARY KEY,
        item_barcode VARCHAR(50),
        quantity INTEGER DEFAULT 1,
        customer_id INTEGER REFERENCES customer(id),
        amount NUMERIC(15,2),
        description VARCHAR(255),
        debt_amount NUMERIC(15,2),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
        );
        `);
}

export async function down(knex: Knex): Promise<void> {
  return knex.raw(`
        DROP TABLE IF EXISTS debt;
        `);
}
