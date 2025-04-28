const blogContainer = document.getElementById('blogContainer');
const searchInput = document.getElementById('searchInput');

function displayPosts(filteredPosts) {
  blogContainer.innerHTML = '';

  filteredPosts.forEach(post => {
    const blogCard = document.createElement('div');
    blogCard.className = 'blog-card';

    blogCard.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="content">
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a href="post.html?id=${post.id}">Read More</a>
      </div>
    `;

    blogContainer.appendChild(blogCard);
  });
}

// Initial display
displayPosts(posts);

// Search functionality
searchInput.addEventListener('input', function(e) {
  const searchTerm = e.target.value.toLowerCase();
  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm));
  displayPosts(filteredPosts);
});
