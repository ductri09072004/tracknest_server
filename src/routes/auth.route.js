const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios'); // Thư viện để gửi yêu cầu HTTP
const router = express.Router();

const SECRET_KEY = 'your_secret_key'; // Khóa bí mật để ký token

// Route để xử lý xác thực SSO
router.post('/sso/login', async (req, res) => {
    const { token } = req.body; // Nhận token từ client

    try {
        // Giải mã và xác thực token SSO
        const response = await axios.get(`https://sso-provider-url.com/validate?token=${token}`);
        
        if (response.data.valid) {
            // Nếu token hợp lệ, tạo token mới để sử dụng trong ứng dụng của bạn
            const userPayload = {
                id: response.data.userId, // Thay đổi theo cấu trúc payload của bạn
                name: response.data.name,
            };

            const jwtToken = jwt.sign(userPayload, SECRET_KEY, { expiresIn: '1h' }); // Tạo JWT

            // Gửi token về client
            res.json({ token: jwtToken });
        } else {
            res.status(401).json({ message: 'Token không hợp lệ' });
        }
    } catch (error) {
        console.error('Lỗi xác thực SSO:', error);
        res.status(500).json({ message: 'Có lỗi xảy ra trong quá trình xác thực' });
    }
});

module.exports = router;
