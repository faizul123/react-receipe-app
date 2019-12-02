import React, { Fragment,Component } from 'react'
import { Grid } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const styles = {
    reciepeCategory:{
        marginTop:"72px",
        marginLeft:"8px",
    }
}


export default class ReciepeCategoryContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedCategory:"none",
            foodItems:props.foodItems
        };
    }

    handleCategorySelect = (categoryId) => {
        debugger;
        console.log(this.state);
        this.setState({
            selectedCategory:categoryId
        },this.updateFoodItems);
    }

     updateFoodItems = () => {
        console.log("updateFoodItems")
        if(this.state.selectedCategory !== 'none'){
            fetch("https://api.spoonacular.com/recipes/search?cuisine=" + this.state.selectedCategory 
            + "&apiKey=cdca194d2c1b44f6ba48a56aa8e8f016")
            .then(response => {
                return response.json()
            }).then(data => {
                this.setState({
                    foodItems:data.results,
                    totalFoods:data.totalResults
                })
                console.log(data)
            });
        }
    }

    render(){
        console.log("state ",this.state);
        return(<Fragment>
            {!this.props.rightPane &&
            <Grid container style={styles.reciepeCategory} >
                <Grid item sm={3}>
                     <LeftPane 
                     category={this.props.category}
                     total={this.state.totalFoods || 0}
                     selectedCategory={this.state.selectedCategory || "none"} 
                     onCategorySelect={this.handleCategorySelect} />
                </Grid>
                <Grid item sm={9}>
                    <RightPane foodItems={this.state.foodItems} />
                </Grid>
            </Grid>
    }
            {
                (this.props.rightPane) && 
                <Grid container style={styles.reciepeCategory} justify="center" >
                    <Grid item sm={9}>
                        <RightPane foodItems={this.props.foodItems} />
                    </Grid>
            </Grid>
            }
        </Fragment>);
    }

}