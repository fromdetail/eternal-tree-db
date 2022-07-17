const fs = require(`fs`);
const path = require(`path`);

module.exports = async () => {
  const result = [];
  const files = await fs.promises.readdir(path.join(__dirname, `../game-data/characters`));
  for (const file of files) {
    const data = await fs.promises.readFile(
      path.join(__dirname, `../game-data/characters/${file}`),
      { encoding: `utf8` }
    );
    const character = JSON.parse(data)
    console.log(character.skins[0])
    character.date = new Date(); // each pagination object needs a date
    result.push(character);
  }
  return result;
};