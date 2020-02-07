exports.seed = function(knex, Promise) {
  return knex('car_visit').insert([
    {
      title_status: "salvage",
      miles: "445555",
      engine: "TDI",
      transmission: "5MT",
      cars_id: 1
    },
    {
      title_status: "clean",
      miles: "555455",
      engine: "TDI",
      transmission: "5MT",
      cars_id: 2
    }
  ])
}