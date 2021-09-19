const { v4 } = require("uuid");
const fs = require("fs/promises");
// const contacts = require("../db/contacts.json");
const contactsPath = require("../path/contactsPath");
const getAll = require("./getAll");

const add = async (name, email, phone) => {
  try {
    const contacts = await getAll();
    const newContact = { name, email, phone, id: v4() };
    contacts.push(newContact);
    console.log("++", contactsPath);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    console.table(contacts);
    //   return newProduct;
  } catch (error) {
    console.log(error);
  }
};

module.exports = add;
