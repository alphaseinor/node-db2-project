module.exports = {
  development: {
    client:'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './dealer/car-dealer.db3'
    },
    migrations: {
      filename: './dealer/migrations'
    },
    seeds: {
      filename: './data/seeds'
    }
  }
}