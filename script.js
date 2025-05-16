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
  // DARK MODE TOGGLE
const toggleDark = document.getElementById("darkToggle");

toggleDark.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
// TYPEWRITER EFFECT
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

// GITHUB USER SEARCH
const searchBtn = document.getElementById("searchBtn");
const usernameInput = document.getElementById("usernameInput");
const githubResult = document.getElementById("githubResult");

searchBtn.addEventListener("click", async () => {
  const username = usernameInput.value.trim();
  if (!username) {
    githubResult.innerHTML = `<p class="text-red-500">Please enter a username.</p>`;
    return;
  }

  githubResult.innerHTML = "Loading...";

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error("User not found");
    const data = await res.json();

    githubResult.innerHTML = `
      <img src="${data.avatar_url}" alt="avatar" class="w-24 h-24 mx-auto rounded-full border mb-2">
      <p><strong>Name:</strong> ${data.name || "N/A"}</p>
      <p><strong>Username:</strong> <a href="${data.html_url}" class="text-indigo-500 hover:underline" target="_blank">@${data.login}</a></p>
      <p><strong>Bio:</strong> ${data.bio || "No bio"}</p>
      <p><strong>Repos:</strong> ${data.public_repos}</p>
      <p><strong>Joined:</strong> ${new Date(data.created_at).toDateString()}</p>
    `;
  } catch (error) {
    githubResult.innerHTML = `<p class="text-red-500">User not found or error fetching data.</p>`;
    console.error(error);
  }
});

