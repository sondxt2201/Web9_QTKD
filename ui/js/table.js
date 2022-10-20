

import { watch } from "./observer/dep.js";
import { ref } from "./observer/index.js";



const $ = document.getElementById.bind(document)
const btnAdd = $('btnAdd');
const form = $('formEmployee');
// const data = ref(undefined)
// const dataToRender = ref("")

const tableBody = $("employeeList").children[1]

const template = ({
    CustomerCode,
    FullName,
    Gender,
    DateOfBirth,

}) => `
<tr>
    <td data-type="EmployeeCode" class="text__align--center no_padding table-anchor-left"
        style="min-width: 48px;">
        <input type="checkbox">
    </td>
    <td class="text__align--left" style="min-width: 150px;">${CustomerCode}</td>
    <td class="text__align--left" style="min-width: 250px;">${FullName}</td>
    <td class="text__align--left" style="min-width: 120px;">${Gender === 2 ? "Nam" : "Nữ"}</td>
    <td class="text__align--center no_padding" style="min-width: 150px;">${DateOfBirth}</td>
    <td class="text__align--left" style="min-width: 200px;">123456789876</td>
    <td class="text__align--left" style="min-width: 250px;">Nhân viên</td>
    <td class="text__align--left" style="min-width: 250px;">Nhóm kiểm hàng</td>
    <td class="text__align--left" style="min-width: 150px;">Số tài khoản</td>
    <td class="text__align--left" style="min-width: 250px;">Tên ngân hàng</td>
    <td class="text__align--left no-right-border" style="min-width: 180px;">Chi nhánh TK ngân hàng</td>
    <td class="text__align--center no_padding table-anchor-right" style="min-width: 120px;">
        <div class="table__combobox combobox">
            <button href="" class="table__combobox__title button">Sửa</button>
            <div class="table__combobox__dropdown">
                <button class="mi-icon mi-icon-16 mi-table-icon-dropdown"></button>
                <div class="table__combobox__dropdown__option">
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
// console.log("tableBody", tableBody)

async function loadData() {
    const data = await fetch("https://cukcuk.manhnv.net/api/v1/Customers", {
        method: "GET"
    }).then(res => res).then(res => res.json());
    tableBody.innerHTML = data.map(item => template(item)).join("");
}

// watch(() => {
//     // console.log("data", data.value)
//     if (data.value) {
//         dataToRender.value = data.value.map(item => template(item)).join("");
//     }
// })

// watch(() => {
//     tableBody.innerHTML = dataToRender.value


// 
btnAdd.addEventListener('click', loadData, false);



