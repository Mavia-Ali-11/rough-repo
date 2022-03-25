import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import TwitterIcon from '@mui/icons-material/Twitter';
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
import { Link, useHistory, useLocation } from 'react-router-dom';
import { auth, signOut } from '../config/firebase';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser, faHashtag, faBell, faBookmark, faAlignLeft, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 260;

function Sidebar(props) {

    const history = useHistory();
    const location = useLocation();
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

    const icons = [faHome, faEnvelope, faUser, faHashtag, faBell, faBookmark, faAlignLeft, faEllipsisH];
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
                                                return (<FontAwesomeIcon icon={icons[index]} />)
                                            } else {
                                                return (<FontAwesomeIcon icon={icons[index]} className="activeIcons" />)
                                            }
                                        })()
                                    }
                                </ListItemIcon>
                                {
                                    (() => {
                                        if (props.scrIndex != index) {
                                            return (<ListItemText primary={text} />)
                                        } else {
                                            return (<ListItemText className="activeScr" primary={text} />)
                                        }
                                    })()
                                }
                            </ListItem>
                        </Link>
                    ))}
                    <Button variant="contained" className="tweetSidebar" onClick={async () => {
                        if (location.pathname == "/profile") {
                            await history.push("/home");
                            document.querySelectorAll("textarea")[0].focus();
                        } else {
                            document.querySelectorAll("textarea")[0].focus();
                        }
                    }}>Tweet</Button>

                    <div className="tweetSidebarIcon" onClick={async () => {
                        if (location.pathname == "/profile") {
                            await history.push("/home");
                            document.querySelectorAll("textarea")[0].focus();
                        } else {
                            document.querySelectorAll("textarea")[0].focus();
                        }
                    }}>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <g>
                                <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path>
                            </g>
                        </svg>
                    </div>
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
                                                    if (crrUser.username.length > 12) {
                                                        let crrUsername = crrUser.username.slice(0, 12) + "...";
                                                        return (<h6 title={crrUser.username}>{crrUsername}</h6>);
                                                    }
                                                    else {
                                                        return (<h6>{crrUser.username}</h6>);
                                                    }
                                                }

                                                return null;
                                            })()}

                                            {(() => {
                                                if (crrUser.email != undefined) {
                                                    if (crrUser.email.length > 15) {
                                                        let crrEmail = crrUser.email.slice(0, 15) + "...";
                                                        return (<p title={crrUser.email}>{crrEmail}</p>)
                                                    }
                                                    else {
                                                        return (<p>{crrUser.email}</p>)
                                                    }
                                                }

                                                return null;
                                            })()}
                                        </div>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={icons[7]} />
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
                                                                <h6 title={crrUser.username}>{crrUsername}</h6>
                                                            )
                                                        }
                                                        else {
                                                            return (<h6>{crrUser.username}</h6>)
                                                        }
                                                    }

                                                    return null;
                                                })()}

                                                {(() => {
                                                    if (crrUser.email != undefined) {
                                                        if (crrUser.email.length > 20) {
                                                            let crrEmail = crrUser.email.slice(0, 20) + "...";
                                                            return (<p title={crrUser.email}>{crrEmail}</p>)
                                                        }
                                                        else {
                                                            return (<p>{crrUser.email}</p>)
                                                        }
                                                    }

                                                    return null;
                                                })()}
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
                                    }}>
                                        <div>
                                            {(() => {
                                                if (crrUser.email != undefined) {
                                                    if (crrUser.email.length > 18) {
                                                        let crrEmail = crrUser.email.slice(0, 18) + "...";
                                                        return (<span title={crrUser.email}>Log out {crrEmail}</span>)
                                                    }
                                                    else {
                                                        return (<span>Log out {crrUser.email}</span>)
                                                    }
                                                }

                                                return null;
                                            })()}
                                        </div>
                                    </Link>
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