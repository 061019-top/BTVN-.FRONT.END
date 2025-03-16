let students = [
  { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
  { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
  { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } },
];

function calculateAverage(scores) {
  return (scores.math + scores.english + scores.literature) / 3;
}

function filterTopStudents(students) {
  return students.filter((student) => calculateAverage(student.scores) >= 8);
}

const topStudents = filterTopStudents(students);

const studentListDiv = document.getElementById("student-list");
if (topStudents.length > 0) {
  let studentListHTML = "<ul>";
  topStudents.forEach((student) => {
    studentListHTML += `<li>${
      student.name
    }: Điểm trung bình = ${calculateAverage(student.scores).toFixed(2)}</li>`;
  });
  studentListHTML += "</ul>";
  studentListDiv.innerHTML = studentListHTML;
} else {
  studentListDiv.innerHTML =
    "<p>Không có sinh viên nào đạt điểm trung bình >= 8.</p>";
}
