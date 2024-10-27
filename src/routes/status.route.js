const express = require('express');
const DeliveryStatus = require('../controllers/status.controller.js'); // Import model đúng cách

const router = express.Router();
router.use(express.json());

router.get('/status', async (req, res) => {
  const { id } = req.query; // Lấy Status_ID từ query

  try {
    // Tìm trạng thái theo Status_ID
    const status = await DeliveryStatus.find();

    if (!status) {
      return res.status(404).json({ error: 'Trạng thái không tồn tại' });
    }

    res.json(status); // Trả về thông tin trạng thái dưới dạng JSON
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});

module.exports = router; // Xuất router
