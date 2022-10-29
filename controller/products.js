import Products from "../models/products"

export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getProductById = async (req, res) => {
  const { id } = req.params
  try {
    const product = await Products.findById(id)
    res.status(200).json(product)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const reduceProductStock = async (req, res) => {
  const { id, amount } = req.params
  try {
    const product = await Products.findById(id)
    product.stock = product.stock - amount


    Products.findByIdAndUpdate(id, product, { new: true }, (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!")
      }
      console.log(doc)
    })


    res.status(200).json(product)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}