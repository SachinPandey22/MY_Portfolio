import React, { useState } from 'react';

function GitHubLookup() {
  const [username, setUsername] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = async () => {
    if (!username) {
      setResult('<p style="color: red;">Please enter a username.</p>');
      return;
    }

    setResult("Loading...");

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();

      setResult(`
        <img src="${data.avatar_url}" alt="avatar" style="width: 96px; height: 96px; border-radius: 50%; border: 1px solid #ccc; margin-bottom: 0.5rem;">
        <p><strong>Name:</strong> ${data.name || "N/A"}</p>
        <p><strong>Username:</strong> <a href="${data.html_url}" target="_blank" style="color: #4f46e5; text-decoration: underline;">@${data.login}</a></p>
        <p><strong>Bio:</strong> ${data.bio || "No bio"}</p>
        <p><strong>Repos:</strong> ${data.public_repos}</p>
        <p><strong>Joined:</strong> ${new Date(data.created_at).toDateString()}</p>
      `);
    } catch (error) {
      setResult('<p style="color: red;">User not found or error fetching data.</p>');
      console.error(error);
    }
  };

  return (
    <section id="githubSearch" className="github-lookup">
      <h2 className="section-heading">GitHub User Lookup</h2>
      <div className="github-form">
        <input 
          type="text" 
          placeholder="Enter GitHub username" 
          className="input-field" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch} className="btn-primary">Search</button>
      </div>
      <div 
        className="github-result" 
        dangerouslySetInnerHTML={{ __html: result }}
      />
    </section>
  );
}

export default GitHubLookup;
