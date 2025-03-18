import CategoryService from "../services/Category.service.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getAllCategories();
    if (!categories || categories.length === 0) {
      return res.status(404).json({ error: "Không có dữ liệu" });
    }
    res.json(categories);
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    res.status(500).json({ error: "Lỗi khi lấy dữ liệu" });
  }
};

export const addCategory = async (req, res) => {
  try {
    const { icon, name, type, user_id } = req.body;

    if (!icon || !name || !type || !user_id) {
      return res.status(400).json({ error: "Thiếu thông tin danh mục" });
    }

    const newCategory = await CategoryService.createCategory({ icon, name, type, user_id });
    res.status(201).json({ message: "Danh mục đã được thêm", id: newCategory.id });
  } catch (error) {
    console.error("Lỗi khi thêm danh mục:", error);
    res.status(500).json({ error: "Lỗi khi thêm danh mục" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Thiếu ID danh mục" });
    }

    const result = await CategoryService.deleteCategory(id);
    res.status(200).json(result);
  } catch (error) {
    console.error("Lỗi khi xóa danh mục:", error);
    res.status(500).json({ error: "Lỗi khi xóa danh mục" });
  }
};