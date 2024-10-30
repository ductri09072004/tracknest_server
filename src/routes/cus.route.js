const express = require('express');
const Cus = require('../controllers/cus.controller.js'); // Import model đúng cách

const router = express.Router();
router.use(express.json());

router.get('/cus', async (req, res) => {
  const { id } = req.query; // Lấy Status_ID từ query

  try {
    const status = await Cus.findOne({ cusId: id });

    if (!status) {
      return res.status(404).json({ error: 'Trạng thái không tồn tại' });
    }
    res.json(status); 
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});

module.exports = router;
