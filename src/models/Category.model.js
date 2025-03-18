class Category {
    constructor({ id, icon, name, type, user_id }) {
        this.id = id;
        this.icon = icon;
        this.name = name;
        this.type = type;
        this.user_id = user_id;
    }

    // Chuyển đổi dữ liệu từ Firebase snapshot
    static fromFirebase(id, data) {
        return new Category({ id, ...data });
    }

    // Chuyển đổi sang JSON để lưu vào Firebase
    toJSON() {
        return {
        icon: this.icon,
        name: this.name,
        type: this.type,
        user_id: this.user_id,
        };
    }
}

export default Category;
