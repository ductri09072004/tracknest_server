class Account {
    constructor({ id, date_buy, email, type_id, user_id }) {
        this.id = id || null; // Firebase sẽ tự tạo ID nếu không có
        this.date_buy = date_buy || new Date().toISOString();
        this.email = email || "";
        this.type_id = type_id || "";
        this.user_id = user_id || "";
    }

    // Chuyển đổi thành JSON để lưu vào Firebase
    toJSON() {
        return {
        date_buy: this.date_buy,
        email: this.email,
        type_id: this.type_id,
        user_id: this.user_id,
        };
    }

    // Phương thức để tạo một Account từ dữ liệu Firebase
    static fromFirebase(id, data) {
        return new Account({ id, ...data });
    }
}

export default Account;
