// script.js
const getUsersBtn = document.getElementById('getUsersBtn');
const loader = document.getElementById('loader');
const userGrid = document.getElementById('userGrid');

getUsersBtn.addEventListener('click', async() => {
    loader.style.display = 'block';
    getUsersBtn.disabled = true;

    try {
        const response = await fetch('https://reqres.in/api/users?page=1');
        const data = await response.json();
        const users = data.data;

        userGrid.innerHTML = '';

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            const avatar = document.createElement('img');
            avatar.src = user.avatar;
            avatar.alt = `${user.first_name} ${user.last_name} Avatar`;

            const userName = document.createElement('p');
            userName.innerText = `${user.first_name} ${user.last_name}`;

            userCard.appendChild(avatar);
            userCard.appendChild(userName);

            userGrid.appendChild(userCard);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    } finally {
        loader.style.display = 'none';
        getUsersBtn.disabled = false;
    }
});