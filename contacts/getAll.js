// const contacts = require('../db/contacts.json')

// const getAll = async() => contacts;


const contactsPath = require("../path/contactsPath");
const fs = require("fs/promises");

const getAll = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};




module.exports = getAll;