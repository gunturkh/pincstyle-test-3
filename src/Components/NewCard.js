import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle } from 'reactstrap'

class NewCard extends Component {
	constructor(props){
		super(props)
	}

	render(){

		return (
			<div>
				<Card>
					<CardImg top width="100%" src={this.props.src} alt="Card image cap" />
					<CardBody>
						<CardTitle>{this.props.firstName}</CardTitle>
						<CardSubtitle>{this.props.lastName}</CardSubtitle>
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default NewCard