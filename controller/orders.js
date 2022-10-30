import Orders from "../models/orders"

export const createOrder = async (req, res) => {
  const {
    userId,
    items,
    userData,
  } = req.body


  await Orders.create({
    userId,
    items,
    userData,
  }).then((order) => {
    res.status(201).json(order)
  })
    .catch((err) => {
      res.status(400).json(err)
    })
}