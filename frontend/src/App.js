import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'


class Flight extends Component {
	constructor() {
		super();
		this.state = {
			origin: "",
			dest: "",
			departdate: "",
			returndate: "",
			departtime: "",
			returntime: "",
			price: "",
		};
	} 
}

const App = () => {
  return (
   <Form>
		<FormGroup>
			<Label for="origin">Origin</Label>
			<Input type="text" 
				name ="origin" 
				id="originflight" 
				placeholder="enter airport"
				value ={this.state.origin}
				/>
		</FormGroup>
		<FormGroup>
			<Label for="return">Destination</Label>
			<Input type="text" name ="destination" id="destflight" placeholder="enter airport" />
		</FormGroup>
		<FormGroup>
			<Label for="depdate">departure date</Label>
			<Input type="date" name ="departdate" id="depdate" />
		</FormGroup>
			<FormGroup>
			<Label for="retdate">return date</Label>
			<Input type="date" name ="returndate" id="retdate" />
		</FormGroup>

	</Form>
  )
}

export default App