document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const characterList = document.querySelectorAll('.character-list li');

    characterList.forEach(character => {
        const characterName = character.querySelector('p').textContent.toLowerCase();
        if (characterName.includes(searchTerm)) {
            character.style.display = 'block';
        } else {
            character.style.display = 'none';
        }
    });
});
