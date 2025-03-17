let tasks = [];

let addTask = (id, name, description, startTime, status) => {
  let task = { id, name, description, startTime, status };
  if (tasks.some((t) => t.id === id)) {
    console.log("ID đã tồn tại! Vui lòng chọn ID khác.");
    return false;
  }
  tasks.push(task);
  console.log(`Đã thêm công việc: ${name}`);
  return true;
};

let displayAllTasks = () => {
  if (tasks.length === 0) {
    console.log("Danh sách công việc trống!");
    return;
  }
  console.log("\n=== DANH SÁCH CÔNG VIỆC ===");
  tasks.forEach((task) => {
    console.log(`ID: ${task.id}`);
    console.log(`Tên: ${task.name}`);
    console.log(`Mô tả: ${task.description}`);
    console.log(`Thời gian bắt đầu: ${task.startTime}`);
    console.log(`Trạng thái: ${task.status}`);
    console.log("----------------");
  });
};

let updateTaskStatus = (id, newStatus) => {
  let taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex === -1) {
    console.log("Không tìm thấy công việc với ID này!");
    return false;
  }
  tasks[taskIndex].status = newStatus;
  console.log("Đã cập nhật trạng thái công việc!");
  return true;
};

let filterTasksByStatus = (status) => {
  let filtered = tasks.filter((t) => t.status === status);
  if (filtered.length === 0) {
    console.log(`Không tìm thấy công việc nào với trạng thái "${status}"!`);
    return;
  }
  console.log(`\n=== CÔNG VIỆC - TRẠNG THÁI: ${status} ===`);
  filtered.forEach((task) => {
    console.log(`ID: ${task.id}`);
    console.log(`Tên: ${task.name}`);
    console.log(`Mô tả: ${task.description}`);
    console.log(`Thời gian bắt đầu: ${task.startTime}`);
    console.log(`Trạng thái: ${task.status}`);
    console.log("----------------");
  });
};

let sortTasksByStatus = () => {
  tasks.sort((a, b) => {
    if (a.status === "Hoàn thành" && b.status !== "Hoàn thành") return -1;
    if (a.status !== "Hoàn thành" && b.status === "Hoàn thành") return 1;
    return 0;
  });
  console.log("Đã sắp xếp công việc theo trạng thái!");
  displayAllTasks();
};

let main = () => {
  addTask(
    1,
    "Họp nhóm",
    "Thảo luận dự án mới",
    "2025-03-18 09:00",
    "Chưa hoàn thành"
  );
  addTask(
    2,
    "Viết báo cáo",
    "Báo cáo tiến độ tuần",
    "2025-03-18 14:00",
    "Chưa hoàn thành"
  );
  addTask(
    3,
    "Kiểm tra code",
    "Review code module A",
    "2025-03-17 10:00",
    "Hoàn thành"
  );

  displayAllTasks();

  updateTaskStatus(2, "Hoàn thành");

  filterTasksByStatus("Hoàn thành");

  filterTasksByStatus("Chưa hoàn thành");

  sortTasksByStatus();
};

main();
console.log("Đã thoát chương trình!");
