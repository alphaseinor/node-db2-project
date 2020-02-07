
exports.up = function(knex) {
  return ( knex.schema
    //EndPoint
    .createTable('cars', (tbl) => {
      tbl.increments()
      tbl.timestamps()
      tbl
        .string("vin", 17)
        .notNullable()
        .unique()
      tbl
        .string("year")
        .notNullable()
      tbl
        .string("make")
        .notNullable()
      tbl
        .string("model")
        .notNullable()
      tbl
        .float('initial_mileage')
        .notNullable()
    })
    //has foreign for car_table
    .createTable('car_visit', (tbl) => {
      tbl.increments()
      tbl.timestamps()
      tbl.string("title_status")
      tbl.string("miles")
      tbl.string("engine")
      tbl.string("transmission")
      tbl.integer('cars_id')
        .unsigned()
        .notNullable()
        .references('cars.id')
    })
  )
};

exports.down = function(knex) {
  return ( knex.schema
    .dropTableIfExists('car_visit')
    .dropTableIfExists('cars')
  )
};
