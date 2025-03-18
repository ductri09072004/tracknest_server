import { database } from "../data/firebaseConfig.js";

// Lấy danh sách tất cả requests từ Firebase
export const getRequests = async (req, res) => {
  try {
    const snapshot = await database.ref("Account").once("value");

    if (!snapshot.exists()) {
      return res.status(404).json({ error: "Không có dữ liệu" });
    }

    res.json(snapshot.val());
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    res.status(500).json({ error: "Lỗi server" });
  }
};

// Thêm tài khoản mới vào Firebase
export const addRequest = async (req, res) => {
  try {
    const { date_buy, email, type_id, user_id } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!date_buy || !email || !type_id || !user_id) {
      return res.status(400).json({ error: "Thiếu thông tin tài khoản" });
    }

    const newRequestRef = database.ref("Account").push();
    await newRequestRef.set({ date_buy, email, type_id, user_id });

    res.status(201).json({ message: "Thêm thành công", id: newRequestRef.key });
  } catch (error) {
    console.error("Lỗi khi thêm:", error);
    res.status(500).json({ error: "Lỗi server" });
  }
};

// Xóa tài khoản
export const deleteRequest = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Thiếu ID" });
    }

    const requestRef = database.ref(`Account/${id}`);
    const snapshot = await requestRef.once("value");

    if (!snapshot.exists()) {
      return res.status(404).json({ error: "Không tìm thấy tài khoản" });
    }

    await requestRef.remove();
    res.status(200).json({ message: "Xóa thành công" });
  } catch (error) {
    console.error("Lỗi khi xóa:", error);
    res.status(500).json({ error: "Lỗi server" });
  }
};

// Cập nhật tài khoản
export const updateRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    if (!id) {
      return res.status(400).json({ error: "Thiếu ID" });
    }

    const requestRef = database.ref(`Account/${id}`);
    const snapshot = await requestRef.once("value");

    if (!snapshot.exists()) {
      return res.status(404).json({ error: "Không tìm thấy tài khoản" });
    }

    await requestRef.update(updatedData);
    res.status(200).json({ message: "Cập nhật thành công" });
  } catch (error) {
    console.error("Lỗi khi cập nhật:", error);
    res.status(500).json({ error: "Lỗi server" });
  }
};
