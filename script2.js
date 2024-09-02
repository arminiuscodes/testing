function toggleMenu() {
    const navContent = document.querySelector('.nav_content');
    navContent.classList.toggle('active');
}

  function closeMenu(){
    const closeBtn =document.querySelector('#closebtn');
    const navContent = document.querySelector('.nav_content');
    navContent.classList.remove('active');

  }