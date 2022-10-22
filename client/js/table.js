/**
 * Tải dữ liệu vào bảng mỗi khi tải trang
 * Author: Sondxt
 */

// Gọi hàm loadData()
window.onload = () => {
    loadData();
}

// Khai báo biến
const $ = document.getElementById.bind(document);
const btnReload = $('btnReload');
const tableBody = $("employeeList").children[1]
const template = ({
    CustomerCode,
    FullName,
    Gender,
    DateOfBirth,
}) => `
        <tr>
            <td data-type="EmployeeCode" class="text-align--center no_padding column-tiny-width">
                <input type="checkbox">
            </td>
            <td class="text-align--left column-medium-width">${CustomerCode}</td>
            <td class="text-align--left column-large-width">${FullName}</td>
            <td class="text-align--left column-small-width">${Gender === 2 ? "Nam" : "Nữ"}</td>
            <td class="text-align--center no_padding column-medium-width">${DateOfBirth}</td>
            <td class="text-align--left column-big-width">123456789876</td>
            <td class="text-align--left column-large-width">Nhân viên</td>
            <td class="text-align--left column-large-width">Nhóm kiểm hàng</td>
            <td class="text-align--left column-medium-width">Số tài khoản</td>
            <td class="text-align--left column-large-width">Tên ngân hàng</td>
            <td class="text-align--left no-right-border olumn-large-width">Chi nhánh TKngân hàng
            </td>
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
        const data = await fetch("https://cukcuk.manhnv.net/api/v1/Customers", {
            method: "GET"
        })
            .then(res => res)
            .then(res => res.json());
        tableBody.innerHTML = data.map(item => template(item)).join("");
    } catch (error) {
        console.log(error)
    }
}
loadData();





