const db = require('../models')

// model
const Category = db.category

// functions

//1. Add Category

const addCategory = async (req, res) => {



    let data = {
        category_name: req.body.category_name,
        category_description: req.body.category_description
    }

    const category = await Category.create(data)
    res.status(200).send(category)

}
 
// 2. Get All Category

const getAllCategory = async (req, res) => {

    // const categories = await Category.findAll({})
    // res.status(200).send(categories)

    try {
        const categories = await Category.findAll({});
        res.status(200).send(categories);
    } catch (error) {
        console.error("Error fetching category:", error);
        res.status(500).send("Internal server error");
    }
}

// 3. update category

const updateCategory = async (req, res) => {

    let id = req.params.category_id

    const category = await Category.update(req.body, { where: { category_id: id } })

    res.status(200).send(category)

}
// 4. delete category by id

const deleteCategory = async (req, res) => {

    let id = req.params.category_id

    await Category.destroy({ where: { category_id: id } })

    res.status(200).send('Category is deleted !')

}


//5. getDishesByCategory
 

module.exports = {
    addCategory,
    getAllCategory,
    updateCategory,
    deleteCategory, 
}