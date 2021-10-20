async function newUser(event) {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  console.log(typeof username);

  const response = await fetch(`http://localhost:3001/api/users`, {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(typeof username);
}

document.querySelector("#submitForm").addEventListener("submit", newUser);
