import styled from '@emotion/styled'
import { Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import img from '../assets/img/profile.jpeg'


const StyleToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position='sticky' >
            <StyleToolBar > 
                <Typography variant='h6' >GG</Typography>
                <Search ><InputBase placeholder='Search...'  /></Search>
                <Icons><Badge badgeContent={4} color="error">
                    <Mail />
                </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src={img}
                        onClick={(e) => setOpen(true)}
                    /></Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src={img}
                    />
                    <Typography variant="span">Mohammad</Typography>
                </UserBox>
            </StyleToolBar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                sx={{top:50}}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar
