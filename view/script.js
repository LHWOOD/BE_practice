async function newUser(event) {
  event.preventDefault();

  const password = document.querySelector("#password").value.trim();

  const response = await fetch(`http://localhost:3001/api/users`, {
    method: "POST",
    body: JSON.stringify({
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

document.querySelector("#submitForm").addEventListener("submit", newUser);
