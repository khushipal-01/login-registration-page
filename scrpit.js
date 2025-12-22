let isLogin = true;

const formTitle = document.getElementById("formTitle");
const toggleForm = document.getElementById("toggleForm");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const password = document.getElementById("password");
const togglePass = document.getElementById("togglePass");

toggleForm.addEventListener("click", () => {
  isLogin = !isLogin;

  formTitle.textContent = isLogin ? "Login" : "Register";
  submitBtn.textContent = isLogin ? "Login" : "Register";
  toggleForm.textContent = isLogin ? "Register" : "Login";
  message.textContent = "";
});

togglePass.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});

submitBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const pass = password.value;

  if (username === "" || pass === "") {
    message.style.color = "yellow";
    message.textContent = "⚠️ All fields are required!";
    return;
  }

  if (pass.length < 6) {
    message.style.color = "orange";
    message.textContent = "⚠️ Password must be at least 6 characters!";
    return;
  }

  submitBtn.textContent = "Processing...";
  submitBtn.disabled = true;

  setTimeout(() => {
    message.style.color = "#00ff9d";
    message.textContent = isLogin
      ? "✅ Login successful!"
      : "🎉 Registration successful!";

    submitBtn.textContent = isLogin ? "Login" : "Register";
    submitBtn.disabled = false;
  }, 1500);
});
