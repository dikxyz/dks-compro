// ========================================
// PT DUTA KENCANA SEJAHTERA
// Custom JavaScript
// ========================================

console.log("Website PT Duta Kencana Sejahtera berhasil dimuat!");


// ========================================
// FUNGSI CONTOH
// ========================================

function sapaPengunjung() {
  alert("Selamat datang di website kami!");
}


// ========================================
// MOBILE MENU
// ========================================

const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");


// Buka / tutup menu
mobileMenuButton.addEventListener("click", function () {

  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    mobileMenuButton.innerHTML = "☰";
    mobileMenuButton.setAttribute("aria-label", "Open navigation menu");
  } else {
    mobileMenuButton.innerHTML = "✕";
    mobileMenuButton.setAttribute("aria-label", "Close navigation menu");
  }

});


// Tutup menu setelah memilih menu
mobileMenuLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    mobileMenu.classList.add("hidden");

    mobileMenuButton.innerHTML = "☰";
    mobileMenuButton.setAttribute("aria-label", "Open navigation menu");

  });

});