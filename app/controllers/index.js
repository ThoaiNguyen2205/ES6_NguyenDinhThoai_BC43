import { Employee, Student, Customer } from "../models/Person.js";
import { listPerson } from "../models/ListPerSon.js";
import { RenderForm } from "../util/RenderForm.js";
import { Valadition } from "../models/Validation.js";

let list = new listPerson();
let val = new Valadition();
document.querySelector("#btnAdd").onclick = () => {
  document
    .querySelectorAll("#mainForm input,#mainForm select")
    .forEach((input) => {
      input.disabled = false;
    });
  document.querySelector("#btnAddPerson").style.display = "inline";
  document.querySelector("#btnUpdate").style.display = "none";
  RenderForm();
};
// document.querySelector("#btnDong").onclick = () => {
//   document.querySelector("#mainForm").reset();
//   document.querySelectorAll(".modal-body .thong_bao").reset();
// };
document.querySelector("#userType").onchange = () => {
  let change = document.querySelector("#userType").value;
  switch (change) {
    case "student":
      RenderForm(change);
      break;
    case "employee":
      RenderForm(change);
      break;
    default:
      RenderForm(change);
  }
};
// tạo đối tượng mẫu
const student1 = new Student(
  "0001",
  "Nguyen Phuc A",
  "HCM",
  "nguyenphuc@gmail.com",
  "8",
  "7",
  "9.5"
);

list.addUser(student1);

