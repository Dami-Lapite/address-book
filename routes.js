module.exports = (app) => {
  var bodyParser = require("body-parser");
  var urlencodedParser = bodyParser.urlencoded({ extended: false });
  var jsonParser = bodyParser.json();
  //   const multer = require('multer');

  //   const storage = multer.diskStorage({
  //   destination(req, file, callback) {
  //     callback(null, './uploads/images');
  //   },
  //   filename(req, file, callback) {
  //     callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  //   },
  // });

  // const upload = multer({ storage });

  const fs = require("fs");
  function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        return cb && cb(err);
      }
      try {
        const object = JSON.parse(fileData);
        return cb && cb(null, object);
      } catch (err) {
        return cb && cb(err);
      }
    });
  }
  jsonReader("./contacts.json", (err, contacts) => {
    if (err) {
      console.log(err);
      return;
    }
    data = contacts.data;
  });

  app.get("/contacts/:id", (req, res) => {
    //get contacts by id
    console.log("contacts With id " + req.params.id + " Is Requested");
    res.send(data.find((contact) => contact.id === req.params.id));
  });

  app.get("/contacts", (req, res) => {
    //get all contacts
    console.log("All contacts requested");
    console.log(data);
    res.send(data);
  });

  app.delete("/contacts/:id", (req, res) => {
    //delete contacts by id
    console.log("Contact With id " + req.params.id + " is Deleted");
    const idx = data.indexOf(
      data.find((contact) => contact.id === req.params.id)
    );
    console.log(data.splice(idx, 1));
    const jsonString = '{"data":' + JSON.stringify(data) + "}";
    fs.writeFile("./contacts.json", jsonString, (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
    res.send(req.params);
  });

  app.post("/contacts", jsonParser, (req, res) => {
    //add new contacts
    console.log(req.body);
    data.push(req.body);
    const jsonString = '{"data":' + JSON.stringify(data) + "}";
    fs.writeFile("./contacts.json", jsonString, (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
    res.send(req.body);
  });

  app.post("/contacts/:id", jsonParser, (req, res) => {
    //update particular contacts
    console.log(req.body);
    const idx = data.indexOf(
      data.find((contact) => contact.id === req.body.id)
    );
    data[idx] = req.body;
    const jsonString = '{"data":' + JSON.stringify(data) + "}";
    fs.writeFile("./contacts.json", jsonString, (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
    res.send(req.body);
  });
};
