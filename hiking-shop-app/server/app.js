const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/img/");
  },
  filename: function (req, file, cb) {
    return cb(null, Date.now() + path.extname(file.originalname));
  }
});

let upload = multer({
  storage
});

const app = express();

const proizvodi = [
  {
    id: 0,
    name: "Boots",
    price: 24000,
    img: "/img/boots.jpg",
    desc: "Info about boots...",
    category: "boots, man",
    qty: 3
  },
  {
    id: 1,
    name: "Gloves",
    price: 3000,
    img: "/img/gloves.jpg",
    desc: "Info about gloves...",
    category: "Gloves, unisex",
    qty: 8
  },
  {
    id: 2,
    name: "Jacket",
    price: 20000,
    img: "/img/jackets.jpg",
    desc: "Info about jacket...",
    category: "jacket, man",
    qty: 4
  },
  {
    id: 3,
    name: "Pants",
    price: 12000,
    img: "/img/pants.jpg",
    desc: "Info about pants...",
    category: "hiking, man",
    qty: 4
  }
];

app.use(cors());

app.use(express.json({ limit: "100mb" }));

// Parsing and decoding middlewares
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.json(proizvodi);
});

// get
app.get("/:id", (req, res) => {
  let id = req.params.id;

  let proizvod = proizvodi.filter((p) => {
    if (p.id === Number(id)) {
      console.log(p);
      return p;
    } else {
      return null;
    }
  });

  res.json(proizvod);
});

//
const saveBase64ToFile = (base64String, filePath) => {
  return new Promise((resolve, reject) => {
    // Decode Base64 string into binary data (buffer)
    const buffer = Buffer.from(base64String, "base64");

    // Write buffer to the specified file path
    fs.writeFile(filePath, buffer, (err) => {
      resolve();
    });
  });
};

// post or add new product
app.post("/add", upload.single("file"), async (req, res) => {
  newId = proizvodi.length != 0 ? proizvodi[proizvodi.length - 1].id + 1 : 0;

  const payload = req.body;
  const fileNameWithExtension = path.basename(payload.img);

  let proizvod = {
    id: newId,
    name: payload.name,
    price: Number(payload.price),
    img: `/img/${fileNameWithExtension}`,
    desc: payload.desc,
    category: payload.category,
    qty: Number(payload.qty)
  };

  // convert file to base64
  await saveBase64ToFile(
    req.body.base64String,
    `./public/img/${fileNameWithExtension}`
  );

  proizvodi.push(proizvod);

  res.json(proizvod);
});

// put or edit
app.put("/edit/:id", (req, res) => {
  let id = req.params.id;
  console.log("****************");
  console.log(req.body);
  console.log("****************");

  let proizvod = {};

  proizvodi.forEach((p, idx) => {
    if (p.id === Number(id)) {
      proizvod.name = req.body.name;
      proizvod.price = Number(req.price);
      proizvod.desc = req.body.desc;
      proizvod.category = req.body.category;
      proizvod.qty = Number(req.body.qty);

      proizvodi[idx].name = req.body.name;
      proizvodi[idx].price = Number(req.body.price);
      proizvodi[idx].desc = req.body.desc;
      proizvodi[idx].category = req.body.category;
      proizvodi[idx].qty = Number(req.body.qty);
    }
  });

  res.json({
    id,
    name: req.body.name,
    price: Number(req.body.price),
    desc: req.body.desc,
    category: req.body.category,
    qty: Number(req.body.qty)
  });
});

// delete
app.delete("/delete/:id", (req, res) => {
  // let pro = proizvodi.find(element => {
  //     element.id == req.params.id;
  // });
  try {
    fs.unlink(`public/${proizvodi[req.params.id].img}`, (c) => {});
    res.json(proizvodi.splice(req.params.id, 1));
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000, () => {
  console.log("Sever is listening on port 3000...");
});
