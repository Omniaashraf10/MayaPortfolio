document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) { 
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.getElementById("topBtn");

  // إظهار / إخفاء الزرار حسب الـ scroll
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  // عند الضغط يطلع لفوق
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formAlert = document.getElementById("formAlert");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      return showAlert("⚠️ Please enter your name.", "danger");
    }
    if (!emailPattern.test(email)) {
      return showAlert("⚠️ Please enter a valid email address.", "danger");
    }
    if (!message) {
      return showAlert("⚠️ Please write a message before submitting.", "danger");
    }

    // لو كل حاجة تمام
    showAlert("✅ Your message has been sent successfully!", "success");
    form.reset();
  });

  // دالة إظهار الرسالة
  function showAlert(message, type = "success") {
    formAlert.textContent = message;
    formAlert.className = `alert alert-${type} mt-3`; // يستخدم ألوان Bootstrap
    formAlert.style.display = "block";

    // يخفي الرسالة بعد 5 ثواني
    clearTimeout(formAlert._timeout);
    formAlert._timeout = setTimeout(() => {
      formAlert.style.display = "none";
    }, 5000);
  }
});
