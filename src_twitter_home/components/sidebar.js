import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MailIcon from '@mui/icons-material/Mail';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { GlobalContext } from '../context/context';
import { Link, useHistory } from 'react-router-dom';
import { auth, signOut } from '../config/firebase';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const drawerWidth = 260;

function Sidebar(props) {

    const history = useHistory();
    const { state } = useContext(GlobalContext);
    const [crrUser, handleCrrUser] = useState({});

    useEffect(async () => {
        let dataFetcher = () => {
            handleCrrUser(state.authUser);
        }

        if (state.authUser.uid == undefined) {
            let detectData = setInterval(() => {
                if (state.authUser.uid != undefined) {
                    clearInterval(detectData);
                    dataFetcher();
                }
            }, 1000);
        } else {
            dataFetcher();
        }
    }, []);

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const icons = [HomeOutlinedIcon, MailOutlineIcon, PersonOutlineOutlinedIcon, TagOutlinedIcon,
        NotificationsNoneOutlinedIcon, BookmarkBorderOutlinedIcon, ArticleOutlinedIcon, MoreHorizOutlinedIcon];
    const active_icons = [HomeIcon, MailIcon, PersonIcon];
    const screens = ["/home", "/my-tweets", "/profile", "#", "#", "#", "#", "#"];

    const drawer = (
        <div className="sidebar">
            <div>
                <Link to="/home"><TwitterIcon /></Link>
                <List>
                    {['Home', 'My tweets', 'Profile', 'Explore', 'Notifications', 'Bookmarks', 'Lists', 'More'].map((text, index) => (
                        <Link key={index} to={screens[index]}>
                            <ListItem button>
                                <ListItemIcon>
                                    {
                                        (() => {
                                            if (props.scrIndex != index) {
                                                let Icon = icons[index];
                                                return (<Icon />)
                                            } else {
                                                let Icon = active_icons[index];
                                                return (<Icon />)
                                            }
                                        })()
                                    }
                                </ListItemIcon>
                                {
                                    (() => {
                                        if (props.scrIndex != index) {
                                            let Icon = icons[index];
                                            return (<ListItemText primary={text} />)
                                        } else {
                                            let Icon = active_icons[index];
                                            return (<ListItemText className="activeScr" primary={text} />)
                                        }
                                    })()
                                }
                            </ListItem>
                        </Link>
                    ))}
                    <Button variant="contained" className="tweetSidebar">Tweet</Button>
                </List>
            </div>
            <div className="signOut">
                <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                        <div>
                            <Button variant="contained" {...bindTrigger(popupState)}>
                                <div className="accDetails">
                                    <div>
                                        <div>
                                            <img src={crrUser.avatar} width="40" />
                                        </div>
                                        <div>
                                            {(() => {
                                                if (crrUser.username != undefined) {
                                                    if (crrUser.username.length > 14) {
                                                        let crrUsername = crrUser.username.slice(0, 14) + "...";
                                                        return (<h6>{crrUsername}</h6>)
                                                    }
                                                    else {
                                                        return (<h6>{crrUser.username}</h6>)
                                                    }
                                                }

                                                return null;
                                            })()}

                                            {(() => {
                                                if (crrUser.username != undefined) {
                                                    if (crrUser.username.length > 14) {
                                                        let crrUsername = crrUser.username.slice(0, 14) + "...";
                                                        return (<h6>{crrUsername}</h6>)
                                                    }
                                                    else {
                                                        return (<h6>{crrUser.username}</h6>)
                                                    }
                                                }

                                                return null;
                                            })()}
                                            <p>{crrUser.email}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <MoreHorizOutlinedIcon />
                                    </div>
                                </div>
                            </Button>
                            <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}

                                className="popup"
                            >
                                <Typography>
                                    <div className="accDetails onPopover">
                                        <div>
                                            <div>
                                                <img src={crrUser.avatar} width="40" />
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                {(() => {
                                                    if (crrUser.username != undefined) {
                                                        if (crrUser.username.length > 18) {
                                                            let crrUsername = crrUser.username.slice(0, 18) + "...";
                                                            return (
                                                                <h6>{crrUsername}</h6>
                                                            )
                                                        }
                                                        else {
                                                            return (<h6>{crrUser.username}</h6>)
                                                        }
                                                    }

                                                    return null;
                                                })()}
                                                <p>{crrUser.email}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <CheckIcon />
                                        </div>
                                    </div>
                                    <div>
                                        <span>Add an existing account</span>
                                    </div>
                                    <Link to="/" onClick={() => {
                                        signOut(auth).then(() => {
                                            history.push("/");
                                        }).catch((error) => {
                                            console.log(error.message);
                                        });
                                    }}><div>
                                            <span>Log out {crrUser.email}</span>
                                        </div></Link>
                                </Typography>
                            </Popover>
                        </div>
                    )}
                </PopupState>
            </div>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} className="mainSidebar">
            <CssBaseline />
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div" id="screenTitle">
                    {props.scrName}
                </Typography>
            </Toolbar>

            <Box component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

Sidebar.propTypes = {
    window: PropTypes.func,
};


export default Sidebar;