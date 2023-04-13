export let RenderForm = (person = "student") => {
  let stringHTML;
  switch (person) {
    case "student":
      stringHTML = `
      <div class="col-md-6 mb-3">
            <label for="mathPoint">Điểm Toán</label>
            <input type="number" class="form-control" id="mathPoint" placeholder="Nhập điểm toán" required>
            <div id="tbErrorMath" class="invalid-feedback">
            </div>
            <div id="tbErrorNumberMath" class="invalid-feedback thong_bao">
             </div>
            </div>
        <div class="col-md-6 mb-3">
        <label for="physicsPoint">Điểm Lý</label>
        <input type="number" class="form-control" id="physicsPoint" placeholder="Nhập điểm Lý" >
        <div class ="thong_bao invalid-feedback"id="tbErrorPhysics"></div>
        <div class ="thong_bao invalid-feedback"id="tbErrorNumberPhysics"></div>	
        <span class="sp-thongbao" id="tbPhysics"></span>
     </div>
     <div class="col-md-6 mb-3">
        <label for="chemistryPoint">Điểm Hoá</label>
        <input type="number" class="form-control" id="chemistryPoint" placeholder="Nhập điểm Hoá" >
        <div class ="thong_bao invalid-feedback"id="tbErrorChemistry"></div>
        <div class ="thong_bao invalid-feedback"id="tbErrorNumberChemistry"></div>	
        <span class="sp-thongbao" id="tbChemistry"></span>
     </div>
            `;
      break;
    case "employee":
      stringHTML = `
      <div class="col-md-6 mb-3">
        <label for="workingDay">Số ngày làm</label>
        <input type="number" class="form-control" id="workingDay" placeholder="Nhập số ngày làm việc" required>
        <div class ="thong_bao invalid-feedback"id="tbErrorWorkingDay"></div>
        <div class ="thong_bao invalid-feedback"id="tbErrorNumberWorkingDay"></div>	
        <span class="sp-thongbao" id="tbWork"></span>
     </div>
     <div class="col-md-6 mb-3">
      <label for="salaryDay">Lương 1 ngày</label>
      <input type="number" class="form-control" id="salaryDay" placeholder="Nhập lương 1 ngày" required>
      <div class ="thong_bao invalid-feedback"id="tbErrorSalaryDay"></div>
      <div class ="thong_bao invalid-feedback"id="tbErrorNumberSalaryDay"></div>	
      <span class="sp-thongbao" id="tbSalaryDay"></span>
   </div>

            `;
      break;
    case "customer":
      stringHTML = `

      <div class="col-md-6 mb-3">
      <label for="company">Công ty</label>
      <input type="text" class="form-control" id="company" placeholder="Nhập tên công ty" required>
      <div class ="thong_bao invalid-feedback"id="tbErrorCompany"></div>
      <div class ="thong_bao invalid-feedback"id="tbErrorLetterCompany"></div>	
      <span class="sp-thongbao" id="tbCompany"></span>
   </div>
   <div class="col-md-6 mb-3">
      <label for="billValue">Hoá đơn</label>
      <input type="number" class="form-control" id="billValue" placeholder="Nhập mã hoá đơn" required>
      <div class ="thong_bao invalid-feedback"id="tbErrorBillValue"></div>
      <div class ="thong_bao invalid-feedback"id="tbErrorNumberBillValue"></div>	
      <span class="sp-thongbao" id="tbBill"></span>
   </div>
   <div class="col-md-6 mb-3">
      <label for="feedback">Đánh giá</label>
      <input type="text" class="form-control" id="feedback" placeholder="Nhập nội dung" required>
      <div class ="thong_bao invalid-feedback"id="tbErrorFeedback"></div>
      <div class ="thong_bao invalid-feedback"id="tbErrorNumberFeedback"></div>	
      <span class="sp-thongbao" id="tbFeedback"></span>
   </div>


     
            `;
      break;
  }

  document.querySelector("#renderPerson").innerHTML = stringHTML;
};
