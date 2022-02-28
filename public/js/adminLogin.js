const matchHandler = async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username && password) {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/admin/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document.getElementById("adminLogin").addEventListener("click", matchHandler);
