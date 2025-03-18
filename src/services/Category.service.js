import { database } from "../data/firebaseConfig.js";
import Category from "../models/Category.model.js";

class CategoryService {
    // Lấy tất cả danh mục
    static async getAllCategories() {
        try {
        const snapshot = await database.ref("Categories").once("value");
        if (!snapshot.exists()) return [];

        const categories = [];
        snapshot.forEach((child) => {
            categories.push(Category.fromFirebase(child.key, child.val()));
        });
        return categories;
        } catch (error) {
        throw new Error("Lỗi khi lấy danh mục: " + error.message);
        }
    }

    // Thêm danh mục mới
    static async createCategory(categoryData) {
        try {
        const categoryRef = database.ref("Categories").push();
        await categoryRef.set(new Category(categoryData).toJSON());
        return { id: categoryRef.key, message: "Thêm danh mục thành công" };
        } catch (error) {
        throw new Error("Lỗi khi thêm danh mục: " + error.message);
        }
    }

    // Xóa danh mục theo ID
    static async deleteCategory(id) {
        try {
        const categoryRef = database.ref(`Categories/${id}`);
        const snapshot = await categoryRef.once("value");
        if (!snapshot.exists()) throw new Error("Danh mục không tồn tại");

        await categoryRef.remove();
        return { message: "Xóa danh mục thành công" };
        } catch (error) {
        throw new Error("Lỗi khi xóa danh mục: " + error.message);
        }
    }
}

export default CategoryService;
