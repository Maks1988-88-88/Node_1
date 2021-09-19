const getAll = require("./getAll");

async function listContacts() {
  try {
    const contacts = await getAll();
    console.table(contacts);
  } catch (error) {
    console.log(error);
  }
}

module.exports = listContacts;
