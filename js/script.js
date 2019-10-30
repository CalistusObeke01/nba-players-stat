const api = 'https://www.balldontlie.io/api/v1/players'
const input = document.querySelector('#searchInput');
const currentYear = document.querySelector('#fetchYear');


const fetchNbaPlayers = () => {
	fetch(`${api}/?search=${input.value}`)
		.then((response) => response.json())
		.then((players) => {
			console.log(players)
			let result = players.data

			let output = ''
				output += '<ol>'

				result.forEach((player) => {
					if(!player.first_name === '' || !player.last_name === '') {
						output += `<p>Search not found</p>`
					}
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
				// const none = document.querySelector('#services')

				// document.document.querySelector('selector');.style.display = 'none'
		})
		.catch((error) => console.error(error))
}

input.addEventListener('keydown', fetchNbaPlayers)

document.addEventListener('DOMContentLoaded', () => {
	const fetchCurrYear = new Date()
	currentYear.innerHTML = fetchCurrYear.getFullYear()
})

