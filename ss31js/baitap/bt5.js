// const employees = [
//   {
//     id: 1,
//     name: "Dinh Minh",
//     age: 18,
//     address: "Ba Vi",
//   },
//   {
//     id: 2,
//     name: "Huu Quang",
//     age: 18,
//     address: "Thanh Oai",
//   },
// ];
// function render() {
//   let str = "";
//   for (let i = 0; i < employees.leng; i++) {
//     str += `
//         <tr>
//           <td>${employees[i]}</td>
//           <td>${employees[i].name}</td>
//           <td>${employees[i].age}</td>
//           <td>${employees[i].address}</td>
//         </tr>`;
//   }
//   document.getElementById("tbody").innerHTML = str;
// }
// render();
const empoly = [
  {
    id: 1,
    name: "exam1",
    age: "18",
    address: "ha noi",
  },
  {
    id: 2,
    name: "exam3",
    age: "18",
    address: "ha hoi",
  },
];
function show() {
  let str = "";
  for (i = 0; i < empoly.length; i++) {
    str += `<tr>
          <td>${empoly[i].id}</td>
          <td>${empoly[i].name}</td>
          <td>${empoly[i].age}</td>
          <td>${empoly[i].address}</td>
      </tr>`;
  }
  document.getElementById("tbody").innerHTML = str;
}
show();
