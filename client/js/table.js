/**
 * Tải dữ liệu vào bảng mỗi khi tải trang
 * Author: Sondxt
 */

// Gọi hàm loadData()
loadData();
const $ = document.getElementById.bind(document);
const $$ = document.getElementsByClassName.bind(document);

// Khai báo biến
const btnReload = $('btnReload');
const tableBody = $("employeeList").children[1]
const template = ({
    EmployeeCode,
    EmployeeName,
    Gender,
    DateOfBirth,
    IdentityNumber,
    PositionName,
    DepartmentName,
    BankAccountNumber,
    BankName,
    BankBranchName,
}) => `
        <tr>
            <td data-type="EmployeeCode" class="text-align--center no_padding column-tiny-width">
                <input type="checkbox">
            </td>
            <td class="text-align--left column-medium-width">${EmployeeCode}</td>
            <td class="text-align--left column-large-width">${EmployeeName}</td>
            <td class="text-align--left column-small-width">${Gender === 0 ? "Nam" : "Nữ"}</td>
            <td class="text-align--center no_padding column-medium-width">${DateOfBirth}</td>
            <td class="text-align--left column-big-width">${IdentityNumber}</td>
            <td class="text-align--left column-large-width">${PositionName}</td>
            <td class="text-align--left column-large-width">${DepartmentName}</td>
            <td class="text-align--left column-medium-width">${BankAccountNumber}</td>
            <td class="text-align--left column-large-width">${BankName}</td>
            <td class="text-align--left no-right-border column-large-width">${BankBranchName}</td>
            <td class="text-align--center no_padding table-anchor-right column-small-width">
                <div class="table-combobox combobox">
                    <button href="" class="table-combobox-title button">Sửa</button>
                    <div class="table-combobox-dropdown">
                        <button class="mi-icon mi-icon-small mi-table-icon-dropdown"></button>
                        <div class="table-combobox-dropdown-option">
                            <ul class="table-option-list">
                                <li class="duplicate-option">Nhân bản</li>
                                <li class="delete-option">Xoá</li>
                                <li class="disable-option">Ngưng sử dụng</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </td>
        </tr> 
    `

/**
 * Get data từ api 
 * Date: 21/10/2022
 */
async function loadData() {
    try {
        const data = await fetch("https://amis.manhnv.net/api/v1/Employees", {
            method: "GET"
        })
            .then(res => res)
            .then(res => res.json())
            tableBody.innerHTML = data.map(item => template(item)).join("")
            // console.log(data)
    } catch (error) {
        console.log(error)
    }
}





