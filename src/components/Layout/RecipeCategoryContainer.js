import React, { Fragment, Component } from 'react'
import { Grid, List, ListItem, ListItemText, LinearProgress } from '@material-ui/core'
import LeftPane from './LeftPane'
import { RightPane } from './RightPane'
import ReceipeCardContainer from '../RecipeCard/ReceipeCardContainer';

const styles = {
    reciepeCategory: {
        marginTop: "72px",
        marginLeft: "8px",
    }
}

class ReciepeCategoryContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: "none",
            foodItems: props.foodItems,
            loaded:false
        };
    }

    handleCategorySelect = (categoryId) => {
        this.setState({
            selectedCategory: categoryId
        }, this.updateFoodItems);
    }

    updateFoodItems = () => {
        if (this.state.selectedCategory !== 'none') {
            fetch("https://api.spoonacular.com/recipes/search?cuisine=" + this.state.selectedCategory
                + "&apiKey=cdca194d2c1b44f6ba48a56aa8e8f016")
                .then(response => {
                    return response.json()
                }).then(data => {
                    this.setState({
                        foodItems: data.results,
                        totalFoods: data.totalResults,
                        loaded:true
                    })
                });
        }
    }

    render() {
        console.log(" from recipecategorycontainer state ", this.state, " props ", this.props);
        return (<Fragment>            
            <Grid container style={styles.reciepeCategory} >
                <Grid item sm={3}>
                    <LeftPane>
                        <CuisineMenus
                            onCategorySelect={this.handleCategorySelect}
                            selectedCategory={this.state.selectedCategory}
                            total={this.state.totalFoods}
                            {...this.props} />
                    </LeftPane>
                </Grid>
                <Grid item sm={9}>
                    <RightPane>
                    { (!this.state.loaded) && <LinearProgress variant="query"/> }
                        <ReceipeCardContainer
                            notifyUser={this.props.notifyUser}
                            foodItems={this.state.foodItems}
                        />
                    </RightPane>
                </Grid>
            </Grid>
        </Fragment>);
    }

}

const CuisineMenus = (props) => {
    return (<List component="nav">
        {props.category.map((cuisine) => {
            const id = cuisine.trim().replace(/ /g, '-');
            const isSelected = props.selectedCategory === id ? true : false;
            return (<ListItem
                selected={isSelected}
                key={id}
                button
                style={{ "cursor": "pointer" }}
                onClick={() => props.onCategorySelect(id)}>
                <ListItemText primary={cuisine} secondary={isSelected && props.total !== 0 ? `${props.total} total foods found` : ""}>
                </ListItemText>
            </ListItem>
            );
        })
        }
    </List>);
}

export default ReciepeCategoryContainer;