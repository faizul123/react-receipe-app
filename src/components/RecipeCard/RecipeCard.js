import React, { Component } from 'react'
import { 
    Button, 
    Typography, 
    Card, 
    CardContent,
    CardMedia, 
    CardActionArea, 
    CardActions,
    Fade } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
//import FavoriteIcon from '@material-ui/icons/Favorite';
const styles = {
    card: {
        width:200,
        maxWidth: 300,
        height:300,
        margin:8,
        verticalAlign:"top",
        display:"inline-block"
    },
    title:{
        height:75,
        textOverflow:"ellipsis"
    },
    media: {
        height: 140,
    },
};

export default class RecipeCard extends Component {

    state = {
        receipeLoaded:false
    }

    componentDidMount(){
        this.setState({receipeLoaded:true})
    }

    render() {

        return (
            <Fade in={this.state.receipeLoaded}>
            <Card style={styles.card}>
                <CardActionArea>
                    <CardMedia
                        style={styles.media}
                        image={"https://spoonacular.com/recipeImages/"+this.props.receipe.id+"-90x90.jpg"}
                        title={this.props.receipe.title}
                    />
                    <CardContent>
                        <div style={styles.title}>
                        <Typography gutterBottom variant="body2">
                            {this.props.receipe.title.substr(0,25) + "..."}
                        </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <FavoriteBorderIcon />
        </Button>
                    <Button size="small" color="primary">
                        DIY
        </Button>
                </CardActions>
            </Card>
            </Fade>
        )
    }
}
