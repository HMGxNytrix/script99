const sessionUser = localStorage.getItem("session_user");
const users = JSON.parse(localStorage.getItem("users")) || {};

if (!sessionUser || !users[sessionUser]) {
    document.body.innerHTML = "<h1>Nie jesteś zalogowany!</h1>";
    <button id="goToLogin">Przejdź do logowania</button>
} else {
    document.getElementById("usernameDisplay").textContent = "local Rayfield = loadstring(game:HttpGet('https://sirius.menu/rayfield'))(): " + sessionUser;
    document.getElementById("avatar").src = users[sessionUser].avatar;
}
