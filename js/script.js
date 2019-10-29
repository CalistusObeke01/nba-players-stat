const api = 'https://www.balldontlie.io/api/v1/players'
const input = document.querySelector('#searchInput');

const fetchNbaPlayers = () => {
	fetch(`${api}/?search=${input.value}`)
		.then((response) => response.json())
		.then((players) => {
			console.log(players)
			let result = players.data

			let output = '<h2>Lists of Players</h2>'
				output += '<ol>'

				result.forEach((player) => {
					return output += `
						<li>
							${player.first_name}  ${player.last_name} <br>
							Team: ${player.id}
						</li>
					`
				})

				output += '</ol>'
				document.querySelector('#response').innerHTML = output
		})
		.catch((error) => console.error(error))
}

input.addEventListener('keydown', fetchNbaPlayers)