list.getListUser();
list.renderTableUser("#tableDanhSach");
// ----------thêm người dùng--------------
document.querySelector("#btnThemNV").onclick = () => {
  let type = document.querySelector("#userType").value;
  switch (type) {
    case "none": {
    }
    case "student":
      {
        let student = new Student();
        let arrinput = document.querySelectorAll(".modal-body input");
        for (let input of arrinput) {
          let { id, value } = input;
          student[id] = value;
        }
        let valid = true;

        valid =
          val.checkEmty(student.code, "tbErrorCode") &
          val.checkEmty(student.name, "tbErrorName") &
          val.checkEmty(student.email, "tbErrorEmail") &
          val.checkEmty(student.address, "tbErrorAddress") &
          val.checkEmty(student.math, "tbErrorMath") &
          val.checkEmty(student.physics, "tbErrorPhysic") &
          val.checkEmty(student.chemistry, "tbErrorChemistry");
        valid =
          valid &
          val.checkLength(student.code, "tbErrorLengthCode", "Mã", 1, 4) &
          val.checkLetter(student.name, "tbErrorLetterName") &
          val.checkemail(student.email, "tbErrorDefineEmail") &
          val.checkNumber(student.math, "tbErrorNumberMath", 0, 10) &
          val.checkNumber(student.physics, "tbErrorNumberPhysic", 0, 10) &
          val.checkNumber(student.chemistry, "tbErrorNumberChemistry", 0, 10);

        if (!valid) {
          return;
        }
        list.addUser(student);
        list.renderTableUser("#tableDanhSach");
        list.saveListUser();
      }

      break;
    case "employee":
      {
        let employee = new Employee();
        let arrinput = document.querySelectorAll(".modal-body input");
        for (let input of arrinput) {
          let { id, value } = input;
          employee[id] = value;
        }
        let valid = true;
        valid =
          val.checkEmty(employee.code, "tbErrorCode") &
          val.checkEmty(employee.name, "tbErrorName") &
          val.checkEmty(employee.email, "tbErrorEmail") &
          val.checkEmty(employee.address, "tbErrorAddress") &
          val.checkEmty(employee.salaryPDay, "tbErrorSalaryPDay") &
          val.checkEmty(employee.workday, "tbErrorWorkday");
        valid =
          valid &
          val.checkLength(employee.code, "tbErrorLengthCode", "Mã", 1, 4) &
          val.checkLetter(employee.name, "tbErrorLetterName") &
          val.checkemail(employee.email, "tbErrorDefineEmail") &
          val.checkNumberE(employee.salaryPDay, "tbErrorNumBerSalaryPDay") &
          val.checkNumberE(employee.workday, "tbErrorNumberWorkday");

        if (!valid) {
          return;
        }
        list.addUser(employee);
        list.renderTableUser("#tableDanhSach");
        list.saveListUser();
      }
      break;
    case "customer": {
      let customer = new Customer();
      let arrinput = document.querySelectorAll(".modal-body input");
      for (let input of arrinput) {
        let { id, value } = input;
        customer[id] = value;
      }
      let valid = true;
      valid =
        val.checkEmty(customer.code, "tbErrorCode") &
        val.checkEmty(customer.name, "tbErrorName") &
        val.checkEmty(customer.email, "tbErrorEmail") &
        val.checkEmty(customer.address, "tbErrorAddress") &
        val.checkEmty(customer.company, "tbErrorCompany") &
        val.checkEmty(customer.billValue, "tbErrorBillValue") &
        val.checkEmty(customer.review, "tbErrorReview");
      valid =
        valid &
        val.checkLength(customer.code, "tbErrorLengthCode", "Mã", 1, 4) &
        val.checkLetter(customer.name, "tbErrorLetterName") &
        val.checkemail(customer.email, "tbErrorDefineEmail") &
        val.checkLetter(customer.company, "tbErrorLetterCompany") &
        val.checkNumberE(customer.billValue, "tbErrorNumberBillvalue");

      if (!valid) {
        return;
      }

      list.addUser(customer);
      list.renderTableUser("#tableDanhSach");
      list.saveListUser();
    }
  }

  document.querySelector("#mainForm").reset();
};
// ------------xóa người dùng-------------
window.deleteUser = (code) => {
  list.deleteUser(code);
  list.renderTableUser("#tableDanhSach");
  list.saveListUser();
};
// -------------sửa người dùng--------------
window.editUser = (code) => {
  let editUser = list.editUser(code);
  switch (editUser.class) {
    case "student":
      renderModal(editUser.class);
      break;
    case "employee":
      renderModal(editUser.class);
      break;
    default:
      renderModal(editUser.class);
  }
  if (editUser) {
    let arrinput = document.querySelectorAll(".modal-body input");
    for (let input of arrinput) {
      let { id } = input;
      input.value = editUser[id];
    }
  }
  document.querySelector("#header-title").innerHTML = "Chỉnh Sửa  Người Dùng";
  document
    .querySelectorAll("#mainForm input,#mainForm select")
    .forEach((input) => {
      input.disabled = false;
    });
  document.querySelector("#code").disabled = "true";
  document.querySelector("#userType").disabled = "true";

  document.querySelector("#btnThemNV").style.display = "none";
  document.querySelector("#btnCapNhat").style.display = "inline";
};

