export class Person {
  constructor(personID, name, address, email) {
    this.personID = personID;
    this.name = name;
    this.address = address;
    this.email = email;
  }
}

export class Student extends Person {
  constructor(
    personID,
    name,
    address,
    email,
    mathPoint,
    physicsPoint,
    chemistryPoint
  ) {
    super(personID, name, address, email);
    this.mathPoint = mathPoint;
    this.physicsPoint = physicsPoint;
    this.chemistryPoint = chemistryPoint;
    this.class = "student";
  }
  average() {
    let average =
      (Number(this.mathPoint) +
        Number(this.physicsPoint) +
        Number(this.chemistryPoint)) /
      3;
    return average.toFixed(1);
  }
}
export class Employee extends Person {
  constructor(personID, name, address, email, workingDay, salaryDay) {
    super(personID, name, address, email);
    this.workingDay = +workingDay;
    this.salaryDay = +salaryDay;
    this.class = "employee";
  }
  salaryTotal() {
    return this.salaryDay * this.workingDay;
  }
}
export class Customer extends Person {
  constructor(personID, name, address, email, company, billValue, feedback) {
    super(personID, name, address, email);
    this.company = company;
    this.billValue = billValue;
    this.feedback = feedback;
    this.class = "customer";
  }
}
