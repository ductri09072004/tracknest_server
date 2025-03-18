import { database } from "../data/firebaseConfig.js";
import Account from "../models/Account.model.js";

class AccountService {
    // Lấy tất cả tài khoản
    static async getAllAccounts() {
        try {
        const snapshot = await database.ref("Account").once("value");
        if (!snapshot.exists()) return [];

        const accounts = [];
        snapshot.forEach((child) => {
            accounts.push(Account.fromFirebase(child.key, child.val()));
        });
        return accounts;
        } catch (error) {
        throw new Error("Lỗi khi lấy danh sách tài khoản: " + error.message);
        }
    }

    // Thêm tài khoản mới
    static async addAccount(accountData) {
        try {
        const newAccountRef = database.ref("Account").push();
        await newAccountRef.set(new Account(accountData).toJSON());
        return { id: newAccountRef.key, message: "Thêm tài khoản thành công" };
        } catch (error) {
        throw new Error("Lỗi khi thêm tài khoản: " + error.message);
        }
    }

    // Xóa tài khoản theo ID
    static async deleteAccount(id) {
        try {
        const accountRef = database.ref(`Account/${id}`);
        const snapshot = await accountRef.once("value");
        if (!snapshot.exists()) throw new Error("Tài khoản không tồn tại");

        await accountRef.remove();
        return { message: "Xóa tài khoản thành công" };
        } catch (error) {
        throw new Error("Lỗi khi xóa tài khoản: " + error.message);
        }
    }

    // Cập nhật tài khoản
    static async updateAccount(id, updateData) {
        try {
        const accountRef = database.ref(`Account/${id}`);
        const snapshot = await accountRef.once("value");
        if (!snapshot.exists()) throw new Error("Tài khoản không tồn tại");

        await accountRef.update(updateData);
        return { message: "Cập nhật tài khoản thành công" };
        } catch (error) {
        throw new Error("Lỗi khi cập nhật tài khoản: " + error.message);
        }
    }
}

export default AccountService;
