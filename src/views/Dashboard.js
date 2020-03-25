import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardComp from "../components/DashboardComponent";
import Products from "../components/Products";
import { useSelector, useDispatch } from "react-redux";
import setOwnerAction from "../store/actionCreators/setOwnerAction";
import { ToastContainer, toast } from "react-toastify";
import {
  Timeline as TimelineIcon,
  List as ListIcon,
  Store as StoreIcon
} from "@material-ui/icons/";
import { Link, useParams } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function Dahsboard({ color }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { username, warung_name } = useSelector(state => state.ownerReducer);
  const dispatch = useDispatch();
  const { params } = useParams();

  const drawerMenu = [
    {
      name: "Dashboard",
      icon: <TimelineIcon />,
      path: "summary"
    },
    {
      name: "Products",
      icon: <ListIcon />,
      path: "products"
    },
    {
      name: "Store",
      icon: <StoreIcon />,
      path: "store"
    }
  ];

  useEffect(() => {
    dispatch(setOwnerAction(JSON.parse(localStorage.warung_q_token_data)));
    toastWelcome(username);
  }, [dispatch, username]);

  const toastWelcome = user => {
    if (user) {
      toast.success(`Welcome, ${user}. Happy Managing`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
      });
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.title = "Warung-Q";
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
        style={{ backgroundColor: color }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {warung_name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <Typography variant="h6">{username}</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <>
                <ChevronLeftIcon />
              </>
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {drawerMenu.map((menu, index) => (
            <Link
              to={`${menu.path}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem button key={menu.name}>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {params === "summary" && <DashboardComp />}
        {params === "products" && <Products />}

        {/* <Switch>
          <Route exact path={`${path}/home`}>
            <DashboardComp />
            <Products />
          </Route>
          <Route path={`/dashboard/products`}>
            <Products />
            <h1>Masuk products</h1>
          </Route>
        </Switch> */}
      </main>
    </div>
  );
}
