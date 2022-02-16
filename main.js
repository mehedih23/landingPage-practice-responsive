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
    li.classList.add('item-list');
    ul.appendChild(li);

    const itemList = document.getElementsByClassName('item-list');
    if (itemList.length == 8) {
        document.getElementById('btn').setAttribute('disabled', '');
    }
    /*   for (const itemL of itemList) {
          // debugger;
          let element = itemL;
  
          if (element == 5) {
              // document.getElementById('btn').setAttribute('disabled', '');
  
          }
          break;
      } */


});

// Add Number //
document.getElementById('add-count').addEventListener('click', function () {

    const addCount = document.getElementById('count');
    let addCountValue = addCount.value;
    addCountValue = parseInt(addCountValue) + 1;
    addCount.value = addCountValue;


    if (addCount.value == 5) {
        document.getElementById('add-count').setAttribute('disabled', '');
    }

})
