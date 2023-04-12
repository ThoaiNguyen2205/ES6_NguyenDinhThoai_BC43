export let RenderForm = (person = "student") => {
  let stringHTML;
  switch (person) {
    case "student":
      stringHTML = `
      <div class="col-md-6 mb-3">
        <label for="mathPoint">Điểm Toán</label>
        <input type="text" class="form-control" id="mathPoint" placeholder="Nhập điểm Toán" required>
        <div class ="thong_bao text    text-danger"id="tbErrorMath"></div>
        <div class ="thong_bao text    text-danger"id="tbErrorNumberMath"></div>	
        <span class="sp-thongbao" id="tbMath"></span>
     </div>
     <div class="col-md-6 mb-3">
        <label for="physicsPoint">Điểm Lý</label>
        <input type="text" class="form-control" id="physicsPoint" placeholder="Nhập điểm Lý" required>
        <div class ="thong_bao text    text-danger"id="tbErrorPhysics"></div>
        <div class ="thong_bao text    text-danger"id="tbErrorNumberPhysics"></div>	
        <span class="sp-thongbao" id="tbPhysics"></span>
     </div>
     <div class="col-md-6 mb-3">
        <label for="chemistryPoint">Điểm Hoá</label>
        <input type="text" class="form-control" id="chemistryPoint" placeholder="Nhập điểm Hoá" required>
        <div class ="thong_bao text    text-danger"id="tbErrorChemistry"></div>
        <div class ="thong_bao text    text-danger"id="tbErrorNumberChemistry"></div>	
        <span class="sp-thongbao" id="tbChemistry"></span>
     </div>
            `;
      break;
    case "employee":
      stringHTML = `
            <div class="form-group">
                <div class="input-group">
                <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-money" aria-hidden="true"></i></span>
                    </div>
                    <input type="number"  id="salaryPDay" class="form-control input-sm"
                        placeholder="Lương theo ngày">
                </div>
                <div class ="thong_bao text    text-danger"id="tbErrorSalaryPDay"></div>	
                <div class ="thong_bao text    text-danger"id="tbErrorNumBerSalaryPDay"></div>
                <span class="sp-thongbao" id="salaryPDay"></span>
            </div>

            <div class="form-group">
                <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-calendar"
                        aria-hidden="true"></i></span>
            </div>
                    <input type="number"  id="workday" class="form-control input-sm"
                        placeholder="Số ngày làm việc">
                </div>
                <div class ="thong_bao text    text-danger"id="tbErrorWorkday"></div>
                <div class ="thong_bao text    text-danger"id="tbErrorNumberWorkday"></div>
                <span class="sp-thongbao" id="tbworkday"></span>
            </div>
            `;
      break;
    case "customer":
      stringHTML = `
            <div class="form-group">
                <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-building"></i></span>
            </div>
                    <input type="text"  id="company" class="form-control input-sm"
                        placeholder="Tên Công ty">
                </div>
                <div class ="thong_bao text    text-danger"id="tbErrorCompany"></div>
                <div class ="thong_bao text    text-danger"id="tbErrorLetterCompany"></div>
                <span class="sp-thongbao" id="tbcompany"></span>
            </div>

            <div class="form-group">
                <div class="input-group">
                <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-money"></i></span>
                    </div>
                    <input type="number"  id="billValue" class="form-control input-sm"
                        placeholder="Trị giá hóa đơn">
                </div>
                <div class ="thong_bao text    text-danger"id="tbErrorbillValue"></div>
                <div class ="thong_bao text    text-danger"id="tbErrorNumberBillvalue"></div>
                <span class="sp-thongbao" id="tbbillValue"></span>
            </div>

            <div class="form-group">
                <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-sticky-note"></i></span>
            </div>
                    <input type="text"  id="review" class="form-control input-sm"
                        placeholder="Đánh giá">
                </div>
                <div class ="thong_bao text    text-danger"id="tbErrorReview"></div>
                <span class="sp-thongbao" id="tbreview"></span>
            </div>
            `;
      break;
  }

  document.querySelector("#renderPerson").innerHTML = stringHTML;
};
