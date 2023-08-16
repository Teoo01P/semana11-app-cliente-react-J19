const React = require('react');
const ReactDOM = require('react-dom');

const client = require('./client');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {libros: []};
	}
	componentDidMount() {
		client({method: 'GET', path: '/api/libros'}).done(response => {
			this.setState({libros: response.entity._embedded.libros});
		});
	}
	render() {
		return (
			<LibroList libros={this.state.libros}/>
		)
	}
}

class LibroList extends React.Component{
	render() {
		const libros = this.props.libros.map(libro =>
			<Libro key={libro._links.self.href} libro={libro}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoria</th>
						<th>Descripcion</th>
					</tr>
					{libros}
				</tbody>
			</table>
		)
	}
}

class Libro extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.libro.nombre}</td>
				<td>{this.props.libro.categoria}</td>
				<td>{this.props.libro.descripcion}</td>
			</tr>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('react'))
