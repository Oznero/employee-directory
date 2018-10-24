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
        $('.text').append(`<p>Name: ${employeeList[i].name}</p>`);
        $('.text').append(`<p>Office: ${employeeList[i].officeNum}</p>`);
        $('.text').append(`<p>Phone: ${employeeList[i].phoneNum}</p>`);
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
    const searchIndex = employeeList.findIndex((obj => obj.name == user));
    if (searchIndex !== -1) {
        $('.text').append('Yes');
    } else {
        $('.text').append('No');
    }
}
$('#verify').on('click', verifyUser);

// 5. Update option that allows the user to input name, office number, and phone number and updates the office number and phone number of the employee that matches the input name, and then renders the updated employee list.



// 6. Delete option that deletes the employee with the matching name and then renders the updated employee list
const removeName = function () {
    const user = $('#name').val();
    console.log(employeeList.indexOf(user));
    employeeList.splice(employeeList.indexOf(user), 1);

    $('#name').val('');
    render();
}
$('#delete').on('click', removeName);