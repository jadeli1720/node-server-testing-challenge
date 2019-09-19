const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  return null;
}

async function update(id, changes) {
  return null;//need to implement using TDD
}

function remove(id) {
  return null;//need to implement using TDD
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return null;//need to implement using TDD
}
