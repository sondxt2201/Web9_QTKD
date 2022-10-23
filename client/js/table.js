/**
 * Tải dữ liệu vào bảng mỗi khi tải trang
 * Author: Sondxt
 */
// Gọi hàm loadData()
loadData();

async function loadData() {
    try {
        $('#loading').show();
        let data = await axios.get('https://amis.manhnv.net/api/v1/Employees')
            .then(function (response) {
                // Duyệt từng đối tượng  trong mảng
                for (const employee of response.data) {
                    // Khai báo dữ liệu
                    let employeeCode = employee.EmployeeCode;
                    let fullName = employee.EmployeeName;
                    let gender = employee.Gender;
                    let dob = employee.DateOfBirth;
                    let idNumber = employee.IdentityNumber;
                    let position = employee.PositionName;
                    let department = employee.DepartmentName;
                    let bankNumber = employee.BankAccountNumber;
                    let bankName = employee.BankName;
                    let bankBranch = employee.BankBranchName;



                    // Định dạng ngày tháng theo kiểu Ngày - Tháng - Năm
                    try { 
                            if (dob) {
                            dob = new Date(dob)
                            //Lấy ra ngày
                            let date = dob.getDate();
                            // Lấy ra tháng 
                            let month = dob.getMonth() + 1;
                            // Lấy ra năm
                            let year = dob.getFullYear();
                            // Trả về giá trị là ngày/tháng/năm
                            dob = `${date} / ${month} / ${year}`;
                        } else {
                            dob = "";
                        }
                    } catch (error) {
                        console.log(error);
                    }

                    // Định dạng dữ liệu trên bảng
                    try {
                        if (!position) {
                            position = " ";
                        } else {
                            position = this.position;
                        }

                        if (!bankNumber) {
                            bankNumber = " ";
                        } else {
                            bankNumber = employee.BankAccountNumber;
                        }

                        if (!bankName) {
                            bankName = " ";
                        } else {
                            bankName = employee.BankName;
                        }

                        if (!bankBranch) {
                            bankBranch = " ";
                        } else {
                            bankBranch = employee.BankBranchName;
                        }

                    } catch (error) {
                        console.log(error)
                    }

                    // Tạo chuỗi HTML
                    var tableData =  `
                        <tr>
                            <td data-type="EmployeeCode" class="text-align--center no_padding column-tiny-width">
                            <input type="checkbox">
                            </td>
                            <td class="text-align--left column-medium-width">${employeeCode}</td>
                            <td class="text-align--left column-large-width">${fullName}</td>
                            <td class="text-align--left column-small-width">${gender === 0 ? "Nam" : "Nữ"}</td>
                            <td class="text-align--center no_padding column-medium-width">${dob}</td>
                            <td class="text-align--left column-big-width">${idNumber}</td>
                            <td class="text-align--left column-large-width">${position}</td>
                            <td class="text-align--left column-large-width">${department}</td>
                            <td class="text-align--left column-medium-width">${bankNumber}</td>
                            <td class="text-align--left column-large-width">${bankName}</td>
                            <td class="text-align--left no-right-border column-large-width">${bankBranch}</td>
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

                    // Append chuỗi HTML
                    // console.log(tableData)
                    $("#Data").append(tableData);
                    $('#loading').hide();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    } catch (error) {
        console.log(error)
    }
}









