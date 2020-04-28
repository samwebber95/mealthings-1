const { query } = require("../index");

const fs = require("fs");
const { promisify } = require("util");
const path = require("path");
const readFile = promisify(fs.readFile);

async function populateRecipes() {
  const json = await readFile(path.join(__dirname, ".", "./MOCKRECIPES.json"));
  const data = JSON.parse(json);
  const res = await Promise.all(
    data.map(
      async ({
        name,
        ingredients,
        calories,
        protein,
        carbohydrates,
        fat,
        saturates,
        sugars,
        salt,
        fibre,
        cooking_difficulty,
        cooking_time_mins,
        method,
        url,
        ingredientsQuantities,
      }) => {
        const res = await query(
          `INSERT INTO recipes (
              name,
              ingredients,
              calories,
              protein,
              carbohydrates,
              fat,
              saturates,
              sugars,
              salt,
              fibre,
              cooking_difficulty,
              cooking_time_mins,
              method,
              url,
              ingredientsQuantities
                     ) VALUES (
                       $1,
                       $2,
                       $3,
                       $4,
                       $5,
                       $6,
                       $7,
                       $8,
                       $9,
                       $10,
                       $11,
                       $12, 
                       $13,
                       $14,
                       $15
                     ) RETURNING *`,
          [
            name,
            ingredients,
            calories,
            protein,
            carbohydrates,
            fat,
            saturates,
            sugars,
            salt,
            fibre,
            cooking_difficulty,
            cooking_time_mins,
            method,
            url,
            ingredientsQuantities,
          ]
        );
        return res.rows[0];
      }
    )
  );
  console.log(res);
}

populateRecipes();
