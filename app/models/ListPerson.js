import { Employee, Student, Customer } from "../models/Person.js";
export class listPerson {
  listUser = [];
  addUser(...user) {
    this.listUser.push(...user);
  }
  renderTableUser(seclectorTable) {
    let htmlContent = "";
    let string = "";
    let stringClass = "";
    for (let user of this.listUser) {
      switch (user.class) {
        case "student":
          stringClass = `Sinh viên`;
          var userAdd = new Student();
          Object.assign(userAdd, user),
            (string = ` Điểm Trung Bình : ${userAdd.average()}
                `);
          break;
        case "employee":
          stringClass = `Giảng viên`;
          var userAdd = new Employee();
          Object.assign(userAdd, user);

          string = `
          <div>Số ngày làm : ${userAdd.workingDay} ngày</div>
          <div>
          Lương 1 ngày : ${userAdd.salaryDay} VNĐ</div>
          <div>
          Tổng lương : ${userAdd.salaryTotal()} VNĐ
          </div>
          `;
          break;
        case "customer":
          stringClass = `Khách hàng`;
          var userAdd = new Customer();
          Object.assign(userAdd, user);
          string = `
          <div>Công ty : ${userAdd.company}</div>
          Khách hàng đánh giá : ${userAdd.feedback} !`;
          break;
      }

      htmlContent += `
            <tr>
                <td>${userAdd.personID}</td>
                <td>${userAdd.name}</td>
                <td>${stringClass}</td>
                <td>${userAdd.address}</td>
                <td>${userAdd.email}</td>
                <td>${string}</td>
                <td>
                    
                    <button class ="btn btn-danger" onclick="deleteUser('${userAdd.personID}')">Xoá</button>
                    <button class ="btn btn-primary mx-2" data-toggle="modal"
                    data-target="#exampleModal" onclick="editUser('${userAdd.personID}')">Chỉnh Sửa</button>
                </td>

            </tr>
            `;
    }
    document.querySelector(seclectorTable).innerHTML = htmlContent;
    return htmlContent;
  }

  renderTableUserFilter(seclectorTable, arrUser) {
    let htmlContent = "";
    let string = "";
    let stringClass = "";
    for (let user of arrUser) {
      switch (user.class) {
        case "student":
          stringClass = `Sinh viên`;
          var userAdd = new Student();
          Object.assign(userAdd, user),
            (string = `Điểm Trung Bình: ${userAdd.average()}
                  `);
          break;
        case "employee":
          stringClass = "Giảng viên";
          var userAdd = new Employee();
          Object.assign(userAdd, user);
          string = `<div>Số ngày làm : ${userAdd.workingDay} ngày</div>
          <div>
          Lương 1 ngày : ${userAdd.salaryDay} VNĐ</div>
          <div>
          Tổng lương : ${userAdd.salaryTotal()} VNĐ
          </div>`;
          break;
        case "customer":
          stringClass = "Khách hàng";
          var userAdd = new Customer();
          Object.assign(userAdd, user);
          string = `<div>Công ty : ${userAdd.company}</div>
          Khách hàng đánh giá : ${userAdd.feedback} !`;
          break;
        default:
          return htmlContent;
      }

      htmlContent += `
              <tr>
                  <td>${userAdd.personID}</td>
                  <td>${userAdd.name}</td>
                  <td>${stringClass}</td>
                  <td>${userAdd.address}</td>
                  <td>${userAdd.email}</td>
                  <td>${string}</td>
                  <td>
                  <button class ="btn btn-danger" onclick="deleteUser('${userAdd.personID}')">Xoá</button>
                  <button class ="btn btn-primary mx-2" data-toggle="modal"
                  data-target="#exampleModal" onclick="editUser('${userAdd.personID}')">Chỉnh Sửa</button>
                  </td>

              </tr>
              `;
    }
    document.querySelector(seclectorTable).innerHTML = htmlContent;
    return htmlContent;
  }
  saveListUser() {
    let stringLU = JSON.stringify(this.listUser);
    localStorage.setItem("LU", stringLU);
  }
  getListUser() {
    if (localStorage.getItem("LU")) {
      let stringLU = localStorage.getItem("LU");
      this.listUser = JSON.parse(stringLU);
    }
  }

  deleteUser(personID) {
    let indexDel = this.listUser.findIndex(
      (user) => user.personID === personID
    );
    if (indexDel !== -1) {
      this.listUser.splice(indexDel, 1);
    }
  }
  editUser(person) {
    let edit = this.listUser.find((user) => {
      return user.personID === person;
    });
    return edit;
  }
  updateUser(newUser) {
    let user = this.editUser(newUser.personID);
    Object.assign(user, newUser);
  }
  sortUserName(list, number) {
    if (number === 1) {
      list.sort((a, b) => {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    } else {
      list.sort((a, b) => {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
          return 1;
        }
        if (x > y) {
          return -1;
        }
        return 0;
      });
    }
    return list;
  }

  filterUser(value) {
    if (value) {
      let filterList = this.listUser.filter((user) => {
        return user.class === value;
      });
      return filterList;
    } else {
      return this.listUser;
    }
  }
}
