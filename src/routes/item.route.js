const express = require('express');
const Item = require('../controllers/item.controller.js'); 

const router = express.Router();

router.use(express.json()); 

router.get('/item', async (req, res) => {
  const { status } = req.query; 

  try {
    const orders = await Item.find(status ? { Order_ID: status } : {});  
    res.json(orders);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});


router.post('/item', async (req, res) => {
  try {
    const {
        Item_ID,
        Item_Name,
        Item_Weight,
        Item_AllValue,
        Order_ID
    } = req.body;

    const newOrder = new Item({
        Item_ID,
        Item_Name,
        Item_Weight,
        Item_AllValue,
        Order_ID
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Lỗi khi thêm dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi thêm dữ liệu' });
  }
});


module.exports = router; 
