//hide text elements on the page
/*
(function() {
    $('.text').hide();
})();
*/
// 1. Render all of the names in `employeeList` individually in paragraph tags to the div with the class `text`.
const render = function () {
    $('.text').empty();

    for (let i = 0; i < employeeList.length; i++) {
        $('.text').append(`<p>${employeeList[i].name}</p>`);
        $('.text').append(`<p>${employeeList[i].officeNum}</p>`);
        $('.text').append(`<p>${employeeList[i].phoneNum}</p>`);
    }
}

// 2. Render all of the names in 'employee list' when view button is pressed
const view = function () {
    render();
}
$('#view').on('click', view);

//  3. Add option that allows users to input name, office number, and phone number and then renders the updated employee list.
const getInputVal = function () {
    const nameVal = $('#name').val();
    const officeNum = $('#officeNum').val();
    const phoneNum = $('#phoneNum').val();
    employeeList.push({ name: nameVal, officeNum: officeNum, phoneNum: phoneNum });

    console.log(employeeList);

    //Clear the fields
    $('#name').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');
    render();
}
$('#add').on('click', getInputVal);

// 4. Verify option that allows users to input a name and renders yes if the employee exists and no otherwise
const verifyUser = function () {
    const user = $('#name').val();
    for(let i = 0; i < employeeList.length; i++){
        for(key in employeeList[i]){
            if(employeeList[i][key.indexOf(user)!== -1]){
                document.write('Yes');
            }else{
                document.write('No');
            }
        }
    }
    console.log(`user is: ${user} and array position is ${userSearch}`);
}
$('#verify').on('click', verifyUser);