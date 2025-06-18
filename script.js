// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Dark mode toggle
const toggleDark = document.getElementById("darkToggle");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Typewriter effect
const typewriterEl = document.getElementById("typewriter");
const text = "Sachin Pandey";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typewriterEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 120);
  }
}
typeWriter();

// GitHub User Search
const searchBtn = document.getElementById("searchBtn");
const usernameInput = document.getElementById("usernameInput");
const githubResult = document.getElementById("githubResult");

searchBtn.addEventListener("click", async () => {
  const username = usernameInput.value.trim();
  if (!username) {
    githubResult.innerHTML = `<p style="color: red;">Please enter a username.</p>`;
    return;
  }

  githubResult.innerHTML = "Loading...";

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error("User not found");
    const data = await res.json();

    githubResult.innerHTML = `
      <img src="${data.avatar_url}" alt="avatar" style="width: 96px; height: 96px; border-radius: 50%; border: 1px solid #ccc; margin-bottom: 0.5rem;">
      <p><strong>Name:</strong> ${data.name || "N/A"}</p>
      <p><strong>Username:</strong> <a href="${data.html_url}" target="_blank" style="color: #4f46e5; text-decoration: underline;">@${data.login}</a></p>
      <p><strong>Bio:</strong> ${data.bio || "No bio"}</p>
      <p><strong>Repos:</strong> ${data.public_repos}</p>
      <p><strong>Joined:</strong> ${new Date(data.created_at).toDateString()}</p>
    `;
  } catch (error) {
    githubResult.innerHTML = `<p style="color: red;">User not found or error fetching data.</p>`;
    console.error(error);
  }
});
