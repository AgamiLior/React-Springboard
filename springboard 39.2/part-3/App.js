const App = () => {
return <div>
    <Person
	name="User1"
	age={31}
	hobbies={["football", "gaming"]} />
    <Person name="User2" age={17} hobbies=	{[]}/>
	<Person name="User3" age={23} hobbies={["soccer" , "basketball"]} />
</div>
}

// function App() {
// 	return (
// 	  <div>
// 		<Person
// 		  name="Homer"
// 		  age={38}
// 		  hobbies={["bowling", "watching tv", "drinking beer"]}
// 		/>
// 		<Person name="Marge" age={34} hobbies={["painting", "gambling"]} />
// 		<Person
// 		  name="Bart"
// 		  age={10}
// 		  hobbies={["skateboarding", "making prank calls"]}
// 		/>
// 		<Person
// 		  name="Lisa"
// 		  age={8}
// 		  hobbies={["reading", "saxophone", "eating vegetables"]}
// 		/>
// 	  </div>
// 	);
//   }