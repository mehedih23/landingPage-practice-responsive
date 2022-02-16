// Section title //
const sectionTitle = document.getElementsByClassName('section-title');
for (const sectiontitle of sectionTitle) {
    sectiontitle.style.color = 'gray';
};

// Players Bakcground //
const players = document.getElementsByClassName('players');
for (const player of players) {
    player.style.backgroundColor = 'rgba(106, 161, 184, 0.23)';
};

// Add Item //
document.getElementById('btn').addEventListener('click', function () {
    const ul = document.getElementById("unordered-list");
    const li = document.createElement('li');
    li.innerText = 'New Item Added';
    ul.appendChild(li);

});
