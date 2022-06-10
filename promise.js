const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const filmIXX = await promiseTheaterIXX(emosi);
    const filmVGC = await promiseTheaterVGC(emosi);
    const allFilm = [...filmIXX, ...filmVGC];

    const filterByEmosi = allFilm.filter((res) => res.hasil == emosi);

    return filterByEmosi.length;
  } catch (err) {
    console.log(`Whoops, error: ${err}`);
  }
};

module.exports = {
  promiseOutput,
};
