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

const workWithcontacts = async (type = "getAll", id, data) => {
  try {
    switch (type) {
      case "getAll":
        return await contactsOperations.getAll();
      case "getById":
        return await contactsOperations.getById(id);
      case "add":
        return await contactsOperations.add(data);
      case "removeById":
        return await contactsOperations.removeById(id);
    }
  } catch (error) {
    throw new error;
  }
};

// workWithcontacts("getAll")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const id = 10

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

    workWithcontacts("removeById", id)
    .then(data => console.log(data))
    .catch(error => console.log(error));