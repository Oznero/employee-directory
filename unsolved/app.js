// 1. Render all of the names in `employeeList` individually in paragraph tags to the div with the class `content`.
const render = function() {
    $('.text').empty();
  
    for( let i = 0; i < employeeList.length; i++ ) {
      $('.text').append(`<p>${employeeList[i].name}</p>`);
      $('.text').append(`<p>${employeeList[i].officeNum}</p>`);
      $('.text').append(`<p>${employeeList[i].phoneNum}</p>`);
    }
  }
  render();