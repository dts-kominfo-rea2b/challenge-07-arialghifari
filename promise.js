const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
let penontonMarah = 0;
let penontonTidakMarah = 0;

const promiseOutput = async (emosi) => {
  const dataTheaterIXX = await promiseTheaterIXX(emosi);
  const dataTheaterVGC = await promiseTheaterVGC(emosi);

  if (emosi == "marah") {
    dataTheaterIXX.map((films) => films.hasil == "marah" ? penontonMarah++ : "");
    dataTheaterVGC.map((films) => films.hasil == "marah" ? penontonMarah++ : "");

    return penontonMarah;
  } else {
    dataTheaterIXX.map((films) => films.hasil == "tidak marah" ? penontonTidakMarah++ : "");
    dataTheaterVGC.map((films) => films.hasil == "tidak marah" ? penontonTidakMarah++ : "");

    return penontonTidakMarah;
  }
};

module.exports = {
  promiseOutput,
};
