import { database } from "../data/firebaseConfig.js";

// Lấy danh sách tất cả requests từ Firebase
export const getRequests = async (req, res) => {
  try {
    const requestRef = database.ref("Categories");
    const snapshot = await requestRef.once("value");

    if (!snapshot.exists()) {
      return res.status(404).json({ error: "Không có dữ liệu" });
    }

    res.json(snapshot.val());
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    res.status(500).json({ error: "Lỗi khi lấy dữ liệu" });
  }
};

// thêm danh sách
export const addRequest = async (req, res) => {
  try {
    const { icon, name, type, user_id } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!user_id) return res.status(400).json({ error: "Không tìm thấy UUID!" });
    if (!icon || !name) return res.status(400).json({ error: "Vui lòng nhập đầy đủ thông tin!" });
    if (icon.length > 2) return res.status(400).json({ error: "Icon chỉ được có 1 ký tự!" });

    // Thêm vào database
    const requestRef = database.ref("Categories").push();
    await requestRef.set({ icon, name, type, user_id });

    res.status(201).json({ message: "Giao dịch đã được thêm", id: requestRef.key });
  } catch (error) {
    console.error("Lỗi khi thêm giao dịch:", error);
    res.status(500).json({ error: "Lỗi khi thêm giao dịch" });
  }
};


// xóa danh sách
export const deleteRequest = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Thiếu ID danh mục" });
    }

    const requestRef = database.ref(`Categories/${id}`);
    const snapshot = await requestRef.once("value");

    if (!snapshot.exists()) {
      return res.status(404).json({ error: "Danh mục không tồn tại" });
    }

    await requestRef.remove();
    res.status(200).json({ message: "Danh mục đã được xóa" });
  } catch (error) {
    console.error("Lỗi khi xóa danh mục:", error);
    res.status(500).json({ error: "Lỗi khi xóa danh mục" });
  }
};

