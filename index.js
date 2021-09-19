// const fs = require('fs');

// fs.readFile("files/read.txt", 'utf-8', (error, data)=> {
//     console.log(error);
//     console.log(data);

// });

// =============================

// const fs = require('fs/promises');

// const fileOperation = async(filePath, type = 'read', data = '') => {
//     switch (type) {
//         case 'read':
//             return await fs.readFile(filePath, "utf-8");
//         case 'add':
//             return await fs.appendFile(filePath, data);
//         default:
//             return 'Unknown command'
//     }
// }

// fileOperation("files/read.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//   fileOperation("files/read.txt", 'add', ' student')
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

const contactsOperations = require('./contacts');

const { Command } = require("commander");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const workWithcontacts = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        return await contactsOperations.listContacts();
      case "get":
        return await contactsOperations.getById(id);
      case "add":
        return await contactsOperations.add(name, email, phone);
      case "remove":
        return await contactsOperations.removeById(id);
    }
  } catch (error) {
    throw new error();
  }
};

// workWithcontacts("getAll")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const id = 10

// workWithcontacts("getById", id)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

  // const newContact = {
  //   name: "Tsopa Max",
  //   email: "max@max.com",
  //   phone: "(804) 555-777",
  // };

  // workWithcontacts("add", "", newContact)
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error));

    // workWithcontacts("removeById", id)
    // .then(data => console.log(data))
    // .catch(error => console.log(error));

    workWithcontacts(argv);
