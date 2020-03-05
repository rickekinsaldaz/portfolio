import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

function Content() {
  return (
  	<div className="wrapper" style={ {backgroundColor: '#393a3c'} }>
		<Container maxWidth="lg">
			<Typography variant="h3" color="primary">
				I mean, why would a poptart want to live inside a toaster, Rick? I mean, that would be like the scariest place for them to live. You know what I mean? I'm a bit of a stickler Meeseeks, what about your short game? Lick, lickity, lick my balls! Uh ohhh! Somersault jump!
			</Typography>
		</Container>
	</div>
  );
}

export default Content;
