
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (query) {
        
        window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search term.');
    }
});