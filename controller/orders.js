import Orders from '../models/orders';

export const createOrder = async (req, res) => {
  const { userId, items, userData } = req.body;

  await Orders.create({
    userId,
    items,
    userData,
  })
    .then((order) => {
      res.status(201).json(order);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

export const retrieveUserOrders = async (req, res) => {
  const userId = req.userId;
  const filter = { userId: userId };
  await Orders.find(filter)
    .then((response) => {
      res.status(200).json({ response });
    })
    .catch((error) => {
      res.status(401).json({ message: 'Something went wrong', error: error });
    });
};
