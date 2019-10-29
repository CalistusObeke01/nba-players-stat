const api = 'https://www.balldontlie.io/api/v1/players'
const input = document.querySelector('#searchInput');

const fetchNbaPlayers = () => {
	fetch(`${api}/?search=${input.value}`)
		.then((response) => response.json())
		.then((players) => {
			console.log(players)
			let result = players.data

			let output = ''
				output += '<ol>'

				result.forEach((player) => {
					return output += `
						<li>
							<b>Full name:</b> ${player.first_name}  ${player.last_name} <br>
							<b>Team:</b> ${player.team.full_name} <br>
							<b>City:</b> ${player.team.city}<br>
						</li>
					`
				})

				output += '</ol>'
				document.querySelector('#response').innerHTML = output
		})
		.catch((error) => console.error(error))
}

input.addEventListener('keydown', fetchNbaPlayers)
