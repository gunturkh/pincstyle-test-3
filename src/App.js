import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Card from './Components/NewCard'
import Navbar from './Components/Navbar'
import { Col,Row,Container, Button } from 'reactstrap'

let request = axios.create({
	baseURL: 'https://www.reqres.in/',
	timeout: 10000,
	headers: {'Authorization': ''}
}) 

const style={
	button: {
		marginTop: '20px',
		marginBottom: '20px'
	}
}
class App extends Component {
	constructor(props){
		super(props)
		this.state={
			data: []
		}

	}
  
  
	handleClick(event){
		event.preventDefault()
		request
			.get('api/users?page=1')
			.then(response => {
				response.data.data.map(item => {
					this.setState(prevState => ({
						data: prevState.data.concat(item)
					}))
					console.log('Item: ', this.state.data)
				})
			})
			.catch(error=>{
				console.log('Error: ', error)
			})
	}
	render() {
		let list = this.state.data.map((item,index)=> {
			return (
				<Col sm>
					<Card key={index} src={item.avatar} firstName={item.first_name} lastName={item.last_name}></Card>
				</Col>
			)})
		return (
			<div className="App">
				<Container>
					<Navbar/>
					<Button style={style.button} onClick={this.handleClick.bind(this)}>Show Users</Button>
					<Row>
						{list}
					</Row>
				</Container>
			</div>
		)
	}
}

export default App
