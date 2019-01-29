import React from 'react';
import {Button, Grid, Row, Col} from "react-bootstrap";

var $ = require('jquery');

class Game extends React.Component {
	constructor(props) {
		super(props);

		this.state = {game : this.props.game}
		this.getGame = this.getGame.bind(this);
	}

	setGame(data) {
		this.setState({game: data})
	}

	getGame() {
		$.post(window.location.href + 'game', {operate: 'true'}, (data) => {
			console.log(data);
			this.setGame(data);
		});
	}

	render () {
		return (
            <Grid>
                <Row>
                <Col md={7} mdOffset={5}>
                    <h1>{this.state.game.operate}</h1>
                </Col>
                </Row>
                <Row>
                <Col md={7} mdOffset={5}>
                    <Button onClick={this.getGame}>
                    operate
                    </Button>
                </Col>
                </Row>
            </Grid>
        );
	}
}

export default Game