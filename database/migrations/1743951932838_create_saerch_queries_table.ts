import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'saerch_queries'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.float('price_min')
      table.float('price_max')

      table.integer('location_id')

      table.timestamp('refreshed_at')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