// ------------cập nhật người dùng-------------
document.querySelector("#btnCapNhat").onclick = () => {
  let type = document.querySelector("#userType").value;
  switch (type) {
    case "student":
      {
        let newStudent = new Student();
        let arrinput = document.querySelectorAll(".modal-body input");
        for (let input of arrinput) {
          let { id, value } = input;
          newStudent[id] = value;
        }
        let valid = true;

        valid =
          val.checkEmty(newStudent.name, "tbErrorName") &
          val.checkEmty(newStudent.email, "tbErrorEmail") &
          val.checkEmty(newStudent.address, "tbErrorAddress") &
          val.checkEmty(newStudent.math, "tbErrorMath") &
          val.checkEmty(newStudent.physics, "tbErrorPhysic") &
          val.checkEmty(newStudent.chemistry, "tbErrorChemistry");
        valid =
          valid &
          val.checkLetter(newStudent.name, "tbErrorLetterName") &
          val.checkemail(newStudent.email, "tbErrorDefineEmail") &
          val.checkNumber(newStudent.math, "tbErrorNumberMath", 0, 10) &
          val.checkNumber(newStudent.physics, "tbErrorNumberPhysic", 0, 10) &
          val.checkNumber(
            newStudent.chemistry,
            "tbErrorNumberChemistry",
            0,
            10
          );

        if (!valid) {
          return;
        }
        list.updateUser(newStudent);
        list.renderTableUser("#tableDanhSach");
        list.saveListUser();
      }
      break;
    case "employee":
      {
        let newEmployee = new Employee();
        let arrinput = document.querySelectorAll(".modal-body input");
        for (let input of arrinput) {
          let { id, value } = input;
          newEmployee[id] = value;
        }
        let valid = true;
        valid =
          val.checkEmty(newEmployee.name, "tbErrorName") &
          val.checkEmty(newEmployee.email, "tbErrorEmail") &
          val.checkEmty(newEmployee.address, "tbErrorAddress") &
          val.checkEmty(newEmployee.salaryPDay, "tbErrorSalaryPDay") &
          val.checkEmty(newEmployee.workday, "tbErrorWorkday");
        valid =
          valid &
          val.checkLetter(newEmployee.name, "tbErrorLetterName") &
          val.checkemail(newEmployee.email, "tbErrorDefineEmail") &
          val.checkNumberE(newEmployee.salaryPDay, "tbErrorNumBerSalaryPDay") &
          val.checkNumberE(newEmployee.workday, "tbErrorNumberWorkday");

        if (!valid) {
          return;
        }
        list.updateUser(newEmployee);
        list.renderTableUser("#tableDanhSach");
        list.saveListUser();
      }
      break;
    case "customer":
      {
        let newCustomer = new Customer();
        let arrinput = document.querySelectorAll(".modal-body input");
        for (let input of arrinput) {
          let { id, value } = input;
          newCustomer[id] = value;
        }

        let valid = true;
        valid =
          val.checkEmty(newCustomer.name, "tbErrorName") &
          val.checkEmty(newCustomer.email, "tbErrorEmail") &
          val.checkEmty(newCustomer.address, "tbErrorAddress") &
          val.checkEmty(newCustomer.company, "tbErrorCompany") &
          val.checkEmty(newCustomer.billValue, "tbErrorBillValue") &
          val.checkEmty(newCustomer.review, "tbErrorReview");
        valid =
          valid &
          val.checkLetter(newCustomer.name, "tbErrorLetterName") &
          val.checkemail(newCustomer.email, "tbErrorDefineEmail") &
          val.checkLetter(newCustomer.company, "tbErrorLetterCompany") &
          val.checkNumberE(newCustomer.billValue, "tbErrorNumberBillvalue");

        if (!valid) {
          return;
        }
        list.updateUser(newCustomer);
        list.renderTableUser("#tableDanhSach");
        list.saveListUser();
      }
      break;
  }
  document.querySelector("#mainForm").reset();
  document.querySelectorAll(".thong_bao").reset();
};
// ------------ chi tiết người dùng-----------------
window.detailUser = (code) => {
  let editUser = list.editUser(code);
  switch (editUser.class) {
    case "student":
      renderModal(editUser.class);
      break;
    case "employee":
      renderModal(editUser.class);
      break;
    default:
      renderModal(editUser.class);
  }
  if (editUser) {
    let arrinput = document.querySelectorAll(".modal-body input");
    for (let input of arrinput) {
      let { id } = input;
      input.value = editUser[id];
    }
  }
  document.querySelector("#header-title").innerHTML = "Chi Tiết Người Dùng";
  document
    .querySelectorAll("#mainForm input,#mainForm select")
    .forEach((input) => {
      input.disabled = "true";
    });
  document.querySelector("#btnThemNV").style.display = "none";
  document.querySelector("#btnCapNhat").style.display = "none";
};
document.querySelector("#sortIncrease").addEventListener("click", () => {
  list.sortUserName(list.listUser, 1);
  list.renderTableUser("#tableDanhSach");
  list.saveListUser();
});
document.querySelector("#sortReduce").addEventListener("click", () => {
  list.sortUserName(list.listUser, -1);
  list.renderTableUser("#tableDanhSach");
  list.saveListUser();
});
document.querySelector("#findUser").addEventListener("change", (e) => {
  let user = e.target.value;
  let filterList = list.filterUser(user);
  list.renderTableUserFilter("#tableDanhSach", filterList);
});
