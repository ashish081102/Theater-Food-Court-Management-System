const db = require("../models");
// report 1 - jan - 2024, 29 - jan, 19 fab, 4 - march, 18 march
// image Upload
const multer = require("multer");
const path = require("path");

// create main Model
const Dishes = db.dishes;

const Category = db.category;
// main work

// 1. create dishes

const addDish = async (req, res) => {
  // console.log("====================================================================");
  // console.log("File Here ............. ",req.file)
  // console.log("====================================================================");
  const category_id = await getCategoryByName(req.body.category_name);

  let info = {
    dish_image: `http://localhost:8080/${req.file.path}`,
    dish_name: req.body.dish_name,
    dish_price: req.body.dish_price,
    category_id: category_id,
    dish_description: req.body.dish_description,
  };
  // console.log(info);
  const dishes = await Dishes.create(info);
  res.status(200).send(dishes);
};

//get category id by name
const getCategoryByName = async (category_name) => {
  // console.log(category_name);
  const category = await Category.findOne({
    where: { category_name: category_name },
  });

  return category.category_id;
};

// 2. get all dishes

const getAllDishes = async (req, res) => {
  try {
    const dishes = await Dishes.findAll({
      include: [Category],
    });
    res.status(200).send(dishes);
  } catch (error) {
    console.error("Error fetching dishes:", error);
    res.status(500).send("Internal server error");
  }
};

// 3. get single dish

const getOneDish = async (req, res) => {
  let id = req.params.id;
  let dishes = await Dishes.findOne({ where: { dish_id: id } });
  res.status(200).send(dishes);
};

// 4. update dishes

const updateDishes = async (req, res) => {
  let id = req.params.id;

  const dishes = await Dishes.update(req.body, { where: { dish_id: id } });

  res.status(200).send(dishes);
};

// 5. delete dish by id

const deleteDish = async (req, res) => {
  let id = req.params.id;

  await Dishes.destroy({ where: { dish_id: id } });

  res.status(200).send(" Dishes is deleted !");
};

// 6. connect one to many relation Product and Reviews

const getDishesByCategory = async (req, res) => {
  const id = req.params.category_id;

  const data = await Dishes.findOne({
    include: [
      {
        model: categoryModel,
        as: "category",
      },
    ],
    where: { category_id: id },
  });

  res.status(200).send(data);
};

// 8. Upload Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

module.exports = {
  addDish,
  getAllDishes,
  getOneDish,
  updateDishes,
  deleteDish,
  getDishesByCategory,
  upload,
};
