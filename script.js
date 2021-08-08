$('#pagination-demo').twbsPagination({
  totalPages: 3,
  startPage: 1,
  visiblePages: 3,
  initiateStartPageClick: true,
   hideOnlyOnePage: false,
   href: false,
   pageVariable: '{{page}}',
   totalPagesVariable: '{{total_pages}}',
   page: null,
   first: null,
   prev: '&laquo;',
   next: '&raquo;',
   last: null,
   loop: true,
   beforePageClick: null,
   onPageClick: function (event, page) {
   $('.page-active').removeClass('page-active');
   $('#page'+page).addClass('page-active');
 },
   paginationClass: 'pagination',
   nextClass: 'page-item next',
   prevClass: 'page-item prev',
   pageClass: 'page-item',
   activeClass: 'active',
   anchorClass: 'page-link'  
});
