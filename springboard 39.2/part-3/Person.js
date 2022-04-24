const Person = (props) => {
	let hob = props.hobbies.map(h=><li>{h}</li>);
	let checkForHobbies = props.hobbies.length == 0 ? "This Guy Has No Hobbies" : hob;
	let checkAge = props.age >= 18 ? "Please Go Vote!" : "You Must Be 18";


	return <div>
			<p>Learn some information about this person: </p>
			<ul>
				<li>Name: {props.name.slice(0,6)}</li>
				<li>Age: {props.age}</li>
			</ul>
			Hobbies:
			{checkForHobbies}
			<h3> {checkAge} </h3>
			<hr></hr>
			</div>
}