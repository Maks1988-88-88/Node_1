// const contacts = require("../db/contacts.json");
const getAll = require('./getAll')

const getById = async(id) => {
    const contacts = await getAll();
    const contact = contacts.find((item) => String(item.id) === String(id));
    if(!contact) {
        return null;
    }
    console.table(contact);
    return contact;
}

module.exports = getById;