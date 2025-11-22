const bannedUser = localStorage.getItem("banned_user");

if (bannedUser === "true") {
    document.body.innerHTML = `
        <h1>Blacklisted - Dostęp zabroniony</h1>
        <p>Jesteś na czarnej liście, więc nie możesz przeglądać stron.</p>
    `;
}
