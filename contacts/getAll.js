const contacts = require('../db/contacts.json')

const getAll = async() => contacts;

module.exports = getAll;