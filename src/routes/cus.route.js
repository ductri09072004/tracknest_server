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

router.get('/cusE', async (req, res) => {
  const { email } = req.query; // Lấy email từ query

  try {
    const customer = await Cus.findOne({ cusEmail: email }); // Tìm theo email

    if (customer) {
      return res.json({ exists: true }); // Email tồn tại
    } else {
      return res.json({ exists: false }); // Email không tồn tại
    }
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});

router.post('/cusE', async (req, res) => {
  const { cusId, name, email, phone, address, birth, cusGender } = req.body;
  console.log("Dữ liệu nhận từ frontend:", req.body);

  try {
    const existingCustomer = await Cus.findOne({ cusEmail: email });
    console.log("Kiểm tra email tồn tại:", existingCustomer);

    if (existingCustomer) {
      return res.status(409).json({ error: 'Email đã tồn tại trong hệ thống' });
    }

    const newCustomer = new Cus({
      cusId: cusId,
      cusName: name,
      cusEmail: email,
      cusPhone: phone,
      cusAddress: address,
      cusBirthday: birth,
      cusGender: cusGender,
    });
    console.log("Đối tượng mới chuẩn bị lưu:", newCustomer);
    
    await newCustomer.save();
    res.status(201).json({ message: 'Tài khoản đã được tạo thành công', customer: newCustomer });
  } catch (error) {
    console.error('Lỗi khi tạo tài khoản be:', error);
    res.status(500).json({ error: 'Lỗi khi tạo tài khoản be2' });
  }
});


module.exports = router;
