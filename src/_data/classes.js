const fs = require(`fs`);
const path = require(`path`);

module.exports = async () => {
  const result = [];
  const files = await fs.promises.readdir(path.join(__dirname, `../game-data/classes`));
  for (const file of files) {
    const data = await fs.promises.readFile(path.join(__dirname, `../game-data/classes/${file}`), {
      encoding: `utf8`,
    });
    const mcClass = JSON.parse(data);
    mcClass.date = new Date(); // each pagination object needs a date
    result.push(mcClass);
  }
  return result;
};
