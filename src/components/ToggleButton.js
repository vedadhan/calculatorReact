import React from 'react';
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const themeLight = createMuiTheme({
    palette: {
      background: {
        default: "#fff"
      }
    }
  });

  const themeDark = createMuiTheme({
    palette: {
      background: {
        default: "#222222"
      },
      text: {
        primary: "#ffffff"
      }
    }
  });

export default function ToggleButton() {
  const [light, setLight] = React.useState(true);
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline />
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => setLight(prev => true)}>Light Theme</Button>
                <Button onClick={() => setLight(prev => false)}>Dark Theme</Button>
            </ButtonGroup>
    </MuiThemeProvider>  
    </div>
  );
}
