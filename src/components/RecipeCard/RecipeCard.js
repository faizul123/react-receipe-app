import React from 'react'
import {
    Button,
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    CardActions,
    Fade
} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {stripText} from './util';

//import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = {
    card: {
        width: 200,
        maxWidth: 300,
        height: 350,
        margin: 8,
        verticalAlign: "top",
        display: "inline-block"
    },
    title: {
        height: 75,
        textOverflow: "ellipsis"
    },
    media: {
        height: 140,
    },
};

export const ReceipeCard = (props) => {
    return (
        <Fade in={true}>
            <Card style={styles.card}>
                <CardActionArea>
                    <CardMedia
                        style={styles.media}
                        image={"https://spoonacular.com/recipeImages/" + props.receipe.id + "-90x90.jpg"}
                        title={props.receipe.title}
                    />
                    <CardContent>
                        <div style={styles.title}>
                            <Typography gutterBottom variant="body1">
                                {stripText(props.receipe.title,25)}
                            </Typography>
                        </div>
                        <Typography variant="body2">
                        <AccessTimeIcon fontSize="inherit"/> {" "+props.receipe.readyInMinutes + " mins "}
                        </Typography>
                        <Typography variant="body2">
                        <LocalDiningIcon fontSize="inherit" />{" "+props.receipe.servings + " people "}
                        </Typography>            
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                            size="small" 
                            color="primary" 
                            onClick={() =>props.toggleWishlist(props.receipe.id)}>
                       {props.wishlistAdded ? 
                            <FavoriteIcon /> :
                            <FavoriteBorderIcon />
                       }
                    </Button>
                    <Button variant="outlined" size="small" color="primary">
                        DIY
                    </Button>
                </CardActions>
            </Card>
        </Fade>
    )
}