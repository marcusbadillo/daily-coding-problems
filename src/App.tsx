import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	withRouter
} from "react-router-dom";

import Header from "./component/share/Header";
import Day from "./component/share/Day";

const Home = (props: any) => {
	return <h2>Home {props.match.projectID}</h2>;
};

function About() {
	return <h2>About</h2>;
}

function Topic({ match }: any) {
	return <h3>Requested Param: {match.params.id}</h3>;
}
function Topics({ match }: any) {
	return (
		<div>
			<h2>Topics</h2>

			<ul>
				<li>
					<Link to={`${match.url}/components`}>Components</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
				</li>
			</ul>

			<Route path={`${match.path}/:id`} component={Topic} />
			<Route
				exact
				path={match.path}
				render={() => <h3>Please select a topic.</h3>}
			/>
		</div>
	);
}

function App() {
	return (
		<Router>
			<div className="app-wrap">
				<Header />
				<Route exact path="/" component={withRouter(Home)} />
				<Route path="/about" component={About} />
				<Route path="/topics" component={Topics} />
				<Route path="/day/one" component={Day} />
			</div>
		</Router>
	);
}
export default App;
