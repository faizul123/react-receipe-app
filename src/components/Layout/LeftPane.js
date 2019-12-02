import React,{Component} from 'react'
import { Paper, List, ListItem, ListItemText } from '@material-ui/core'

export default class LeftPane extends Component{

    render(){
        return(<Paper>
                <List component="nav">
                   { this.props.category.map((cuisine) => {
                       const id = cuisine.trim().replace('/ /g','-');
                       const isSelected = this.props.selectedCategory === id ? true:false;
                       console.log(isSelected)
                       return( <ListItem 
                                    selected={isSelected}
                                    key={cuisine.trim().replace('/ /g','-')} 
                                    button 
                                    style={{"cursor":"pointer"}}
                                    onClick={() => this.props.onCategorySelect(id)}>
                        <ListItemText primary={cuisine} secondary={isSelected && this.props.total !== 0 ? `${this.props.total} total foods found` : ""}>
                        </ListItemText>
                    </ListItem>
                       );
                    })
                }
                </List>
        </Paper>);
    }

}