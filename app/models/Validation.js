export class Valadition {
  checkEmty = (value, idError) => {
    if (value.trim() === "") {
      document.getElementById(idError).innerHTML = ` Vui Lòng Nhập Nội Dung`;
      return false;
    }
    document.getElementById(idError).innerHTML = "";
    return true;
  };
  checkLength = (value, idError, name, min, max) => {
    if (value.length < min || value.length > max) {
      document.getElementById(
        idError
      ).innerHTML = `${name} Từ ${min} Đến ${max} Ký Tự .Có Thể Bao Gồm Cả Chữ Và Số VD: A001,A002`;
      return false;
    }
    document.getElementById(idError).innerHTML = "";
    return true;
  };
  checkLetter = (value, idError, name) => {
    var regexLetter =
      /^[a-v A-Z  xyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ ]+$/;
    if (regexLetter.test(value)) {
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `Vui Lòng Chỉ Nhập Ký Tự`;
    return false;
  };
  checkemail = (value, idError, name) => {
    var regexEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if (regexEmail.test(value)) {
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(
      idError
    ).innerHTML = ` Vui Lòng Nhập Đúng Định Dạng .VD : abc@gmail.com`;
    return false;
  };
  checkNumber = (value, idError, min, max) => {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
      if (Number(value) < min || Number(value) > max) {
        document.getElementById(
          idError
        ).innerHTML = `Vui Lòng Nhập Giá Trị Từ : ${min} Đến ${max}`;
        return false;
      }
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = "Vui Lòng Nhập Giá Trị Dương";
    return false;
  };
  checkNumberE = function (value, idError) {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = "Vui Lòng Nhập Giá Trị Dương";
    return false;
  };
}
