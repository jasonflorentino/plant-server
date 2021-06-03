const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const FILE_PATH = "./data/plants.json";
const DATE_RE = /^[12]\d{3}\-(0+[1-9]|1[012])\-(0+[1-9]|[12][0-9]|3[01])$/ // YYYY-MM-DD

module.exports = {
  getAll,
  getById,
  createPlant,
  deletePlant,
  editPlant,
  waterPlant,
};

async function getAll() {
  const data = readFile();
  return data;
}

async function getById(id) {
  if (!id) throw `You must provide an id.`;

  const data = readFile();
  const plant = data.find(plant => plant.id === id);
  if (!plant) throw new Error(`Could not find plant with ID: ${id}`);

  return plant;
}

async function createPlant(plant) {
  if (!plant.name) {
    throw `You must provide a name.`;
  }
  if (!plant.type) {
    throw `You must provide a type.`;
  }
  if (!plant.water_frequency) {
    throw `You must provide a water_frequency for the number of days.`;
  }
  if (!plant.image_url) {
    throw `You must provide an image_url for the image of this plant.`;
  }
  if (plant.last_watered && !DATE_RE.test(plant.last_watered)) {
    throw `If providing a last_watered date, please use the format YYYY-MM-DD.`;
  }

  const newPlant = {
    "id": uuidv4(),
    "name": plant.name,
    "type": plant.type,
    "water_frequency": plant.water_frequency,
    "image_url": plant.image_url,
    "last_watered": getEpochTime(plant.last_watered) || 0
  }

  const data = readFile();
  data.push(newPlant);
  writeFile(data);
  return newPlant;
}

async function deletePlant(id) {
  if (!id) throw `You must provide an id.`;

  const data = readFile();
  const updatedData = data.filter(plant => plant.id !== id);

  if (data.length === updatedData.length) {
    throw new Error(`Could not delete item with ID: ${id}`);
  }

  writeFile(updatedData);
  return updatedData.length;
}

async function editPlant(id, body) {

  if (body.last_watered && !DATE_RE.test(body.last_watered)) {
    throw `If providing a last_watered date, please use the format YYYY-MM-DD.`;
  }

  const data = readFile();
  const plant = data.find(plant => plant.id === id);

  if (!plant) throw new Error(`Could not find a plant with ID: ${id}`);

  plant.name = body.name || plant.name;
  plant.type = body.type || plant.type;
  plant.water_frequency = body.water_frequency || plant.water_frequency;
  plant.image_url = body.image_url || plant.image_url;
  plant.last_watered = getEpochTime(body.last_watered) || plant.last_watered;

  writeFile(data);
  return plant;
}

async function waterPlant(id) {
  if (!id) throw `You must provide an id.`;

  const data = readFile();
  const plantToWater = data.find(plant => plant.id === id);
  if (!plantToWater) throw new Error(`Could not find plant with ID: ${id}`);

  plantToWater.last_watered = Date.now();
  writeFile(data);
  return plantToWater;
}

/**
 * Helper Functions
 */

function readFile() {
  return JSON.parse(fs.readFileSync(FILE_PATH));
}

function writeFile(data) {
  return fs.writeFileSync(FILE_PATH, JSON.stringify(data));
}

function getEpochTime(time) {
  return new Date(time + "T00:00:00").getTime();
}