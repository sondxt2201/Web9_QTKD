/**
 * Các thao tác với formEmployee
 * Author: Sondxt
 */

// Gọihàm initFormEvents()
window.onload = () => {
    initFormEvents();
}

// Khởi tạo các sự kiện
function initFormEvents() {
    // Mở form
    openForm();
    // Đóng form
    closeForm();
}

// Khai báo biến
const $ = document.getElementById.bind(document)
const btnAdd = $('btnAdd');
const form = $('formEmployee');
const btnEsc = $('btnEsc');
const btnAddtodatabase = $('btnAddtodatabase');

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
        btnEsc.addEventListener('click', () => {
            form.style.display = 'none';
        });
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
    fetch("https://cukcuk.manhnv.net/api/v1/Customers", {
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
    var employeeCode = $("txtEmployeeCode").value;
    var fullName = $("txtFullName").value;
    var dlgWrapper = $("dialog-wrapper");
    var dlgEmployeeCode = $('dialog-warning-employeeCode')
    var btnEsc1 = $('btnEsc1')

    if (!employeeCode) {
        // Đổi màu border
        $('txtEmployeeCode').style.border = "2px solid #000";

        // Hiển thị thông báo
        dlgWrapper.style.display = "flex";
        dlgEmployeeCode.style.display = "flex";
        btnEsc1.addEventListener('click', () => {
            dlgEmployeeCode.style.display = 'none';
            dlgWrapper.style.display = 'none';
        });
    }
    else {
        $('txtEmployeeCode').style.border = "1px solid #ccc";

    }
    // Các thông tin cần đúng định dạng

    // Định dạng ngày tháng
}

