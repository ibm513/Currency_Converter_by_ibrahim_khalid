
#! /usr/bin/env node

import inquirer from "inquirer";
let x: number;
let y: number;
let z: number;

let from_currency = await inquirer.prompt([
  {
    type: "list",
    name: "input_fromcurrency",
    message: "Please enter the currency from which you want to convert",
    choices: [
      { name: "USD", value: 1 },
      { name: "PKR", value: 280 },
      { name: "AUD", value: 1.54 },
      { name: "Candian Dollar", value: 1.37 },
      { name: "Chinese Yuan", value: 7.25 },
      { name: "EURO", value: 0.94 },
      { name: "INR", value: 83.33 },
      { name: "Qatri Riyal", value: 3.64 },
      { name: "Saudi Riyal", value: 3.75 },
      { name: "Dirham", value: 3.67 },
      { name: "Pound Sterling", value: 0.8 },
      { name: "Russian Ruble", value: 93.77 },
    ],
  },

  {
    type: "number",
    name: "input_amount",
    message: "Please enter the amount",
  },
]);

let to_currency = await inquirer.prompt([
  {
    type: "list",
    name: "input_tocurrency",
    message: "Please enter the currency in which you want to convert",
    choices: [
      { name: "USD", value: { c_name: "USD", value_1: 1 } },
      { name: "PKR", value: { c_name: "PKR", value_1: 280 } },
      { name: "AUD", value: { c_name: "AUD", value_1: 1.54 } },
      {
        name: "Candian Dollar",
        value: { c_name: "Candian Dollar", value_1: 1.34 },
      },
      {
        name: "Chinese Yuan",
        value: { c_name: "Chinese Yuan", value_1: 7.25 },
      },
      { name: "EURO", value: { c_name: "EURO", value_1: 0.94 } },
      { name: "INR", value: { c_name: "INR", value_1: 83.33 } },
      { name: "Qatri Riyal", value: { c_name: "Qatri Riyal", value_1: 3.64 } },
      { name: "Saudi Riyal", value: { c_name: "Saudi Riyal", value_1: 3.75 } },
      { name: "Dirham", value: { c_name: "Dirham", value_1: 3.67 } },
      {
        name: "Pound Sterling",
        value: { c_name: "Pound Sterling", value_1: 0.8 },
      },
      {
        name: "Russian Ruble",
        value: { c_name: "Russian Ruble", value_1: 93.77 },
      },
    ],
  },
]);

x = from_currency.input_fromcurrency;
y = from_currency.input_amount;
z = to_currency.input_tocurrency.value_1;

function currency_converter() {
  let a;
  a = (z / x) * y;
  console.log(`${a} ${to_currency.input_tocurrency.c_name}`);
}

currency_converter();
