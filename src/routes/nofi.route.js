const express = require('express');
const Nofi = require('../controllers/nofi.controller.js');

const router = express.Router();

router.get('/Nofi', async (req, res) => {
    try {
        const questions = await Nofi.find();
        res.json(questions);
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
        res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
    }
});

router.get('/NofiS', async (req, res) => {
    const {cusId } = req.query;
  
    try {
      const filter = {};
      if (cusId) filter.cusId = cusId;
  
      const orders = await Nofi.find(filter);
      res.json(orders);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error);
      res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
    }
  });

router.post('/Nofi', async (req, res) => {
    try {
        const {
            nofiId,
            nofiTitle,
            nofiContent,
            nofiType,
            nofiTime,
            cusId,
        } = req.body;
        const newMessage = new Nofi({ 
            nofiId,
            nofiTitle,
            nofiContent,
            nofiType,
            nofiTime,
            cusId,
         });
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        console.error('Lỗi khi thêm dữ liệu:', error);
        res.status(500).json({ error: 'Lỗi khi thêm dữ liệu' });
    }
});


module.exports = router; 
