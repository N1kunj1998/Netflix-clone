import { Button, FormControlLabel, Menu, MenuItem, Switch } from '@material-ui/core'
import React, { useState } from 'react'
import KeyboardArrowDownSharpIcon from "@material-ui/icons/KeyboardArrowDownSharp";
import { makeStyles } from '@material-ui/core/styles';

const ProfileMenu = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => {
        setAnchorEl(null);
    }
    const signOut = () => {
        handleClose();

    }
  return (
    <div>
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
            <img 
                src="#"
                alt='profile'
                style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "4px",
                    objectFit: "cover",
                }}
            />
            <KeyboardArrowDownSharpIcon style={{color: "#ddd"}} />
        </Button>
        <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            keepMounted
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
            className={classes.profileMenu}
        >
            <MenuItem>
                <FormControlLabel
                    control={
                        <Switch
                            checked={true}
                            name="dark-mode"
                            color='primary'
                            classes={{
                                track: classes.track,
                            }}
                            label="Mode switch"
                        />
                    }
                />
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
                Account
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={signOut}>
                Sign Out
            </MenuItem>
        </Menu>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    profileMenu: {
        "& .MuiPaper-root": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            border: "1px solid rgb(20, 20, 20)"
        },
    },
    menuItem: {
        "&:hover": {
            textDecoration:"underline",
        },
    },
    track: {
        backgroundColor: "grey",
        opacity: 1,
    },
}));

export default ProfileMenu