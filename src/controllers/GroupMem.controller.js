import GroupMemService from "../services/GroupMem.service.js";

export const getGroups = async (req, res) => {
  try {
    const groups = await GroupMemService.getAllGroups();
    if (!groups || groups.length === 0) {
      return res.status(404).json({ error: "Không có dữ liệu" });
    }
    res.json(groups);
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    res.status(500).json({ error: "Lỗi khi lấy dữ liệu" });
  }
};

export const addGroup = async (req, res) => {
  try {
    const { name_group, name_mem, user_id } = req.body;

    if (!name_group || !name_mem || !user_id) {
      return res.status(400).json({ error: "Thiếu thông tin nhóm" });
    }

    const newGroup = await GroupMemService.createGroup({ name_group, name_mem, user_id });
    res.status(201).json({ message: "Nhóm đã được thêm", id: newGroup.id });
  } catch (error) {
    console.error("Lỗi khi thêm nhóm:", error);
    res.status(500).json({ error: "Lỗi khi thêm nhóm" });
  }
};

export const deleteGroup = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Thiếu ID nhóm" });
    }

    const result = await GroupMemService.deleteGroup(id);
    res.status(200).json(result);
  } catch (error) {
    console.error("Lỗi khi xóa nhóm:", error);
    res.status(500).json({ error: "Lỗi khi xóa nhóm" });
  }
};

export const updateGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    if (!id) {
      return res.status(400).json({ error: "Thiếu ID nhóm" });
    }

    const updatedGroup = await GroupMemService.updateGroup(id, updatedData);
    res.status(200).json(updatedGroup);
  } catch (error) {
    console.error("Lỗi khi cập nhật nhóm:", error);
    res.status(500).json({ error: "Lỗi khi cập nhật nhóm" });
  }
};
