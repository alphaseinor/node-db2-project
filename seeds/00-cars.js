exports.seed = function(knex, Promise) {
  return knex('cars').insert([
    {
      vin: "3VWSP69M62M118855",
      year: "2002",
      make: "vw",
      model: "Jetta",
      initial_mileage: 445555
    },
    {
      vin: "3VWSP69M72M151508",
      year: "2002",
      make: "vw",
      model: "Jetta",
      initial_mileage: 555455
    }
  ])
}