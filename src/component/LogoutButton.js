import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LogoutIcon from "@material-ui/icons/ExitToApp";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function LogoutButton(){
    return (
        <div className={useStyles.root}>
            <div variant="contained" color="primary"  onClick={()=>clearStorage()}>
                <div>
                    <ListSubheader inset></ListSubheader>
                    <ListItem button >
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary = "Log out" />
                    </ListItem>
                </div>
            </div>
        </div>
    );

}

function clearStorage() {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    window.location.assign("http://localhost:3000");
}