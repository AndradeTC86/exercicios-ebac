document.addEventListener("DOMContentLoaded", function () {
    const username = 'AndradeTC86'
    const url = `https://api.github.com/users/${username}`

    const avatarElement = document.getElementById('avatar')
    const nameElement = document.getElementById('name')
    const usernameElement = document.getElementById('username')
    const repositoriesElement = document.getElementById('repositories')
    const followersElement = document.getElementById('followers')
    const followingElement = document.getElementById('following')
    const linkElement = document.getElementById('link')

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText)
            }
            return response.json()
        })
        .then(data => {
            avatarElement.src = data.avatar_url
            nameElement.innerText = data.name
            usernameElement.innerText = data.login
            repositoriesElement.innerText = data.public_repos
            followersElement.innerText = data.followers
            followingElement.innerText = data.following
            linkElement.href = data.html_url
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error)
        })
})