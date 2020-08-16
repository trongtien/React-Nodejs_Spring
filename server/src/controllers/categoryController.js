const { categoryService } = require('./../services/index')


let getAllCategory = async (request, response) => {
    try {
        let category = await categoryService.getCategory()
        console.log('cate', category)
        return response.status(200).json({ status: 200, message: "create new user successfully", data: category })
    } catch (error) {
        return response.status(400).json({ status: 400, message: error })
    }
}


module.exports = {
    getAllCategory: getAllCategory
}