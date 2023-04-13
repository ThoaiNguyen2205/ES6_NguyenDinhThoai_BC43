import { Employee, Student, Customer } from "../models/Person.js";
import { listPerson } from "../models/ListPerSon.js";
import { RenderForm } from "../util/RenderForm.js";
import { Valadition } from "../models/Validation.js";

let list = new listPerson();
let val = new Valadition();
document.querySelector("#btnAdd").onclick = () => {
  document.querySelector("#exampleModalLabel").innerHTML = "Thêm  Người Dùng";
  document
    .querySelectorAll("#mainForm input,#mainForm select")
    .forEach((input) => {
      input.disabled = false;
    });
  document.querySelector("#btnAddPerson").style.display = "inline";
  document.querySelector("#btnUpPerson").style.display = "none";
  RenderForm();
  document.querySelector("#personForm").reset();

  document.querySelector("#personID").disabled = "";
  document.querySelector("#userType").disabled = "";
};

document.querySelector("#userType").onchange = () => {
  let change = document.querySelector("#userType").value;
  switch (change) {
    case "all":
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

list.getListUser();
list.renderTableUser("#tbodyPerson");
// AddPerson
document.querySelector("#btnAddPerson").onclick = () => {
  let type = document.querySelector("#userType").value;
  switch (type) {
    case "none": {
    }
    case "student":
      {
        let student = new Student();
        let arrinput = document.querySelectorAll(
          ".modal-body input,.modal-body select,.modal-body textarea "
        );
        for (let input of arrinput) {
          let { id, value } = input;
          student[id] = value;
        }
        let valid = true;

        valid =
          val.checkEmty(student.personID, "tbErrorPersonID") &
          val.checkEmty(student.name, "tbErrorName") &
          val.checkEmty(student.email, "tbErrorEmail") &
          val.checkEmty(student.address, "tbErrorAddress") &
          val.checkEmty(student.mathPoint, "tbErrorMath") &
          val.checkEmty(student.physicsPoint, "tbErrorPhysics") &
          val.checkEmty(student.chemistryPoint, "tbErrorChemistry");
        valid =
          valid &
          val.checkLength(student.personID, "tbErrorLengthID", "Mã", 1, 4) &
          val.checkLetter(student.name, "tbErrorLetterName") &
          val.checkemail(student.email, "tbErrorDefaultEmail") &
          val.checkNumber(student.mathPoint, "tbErrorNumberMath", 0, 10) &
          val.checkNumber(student.physicsPoint, "tbErrorNumberPhysics", 0, 10) &
          val.checkNumber(
            student.chemistryPoint,
            "tbErrorNumberChemistry",
            0,
            10
          );

        if (!valid) {
          return;
        }
        list.addUser(student);
        list.renderTableUser("#tbodyPerson");
        list.saveListUser();
      }

      break;
    case "employee":
      {
        let employee = new Employee();
        let arrinput = document.querySelectorAll(
          ".modal-body input,.modal-body select,.modal-body textarea "
        );
        for (let input of arrinput) {
          let { id, value } = input;
          employee[id] = value;
        }
        let valid = true;
        valid =
          val.checkEmty(employee.personID, "tbErrorPersonID") &
          val.checkEmty(employee.name, "tbErrorName") &
          val.checkEmty(employee.email, "tbErrorEmail") &
          val.checkEmty(employee.address, "tbErrorAddress") &
          val.checkEmty(employee.salaryDay, "tbErrorSalaryDay") &
          val.checkEmty(employee.workingDay, "tbErrorWorkingDay");
        valid =
          valid &
          val.checkLength(employee.personID, "tbErrorLengthID", "Mã", 1, 4) &
          val.checkLetter(employee.name, "tbErrorLetterName") &
          val.checkemail(employee.email, "tbErrorDefaultEmail") &
          val.checkNumberE(employee.salaryDay, "tbErrorNumberSalaryDay") &
          val.checkNumberE(employee.workingDay, "tbErrorNumberWorkingDay");

        if (!valid) {
          return;
        }
        list.addUser(employee);
        list.renderTableUser("#tbodyPerson");
        list.saveListUser();
      }
      break;
    case "customer": {
      let customer = new Customer();
      let arrinput = document.querySelectorAll(
        ".modal-body input,.modal-body select,.modal-body textarea "
      );
      for (let input of arrinput) {
        let { id, value } = input;
        customer[id] = value;
      }
      let valid = true;
      valid =
        val.checkEmty(customer.personID, "tbErrorPersonID") &
        val.checkEmty(customer.name, "tbErrorName") &
        val.checkEmty(customer.email, "tbErrorEmail") &
        val.checkEmty(customer.address, "tbErrorAddress") &
        val.checkEmty(customer.company, "tbErrorCompany") &
        val.checkEmty(customer.billValue, "tbErrorBillValue") &
        val.checkEmty(customer.feedback, "tbErrorFeedback");
      valid =
        valid &
        val.checkLength(customer.personID, "tbErrorLengthID", "Mã", 1, 4) &
        val.checkLetter(customer.name, "tbErrorLetterName") &
        val.checkemail(customer.email, "tbErrorDefaultEmail") &
        val.checkLetter(customer.company, "tbErrorLetterCompany") &
        val.checkNumberE(customer.billValue, "tbErrorNumberBillValue");

      if (!valid) {
        return;
      }

      list.addUser(customer);
      list.renderTableUser("#tbodyPerson");
      list.saveListUser();
    }
  }
  document.querySelector("button[data-dismiss]").click();
  document.querySelector("#personForm").reset();
  document.querySelectorAll(".thong_bao").reset();
};
// DeletePerson
window.deleteUser = (personID) => {
  list.deleteUser(personID);
  list.renderTableUser("#tbodyPerson");
  list.saveListUser();
};
// FixPerson
window.editUser = (personID) => {
  let change = document.querySelector("#userType");
  let editUser = list.editUser(personID);
  change.value = editUser.class;
  change.dispatchEvent(new Event("change"));

  switch (editUser.class) {
    case "student":
      RenderForm(editUser.class);
      break;
    case "employee":
      RenderForm(editUser.class);
      console.log(RenderForm);
      break;
    default:
      RenderForm(editUser.class);
  }
  if (editUser) {
    let arrinput = document.querySelectorAll(".modal-body input");
    for (let input of arrinput) {
      let { id } = input;
      input.value = editUser[id];
    }
  }
  document.querySelector("#exampleModalLabel").innerHTML =
    "Chỉnh Sửa  Người Dùng";
  document
    .querySelectorAll("#mainForm input,#mainForm select")
    .forEach((input) => {
      input.disabled = false;
    });
  document.querySelector("#personID").disabled = "flase";
  document.querySelector("#userType").disabled = "false";

  document.querySelector("#btnAddPerson").style.display = "none";
  document.querySelector("#btnUpPerson").style.display = "inline";
};

// UpdatePerson
document.querySelector("#btnUpPerson").onclick = () => {
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
          val.checkEmty(newStudent.mathPoint, "tbErrorMath") &
          val.checkEmty(newStudent.physicsPoint, "tbErrorPhysics") &
          val.checkEmty(newStudent.chemistryPoint, "tbErrorChemistry");
        valid =
          valid &
          val.checkLetter(newStudent.name, "tbErrorLetterName") &
          val.checkemail(newStudent.email, "tbErrorDefaultEmail") &
          val.checkNumber(newStudent.mathPoint, "tbErrorNumberMath", 0, 10) &
          val.checkNumber(
            newStudent.physicsPoint,
            "tbErrorNumberPhysics",
            0,
            10
          ) &
          val.checkNumber(
            newStudent.chemistryPoint,
            "tbErrorNumberChemistry",
            0,
            10
          );

        if (!valid) {
          return;
        }
        list.updateUser(newStudent);
        list.renderTableUser("#tbodyPerson");
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
          val.checkEmty(newEmployee.salaryDay, "tbErrorSalaryDay") &
          val.checkEmty(newEmployee.workingDay, "tbErrorWorkingDay");
        valid =
          valid &
          val.checkLetter(newEmployee.name, "tbErrorLetterName") &
          val.checkemail(newEmployee.email, "tbErrorDefaultEmail") &
          val.checkNumberE(newEmployee.salaryDay, "tbErrorNumberSalaryDay") &
          val.checkNumberE(newEmployee.workingDay, "tbErrorNumberWorkingDay");

        if (!valid) {
          return;
        }
        list.updateUser(newEmployee);
        list.renderTableUser("#tbodyPerson");
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
          val.checkEmty(newCustomer.feedback, "tbErrorFeedback");
        valid =
          valid &
          val.checkLetter(newCustomer.name, "tbErrorLetterName") &
          val.checkemail(newCustomer.email, "tbErrorDefaultEmail") &
          val.checkLetter(newCustomer.company, "tbErrorLetterCompany") &
          val.checkNumberE(newCustomer.billValue, "tbErrorNumberBillValue");

        if (!valid) {
          return;
        }
        list.updateUser(newCustomer);
        list.renderTableUser("#tbodyPerson");
        list.saveListUser();
      }
      break;
  }

  document.querySelector("#personID").disabled = "";
  document.querySelector("#userType").disabled = "";
  document.querySelector("#personForm").reset();
  document.querySelector("button[data-dismiss]").click();
};

document.querySelector("#sortIncrease").addEventListener("click", () => {
  list.sortUserName(list.listUser, 1);
  list.renderTableUser("#tbodyPerson");
  list.saveListUser();
});
document.querySelector("#sortReduce").addEventListener("click", () => {
  list.sortUserName(list.listUser, -1);
  list.renderTableUser("#tbodyPerson");
  list.saveListUser();
});
document.querySelector("#allPerson").addEventListener("change", (e) => {
  let user = e.target.value;
  let filterList = list.filterUser(user);
  list.renderTableUserFilter("#tbodyPerson", filterList);
});
document.querySelector("#btnClose").onclick = () => {
  document.querySelectorAll(".invalid-feedback").reset();
  document.querySelector("#personForm").reset();
};
// // Tìm kiếm
// document.getElementById("searchName").oninput = () => {
//   searchName(listUser);
//   console.log(listUser);
// };
// function searchName() {
//   let search = document.querySelector("#searchName").value;
//   let newList = listUser.filter((per) => {
//     let name = per.name.toLowerCase();
//     search = search.toLowerCase();
//     return name.indexOf(search) !== -1;
//   });
//   renderTableUser(newList);
// }
