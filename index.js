// The following code starts Mock Service Worker tool which allows you to simulate a backend (an API) for building your apps that talk to a remote service. You can visit https://mswjs.io for details on this utility and check src/api/routes.js for a sample API route that you can edit/create as needed to simulate a real world API. This simulated backend will not be part of the completed application (built edition) and you must use a real world backend built using Node.js + Express or Java + Spring Boot to provide such a service.

// If you do not require a simulated backend, you can remove the code shown below.

const apiStatus = document.querySelector('#api-status');

if (import.meta.env.DEV) {
  import('../api/browser')
    .then(({ worker }) => worker.start())
    .then(() => fetch('/'))
    .then((res) => res.json())
    .then((res) => (apiStatus.innerText = res.message));
}

const wishlist = [];

function addToWishlist(artworkTitle) {
  if (!wishlist.includes(artworkTitle)) {
    wishlist.push(artworkTitle);
    updateWishlistCount();
    alert('Artwork added to wishlist!');
  } else {
    alert('Artwork is already in the wishlist.');
  }
}

function updateWishlistCount() {
  const wishlistCount = document.getElementById('wishlist-count');
  wishlistCount.textContent = wishlist.length;
  wishlistCount.style.display = wishlist.length > 0 ? 'inline' : 'none';
}

function toggleWishlist() {
  console.log('Wishlist clicked!');
  console.log('Wishlist items:', wishlist);
}

document.addEventListener('DOMContentLoaded', function () {
  const searchIcon = document.getElementById('search-icon');
  const searchInput = document.getElementById('search-input');

  searchIcon.addEventListener('click', function () {
      searchInput.classList.toggle('hidden');
      if (!searchInput.classList.contains('hidden')) {
          searchInput.focus();
      }
  });
});

