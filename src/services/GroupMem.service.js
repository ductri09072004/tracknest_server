import { database } from "../data/firebaseConfig.js";
import GroupMem from "../models/GroupMem.model.js";

class GroupMemService {
    // Lấy tất cả nhóm
    static async getAllGroups() {
        try {
        const snapshot = await database.ref("GroupMem").once("value");
        if (!snapshot.exists()) return [];

        const groups = [];
        snapshot.forEach((child) => {
            groups.push(GroupMem.fromFirebase(child.key, child.val()));
        });
        return groups;
        } catch (error) {
        throw new Error("Lỗi khi lấy nhóm: " + error.message);
        }
    }

    // Thêm nhóm mới
    static async createGroup(groupData) {
        try {
        const groupRef = database.ref("GroupMem").push();
        await groupRef.set(new GroupMem(groupData).toJSON());
        return { id: groupRef.key, message: "Thêm nhóm thành công" };
        } catch (error) {
        throw new Error("Lỗi khi thêm nhóm: " + error.message);
        }
    }

    // Xóa nhóm theo ID
    static async deleteGroup(id) {
        try {
        const groupRef = database.ref(`GroupMem/${id}`);
        const snapshot = await groupRef.once("value");
        if (!snapshot.exists()) throw new Error("Nhóm không tồn tại");

        await groupRef.remove();
        return { message: "Xóa nhóm thành công" };
        } catch (error) {
        throw new Error("Lỗi khi xóa nhóm: " + error.message);
        }
    }

    // Cập nhật nhóm theo ID
    static async updateGroup(id, updatedData) {
        try {
        const groupRef = database.ref(`GroupMem/${id}`);
        const snapshot = await groupRef.once("value");

        if (!snapshot.exists()) throw new Error("Nhóm không tồn tại");

        await groupRef.update(updatedData);
        return { message: "Cập nhật nhóm thành công" };
        } catch (error) {
        throw new Error("Lỗi khi cập nhật nhóm: " + error.message);
        }
    }
}

export default GroupMemService;
