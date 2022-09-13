document.getElementById('apply-bg').addEventListener('click', function () {
  //console.log('apply')
  const friends = document.getElementsByClassName('friend');
  console.log(friends);
  for (const friend of friends) {
    //console.log(friend)
    friend.style.backgroundColor = "blue"
  }
});
document.getElementById('center').addEventListener('click', function () {
  //console.log('centering')
  const third = document.getElementById('third-friend');
  third.style.textAlign = 'center';
});
document.getElementById('add-friend').addEventListener('click', function () {
  //console.log('dding')
  const friendContainer = document.getElementById('friends');
  const friend = document.createElement('div');
  friend.classList.add('friend');
  friend.innerHTML = `
<h3 class="friend-name"> New friend</h3>
<p>something new added</p>

`
  friendContainer.appendChild(friend);
})