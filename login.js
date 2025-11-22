let users = JSON.parse(localStorage.getItem("users")) || {};

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Pole nie jest wypełnione!");
        return;
    }

    // Rejestracja, jeśli nie istnieje
    if (!users[username]) {
        users[username] = {
            password: password,
            avatar: getRandomAvatar()
        };
        localStorage.setItem("users", JSON.stringify(users));
        alert("Zarejestrowano nowe konto!");
    }

    // Logowanie
    if (users[username].password === password) {
        localStorage.setItem("session_user", username);
        alert("Logowanie poprawne!");

        window.location.href = "index.html";
    } else {
        alert("Złe hasło!");
    }
}

document.getElementById("loginBtn").addEventListener("click", login);

// ↓ GENEROWANIE LOSOWEGO AVATARA
function getRandomAvatar() {
    const avatars = [
        "https://i.pravatar.cc/200?img=1",
        "https://i.pravatar.cc/200?img=6",
    ];
    return avatars[Math.floor(Math.random() * avatars.length)];
}
