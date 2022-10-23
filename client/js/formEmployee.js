/**
 * Các thao tác với formEmployee
 * Author: Sondxt
 */

// Gọihàm initFormEvents()
window.onload = () => {
    initFormEvents();
}
const $ = document.getElementById.bind(document);
const $$ = document.getElementsByClassName.bind(document);

// Khởi tạo các sự kiện
function initFormEvents() {
    // Mở form
    openForm();
    // Đóng form
    closeForm();
}

// Khai báo biến
const btnAdd = $('btnAdd');
const form = $('formEmployee');
const btnAddtodatabase = $('btnAddtodatabase');
const btnEsc = $$("btnEsc");
// console.log(btnEsc);

/**
 * Mở formEmployee
 * Date: 18/10/2022
 */
function openForm() {
    try {
        btnAdd.addEventListener('click', () => {
            if (form.style.display === 'none') {
                //  Mở form
                form.style.display = 'flex';
            } else {
                form.style.display = 'none';
            }
        });
    } catch (error) {
        console.log(error)
    }

}


/**
 * Tắt formEmployee
 * Date: 18/10/2022
 */
function closeForm() {
    try {
        for (let btns of btnEsc) {
            btns.addEventListener('click', () => {
                form.style.display = 'none';
            });
        }

    } catch (error) {
        console.log(error)
    }
}

/**
 * Lưu thông tin vừa nhập vào database
 * Date: 21/10/2022
 */
btnAddtodatabase.addEventListener('click', () => {
    // validate dữ liệu
    var isValid = validateData();

    // Thu thập dữ liệu
    var employee = {};
    var employeeCode = "";

    // gọi api cất dữ liệu
    fetch("https://amis.manhnv.net/api/v1/Employees", {
        method: "POST",
        body: JSON.stringify(employee),
    })
        .then(res => res.json)
        .then(res => {
            console.log(res);
        })
        .catch(res => {
            console.log(res);
        })
    // kiểm tra kết quả và đưa ra thông báo
})

/**
 * Thực hiện validate dữ liệu
 * Date: 21/10/2022
 */
function validateData() {

    // Các thông tin bắt buộc
    let employeeCode = $("txtEmployeeCode").value;
    let fullName = $("txtFullName").value;
    let dob = $("txtDateOfBirth").value;
    let idNumber = $("txtIDNumber").value;
    let department = $("txtDepartment").value;
    let phoneNumber = $("txtPhoneNumber").value;
    let email = $("txtEmail").value;


    let dlgbtnEsc = $$('dlg-btnEsc');
    let dlgWrapper = $("dialog-wrapper");
    let dlgEmployeeCode = $('dialog-warning-employeeCode');
    let dlgFullName = $('dialog-warning-fullName');
    let dlgRequired = $('dialog-warning-required');
    let dlgDOB = $('dialog-warning-dob');
    let dlgIDNumber = $('dialog-warning-idNumber');
    let dlgDepartment = $('dialog-warning-department');
    let dlgPhoneNumber = $('dialog-warning-phone');
    let dlgEmail = $('dialog-warning-email');


    // Tắt dialog khi ấn nút "Đóng"
    for (let btns of dlgbtnEsc) {
        btns.addEventListener('click', () => {
            dlgEmployeeCode.style.display = 'none';
            dlgIDNumber.style.display = 'none';
            dlgFullName.style.display = 'none';
            dlgRequired.style.display = 'none';
            dlgDOB.style.display = 'none';
            dlgWrapper.style.display = 'none';
        });
    }

    // Kiểm tra employeeCode 
    if (!employeeCode && fullName) {
        // Đổi màu border
        $('txtEmployeeCode').style.border = "1px solid #000";
        // Hiển thị thông báo
        dlgWrapper.style.display = "flex";
        dlgEmployeeCode.style.display = "flex";

    } else {
        $('txtEmployeeCode').style.border = "1px solid #CEEAD9";
    }

    // Kiểm tra FullName
    if (!fullName && employeeCode) {
        // Đổi màu border
        $('txtFullName').style.border = "1px solid #000";
        // Hiển thị thông báo
        dlgWrapper.style.display = "flex";
        dlgFullName.style.display = "flex";
    } else {
        $('txtFullName').style.border = "1px solid #CEEAD9";
    }

    // Kiểm tra fullName và employeeCode
    if (!employeeCode && !fullName) {
        // Đổi màu border
        $('txtFullName').style.border = "1px solid #000";
        $('txtEmployeeCode').style.border = "1px solid #000";
        // Hiển thị thông báo
        dlgWrapper.style.display = "flex";
        dlgRequired.style.display = "flex";
    } else {
        $('txtFullName').style.border = "1px solid #CEEAD9";
        $('txtEmployeeCode').style.border = "1px solid #CEEAD9";
    }

    // Kiểm tra ngày sinh
    if (dob) {
        dob = new Date(dob);
    }
    if (dob > new Date()) {
        // alert('Ngày sinh không được lớn hơn ngày hiện tại');
        // Đổi màu border
        $('txtDateOfBirth').style.border = "1px solid #000";
        // Hiển thị thông báo
        dlgWrapper.style.display = "block";
        dlgDOB.style.display = "flex";
    } else {
        $('txtDateOfBirth').style.border = "1px solid #CEEAD9";
    }

    // Kiểm tra số CMND
    var idCheck = /([0-9]{9}) | ([0-9]{12})$/;
    if (!idNumber) {
        // Đổi màu border
        $('txtIDNumber').style.border = "1px solid #000";
        // Hiển thị thông báo
        dlgWrapper.style.display = "block";
        dlgIDNumber.style.display = "flex";
    } else if (idNumber != null && !idNumber.match(idCheck)) {
        alert("sai CMND");
        // $('txtIDNumber').style.border = "1px solid #CEEAD9";
    }

    // Kiểm tra đơn vị
    if (!department) {
        // Đổi màu border
        $('txtDepartment').style.border = "1px solid #000";
        // Hiển thị thông báo
        dlgWrapper.style.display = "block";
        dlgDepartment.style.display = "flex";
    } else {
        $('txtDepartment').style.border = "1px solid #CEEAD9";
    }
    
    // Các thông tin cần đúng định dạng
    
    let phoneCheck = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
    if (phoneNumber && phoneNumber.match(phoneCheck) == null) {
        dlgWrapper.style.display = "block";
        dlgPhoneNumber.style.display = "flex";
    }
    else {
        $('txtPhoneNumber').style.border = "1px solid #CEEAD9";

    }
    
    let emailCheck = /^[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_{|}~-]+)_@(?:[a-z0-9](?:[a-z0-9-]_[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    if (email & email.match(emailCheck) == null) {
        dlgWrapper.style.display = "block";
        dlgEmail.style.display = "flex";
    }
    else {
        $('txtEmail').style.border = "1px solid #CEEAD9";
    }
    // Định dạng ngày tháng
}

