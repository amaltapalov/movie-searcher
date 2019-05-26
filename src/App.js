import React from "react";
import $ from "jquery";
import MovieRow from "./MovieRow";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		// const movies = [
		// 	{
		// 		id: 0,
		// 		title: "Avengers Infinity War",
		// 		poster_src:
		// 			"https://i.pinimg.com/originals/86/3d/0f/863d0ff9daf8d60dcf9d2aa1041a0ed7.jpg",
		// 		overview:
		// 			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, iusto voluptatibus? Eius excepturi saepe optio veritatis, architecto sapiente minus, veniam, ea aspernatur natus ipsam ullam quis repudiandae praesentium! Aut, distinctio."
		// 	},
		// 	{
		// 		id: 1,
		// 		poster_src: "https://pbs.twimg.com/media/DZ9I30EVwAA9tuR.jpg",
		// 		title: "The Avengers",
		// 		overview: "This is my second"
		// 	}
		// ];

		// var movieRows = [];
		// movies.forEach(movie => {
		// 	const movieRow = <MovieRow movie={movie} />;
		// 	movieRows.push(movieRow);
		// });

		// this.state = { rows: movieRows };

		this.performSearch("avengers");
	}

	performSearch = searchTerm => {
		const urlString =
			"http://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" +
			searchTerm;
		$.ajax({
			url: urlString,
			success: searchResults => {
				const results = searchResults.results;

				const movieRows = [];

				results.forEach(movie => {
					movie.poster_src =
						"https://image.tmdb.org/t/p/w185" + movie.poster_path;
					const movieRow = <MovieRow key={movie.id} movie={movie} />;
					movieRows.push(movieRow);
				});

				this.setState({ rows: movieRows });
			},
			error: (xhr, status, err) => {
				console.log("Failed to fetch data");
			}
		});
	};

	searchChangeHandler = event => {
		console.log(event.target.value);
		const searchTerm = event.target.value;
		this.performSearch(searchTerm);
	};

	render() {
		return (
			<div className="App">
				<table className="tableBar">
					<tbody>
						<tr>
							<td>
								<img width="50" src="logo.svg" alt="Logo" />
							</td>
							<td width="8" />
							<td>
								<h2>Movie DB Search</h2>
							</td>
						</tr>
					</tbody>
				</table>
				<input
					placeholder="Enter search term "
					type="text"
					style={{
						fontSize: 24,
						display: "block",
						width: "99%",
						paddingTop: 8,
						paddingBottom: 8,
						paddingLeft: 16
					}}
					onChange={this.searchChangeHandler}
				/>
				{this.state.rows}
			</div>
		);
	}
}

export default App;
