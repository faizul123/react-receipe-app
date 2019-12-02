import React,{Component} from 'react'
import { Paper } from '@material-ui/core'
import RecipeCard from '../RecipeCard';

const styles={
    rightPane:{
        marginLeft:"8px",
        paddingLeft:"8px",
        backgroundColor:"#e8eaf6",
        minHeight:"100vh"
    }
}

export default class RightPane extends Component{

    render(){
        console.log(this.props.foodItems)
        return(
        <Paper style={styles.rightPane}>
            {
                this.props.foodItems.map(item => {
                    return (
                        <RecipeCard key={item.id} receipe={item} />
                    );
                })
            }
        </Paper>
        );
    }

}