import { Badge, IconButton, makeStyles, Menu, MenuItem } from '@material-ui/core'
import React, { useState } from 'react'
import NotificationsIcon from "@material-ui/icons/Notifications";

const NotificationsMenu = () => {
    const notifications = [];
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => {
        setAnchorEl(null);
    }
  return (
    <>
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <Badge badgeContent={notifications.length} showZero color='primary'>
                <NotificationsIcon style={{ color: "#ddd"}}/>
            </Badge>
        </IconButton>
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
            {notifications.length > 0 ? (
                notifications.map((elem) => <MenuItem className={classes.menuItem}>{elem.msg}</MenuItem>)
            ): (
                <MenuItem className={classes.menuItem}>You don't have any notification</MenuItem>
            )
            }
        </Menu>
    </>
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
            backgroundColor: "rgb(25, 25, 25)",
        },
        borderBottom: "1px solid rgb(40, 40, 40)",
    }
}))

export default NotificationsMenu