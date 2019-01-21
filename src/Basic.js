import React from 'react';
import {Button, Grid, Row, Col} from "react-bootstrap";

var request = require('jquery');

class Basic extends React.Component {
	constructor(props) {
		super(props);

		this.state = {game : this.props.game}
		this.getGame = this.getGame.bind(this);
	}

	setGame(data) {
		this.setState({game: data})
	}

	getGame() {
		request.get(window.location.href + 'game', (data) => {
			console.log(data);
			this.setGame(data);
		});
	}

	render () {
		return (
            <Grid>
                <Row>
                <Col md={7} mdOffset={5}>
                    <h1>{this.state.game}</h1>
                    <hr/>
                </Col>
                </Row>
                <Row>
                <Col md={7} mdOffset={5}>
                    <Button onClick={this.getGame}>
                    </Button>
                </Col>
                </Row>
            </Grid>
        );
	}
}

export default Basic