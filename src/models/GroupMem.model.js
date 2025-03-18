class GroupMem {
    constructor({ id, name_group, name_mem, user_id }) {
        this.id = id;
        this.name_group = name_group;
        this.name_mem = name_mem;
        this.user_id = user_id;
    }

    // Chuyển đổi dữ liệu từ Firebase snapshot
    static fromFirebase(id, data) {
        return new GroupMem({ id, ...data });
    }

    // Chuyển đổi sang JSON để lưu vào Firebase
    toJSON() {
        return {
        name_group: this.name_group,
        name_mem: this.name_mem,
        user_id: this.user_id,
        };
    }
}

export default GroupMem;
