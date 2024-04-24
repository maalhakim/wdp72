// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Ambil tombol pembuka modal
var openModalBtn = document.getElementById('open-modal');
// Ambil tombol penutup modal
var closeModalBtn = document.getElementById('close-modal');
// Ambil elemen modal
var modal = document.getElementById('modal');

// Event listener untuk pembuka modal
openModalBtn.addEventListener('click', function () {
  modal.classList.remove('hidden');
  modal.classList.add('block');
});

// Event listener untuk penutup modal
closeModalBtn.addEventListener('click', function () {
  modal.classList.remove('block');
  modal.classList.add('hidden');
});
