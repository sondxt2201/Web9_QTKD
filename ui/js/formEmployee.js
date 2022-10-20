/**
 * Các thao tác với formEmployee
 * Author: Sondxt
 */



/**
 * Mở formEmployee
 * Date: 18/10/2022
 */
const btnAdd = document.getElementById('btnAdd');
const form = document.getElementById('formEmployee');
 const btnEsc = document.getElementById('btnEsc');

btnAdd.addEventListener('click', () => {
    if (form.style.display === 'none') {
    //  SHOWS the form
    form.style.display = 'flex';
    } else {
    // HIDES the form
    form.style.display = 'none';
    }
});

/**
 * Tắt formEmployee khi nhấn vào icon X 
 * Date: 18/10/2022
 */
 btnEsc.addEventListener('click', () => {
     form.style.display = 'none';
 })