const { query } = require("../index");

async function createFoodIntake() {
  const res = await query(`CREATE TABLE IF NOT EXISTS food_intake (
      meal_id SERIAL PRIMARY KEY,
      meal_date_time TIMESTAMP, 
      confirmed_eaten BOOLEAN,
      additional_preferences TEXT
  )`);
  console.log(res);
}

module.exports = { createFoodIntake };