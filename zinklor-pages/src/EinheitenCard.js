import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import './EinheitenCard.css';

class EinheitenCard extends Component {

  constructor(props) {
    super(props);
  }


  state = {
  };

  componentDidMount() {
  }
  render() {

    return (
      <div className="Einheiten-Card">
        <Card variant="outlined">
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" >
               
          </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title= {this.props.name}
            subheader="fliegend"
          />
          <CardContent>
            Blabla
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default EinheitenCard;
