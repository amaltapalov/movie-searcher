import React from "react";

class MovieRow extends React.Component {
	viewMovie = () => {
		// console.log("Trying to view a movie");
		// console.log(this.props.movie.title);
		const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
		window.location.href = url;
	};
	render() {
		return (
			<table>
				<tbody>
					<tr>
						<td>
							<img
								width="100"
								src={this.props.movie.poster_src}
								alt="poster"
							/>
						</td>
						<td>
							<h3>{this.props.movie.title}</h3>
							<p>{this.props.movie.overview}</p>
							<input
								type="button"
								onClick={this.viewMovie}
								value="View"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default MovieRow;
