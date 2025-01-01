document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarOffsetTop = sidebar.offsetTop;
  
    window.addEventListener('scroll', function() {
      if (window.pageYOffset >= sidebarOffsetTop) {
          sidebar.classList.add('sidebar--sticky');
      } else {
          sidebar.classList.remove('sidebar--sticky');
      }
    });
  });