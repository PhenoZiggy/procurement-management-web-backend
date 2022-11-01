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

export const updateOrderStatus = async (req, res) => {
  const { id, status } = req.body;
  const filter = { _id: id };
  const update = {
    orderStatus: status,
  };
  await Orders.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true, // Make this update into an upsert
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json({ error: err });
    });
};

export const getAll = async (req, res) => {
  await Orders.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
