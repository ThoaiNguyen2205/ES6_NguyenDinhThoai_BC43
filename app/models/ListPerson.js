import { Employee, Student, Customer } from "../models/Person.js";
export class listPerson {
  listUser = [];
  addUser(...user) {
    this.listUser.push(...user);
  }
  renderTableUser(seclectorTable) {
    let htmlContent = "";
    let string = "";

    for (let user of this.listUser) {
      switch (user.class) {
        case "student":
          var userAdd = new Student();
          Object.assign(userAdd, user),
            (string = `Tổng Điểm : ${userAdd.average()}
                `);
          break;
        case "employee":
          var userAdd = new Employee();
          Object.assign(userAdd, user);
          string = `Tổng lương : ${userAdd.salaryTotal()}`;
          break;
        case "customer":
          var userAdd = new Customer();
          Object.assign(userAdd, user);
          string = `${userAdd.company}`;
          break;
      }

      htmlContent += `
            <tr>
                <td>${userAdd.code}</td>
                <td>${userAdd.name}</td>
                <td>${userAdd.address}</td>
                <td>${userAdd.email}</td>
                <td>${string}</td>
                <td>
                    <button class="btn btn-primary mx-2" data-toggle="modal"
                    data-target="#myModal"onclick="detailUser('${userAdd.code}')"><i class="fa-solid fa-circle-info"></i></button>
                    <button class ="btn btn-danger" onclick="deleteUser('${userAdd.code}')">X</button>
                    <button class ="btn btn-primary mx-2" data-toggle="modal"
                    data-target="#myModal"onclick="editUser('${userAdd.code}')"><i class="fa-regular fa-pen-to-square"></i></button>
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
    for (let user of arrUser) {
      switch (user.class) {
        case "student":
          var userAdd = new Student();
          Object.assign(userAdd, user),
            (string = `Tổng Điểm : ${userAdd.calAverage()}
                  `);
          break;
        case "employee":
          var userAdd = new Employee();
          Object.assign(userAdd, user);
          string = `Tổng lương : ${userAdd.calSalary()}`;
          break;
        case "customer":
          var userAdd = new Customer();
          Object.assign(userAdd, user);
          string = `${userAdd.company}`;

          break;
      }

      htmlContent += `
              <tr>
                  <td>${userAdd.code}</td>
                  <td>${userAdd.name}</td>
                  <td>${userAdd.address}</td>
                  <td>${userAdd.email}</td>
                  <td>${string}</td>
                  <td>
                  <button class="btn btn-primary mx-2" onclick="detailUser('${userAdd.code}')"><i class="fa-solid fa-circle-info"></i></button>
                      <button class ="btn btn-danger" onclick="deleteUser('${userAdd.code}')">X</button>
                      <button class ="btn btn-primary mx-2" onclick="editUser('${userAdd.code}')"><i class="fa-regular fa-pen-to-square"></i></button>
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

  deleteUser(code) {
    let indexDel = this.listUser.findIndex((user) => user.code === code);
    if (indexDel !== -1) {
      this.listUser.splice(indexDel, 1);
    }
  }
  editUser(code) {
    let edit = this.listUser.find((user) => {
      return user.code === code;
    });
    return edit;
  }
  updateUser(newUser) {
    let user = this.editUser(newUser.code);
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

  filterUser(type) {
    if (type) {
      let filterList = this.listUser.filter((user) => {
        return user.class === type;
      });
      return filterList;
    } else {
      return this.listUser;
    }
  }
}
