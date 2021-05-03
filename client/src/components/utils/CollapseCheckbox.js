import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';


function CollapseCheckbox(props) {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState([]);

    
    useEffect(() => {
        if(props.initState){
            setOpen(props.initState);
        }
    }, [props.initState]);

    const handleClick = () => {
        setOpen(open ? false : true);
    }

    const handleAngle = () => {
        return (open ?
            <FontAwesomeIcon icon={faAngleUp} className="icon"/>
        :
            <FontAwesomeIcon icon={faAngleDown} className="icon"/>
        )
    }

    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        props.handleFilters(newChecked);
    }

    const renderList = () => (
        props.list ? 
            props.list.map((value)=>(
                <ListItem key={value._id} style={{padding:'10px 0'}}>
                    <ListItemText primary={value.name}/>
                    <ListItemSecondaryAction>
                        <Checkbox
                            color="primary"
                            onChange={()=>handleToggle(value._id)}
                            checked={checked.indexOf(value._id) !== -1}
                            style={{left: '9px'}}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            ))
        :   
            null
    )

    return (
        <div className="collapse_items_wrapper">
            <List style={{borderBottom: '1px solid #dbdbdb'}}>
                <ListItem onClick={() => handleClick()} style={{padding: '10px 23px 10px 0'}}>
                    <ListItemText
                        primary={props.title}
                        className="collapse_title"
                    />
                        {handleAngle()}
                </ListItem>
            </List>

            <Collapse in={open} timeout="auto">
                <List component="div" disablePadding>
                    {renderList()}
                </List>
            </Collapse>
        </div>
    )
}

export default CollapseCheckbox
