import { database } from "../data/firebaseConfig.js";

// Lấy danh sách requests theo danh mục từ Firebase
export const getRequests = async (req, res) => {
  try {
    const { id } = req.params; // Lấy danh mục từ URL
    if (!id) {
      return res.status(400).json({ error: "Thiếu danh mục cần truy vấn" });
    }

    const requestRef = database.ref(`Language/${id}`);
    const snapshot = await requestRef.once("value");

    if (!snapshot.exists()) {
      return res.status(404).json({ error: `Không có dữ liệu cho danh mục ${id}` });
    }

    res.json({ [id]: snapshot.val() });
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    res.status(500).json({ error: "Lỗi khi lấy dữ liệu" });
  }
};
