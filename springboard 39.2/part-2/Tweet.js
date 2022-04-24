const Tweet = (props) => {
return <div>
	<span>"name is:" {props.name}", and his username:" {props.username}</span><br></br>
	<span>"created on" {props.date} "the message:"</span><br></br>
	<span>{props.message}</span><hr></hr>
</div>
}