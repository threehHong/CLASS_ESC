let rowsPerPage = 10;
let rows = $('.table tbody tr');
let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount/rowsPerPage);
let numbers = $('#numbers');

let prevPageBtn = $(".pagination .fa-angle-left");
let nextPageBtn = $(".pagination .fa-angle-right");

let maxPageNum = 5;
let pageActiveIdx = 0; //현재 보고 있는 페이지그룹 번호


for(let i = 1; i <= pageCount; i++) {
    numbers.append(`<li> <a href=""> ${i} </a> </li>`)
    
}

let numberBtn = numbers.find('a');


numberBtn.click((e) => {
    e.preventDefault();
    displayRow($(e.target).parent().index());
})

function displayRow(num) {
    // 자도 전체 hide?
    rows.hide();

    let start = num * rowsPerPage;
    let end = start + rowsPerPage;

    let rowsArray = [...rows];
    
    rows.slice(start, end).show();

    numberBtn.removeClass('active');

    numberBtn.eq(num).addClass('active');

}

function displayPage(num) {
    //모든 페이지네이션 안보이도록
    numberBtn.hide();

    let totalPageCount = Math.ceil(pageCount / maxPageNum);
    let start = num * maxPageNum;
    let end = start + maxPageNum;
    numberBtn.slice(start, end).show();
  
    if (pageActiveIdx === 0) {
      prevPageBtn.hide();
    } else {
      prevPageBtn.show();
    }
    if (pageActiveIdx === totalPageCount - 1) {
      nextPageBtn.hide();
    } else {
      nextPageBtn.show();
    }
  }

  nextPageBtn.click(() => {
    ++pageActiveIdx;
    displayRow(pageActiveIdx * maxPageNum);
    displayPage(pageActiveIdx);
  });
  
  prevPageBtn.click(() => {
    --pageActiveIdx;
    displayRow(pageActiveIdx * maxPageNum);
    displayPage(pageActiveIdx);
  });
  
  displayRow(0);
  displayPage(0);

