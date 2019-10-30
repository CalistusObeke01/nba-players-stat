const api = 'https://www.balldontlie.io/api/v1/players'
const input = document.querySelector('#searchInput');
const currentYear = document.querySelector('#fetchYear');


const fetchNbaPlayers = () => {
	fetch(`${api}/?search=${input.value}`)
		.then((response) => response.json())
		.then((players) => {
			console.log(players)
			let result = players.data

			let	output = `
						<section id="search-result" class="container">
						<div class="col-lg-12">
								<div class="card card-cascade card-cascade-wider mb-5">
								<div class="card-body">
									<h3 class="text-center text-uppercase">Player Bio</h3>
									<table class="table">
										<thead class="thead-light">
											<tr>
												<th scope="col">No.</th>
												<th scope="col">Full Name</th>
												<th scope="col">Team</th>
												<th scope="col">City</th>
											</tr>
										</thead>
										<tbody>
				
				`
				result.forEach((player, index) => {
					if(index == null) {
						console.log('errrrrrrrrrr')
					}

					return output += `
											<tr>
												<th scope="row">${index + 1}</th>
												<td>${player.first_name}  ${player.last_name}</td>
												<td>${player.team.full_name}</td>
												<td>${player.team.city}</td>
											</tr>
									
					`
				})
					output += `
										</tbody>
										</table>
									</div>
									</div>
								</div>
							</section>
				`
				document.querySelector('#response').innerHTML = output
				document.querySelector('#services').style.display = "none";
		})
		.catch((error) => console.error(error))
}

input.addEventListener('keydown', fetchNbaPlayers)

document.addEventListener('DOMContentLoaded', () => {
	const fetchCurrYear = new Date()
	currentYear.innerHTML = fetchCurrYear.getFullYear()
})
