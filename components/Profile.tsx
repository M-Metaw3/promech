"use client"
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import EditIcon from '@material-ui/icons/Edit';
// import SettingsIcon from '@material-ui/icons/Settings';
// import HelpIcon from '@material-ui/icons/Help';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import { Grid } from '@mui/material';
// import Link from 'next/link';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     padding: theme.spacing(3),
//     borderRadius: 16,
//     background: 'white',
//     [theme.breakpoints.up('sm')]: {
//       width: 350,
//       height: 452,
//     },
//   },
//   title: {
//     color: '#141522',
//     fontSize: 24,
//     fontFamily: 'Plus Jakarta Sans',
//     fontWeight: '700',
//     lineHeight: 36,
//     wordWrap: 'break-word',
//   },
//   button: {
//     marginTop: theme.spacing(2),
//     width: '100%',
//   },
//   icon: {
//     marginRight: theme.spacing(1),
//   },
// }));

// function AccountSettings() {
//   const classes = useStyles();

//   return (
//     <Grid>
//     <Paper className={classes.container}>
    
//       <Button
//        component={Link} href='editprofile'
//         className={classes.button}
//         startIcon={<EditIcon className={classes.icon} />}
//       >
//         Edit Profile
//       </Button>
//       <Button
//         className={classes.button}
//         startIcon={<SettingsIcon className={classes.icon} />}
//         component={Link} href='accountsetting'
//       >
//         Account Setting
//       </Button>
//       <Button
//         className={classes.button}
//         startIcon={<HelpIcon className={classes.icon} />}
//         component={Link} href='helpdesk'
//       >
//         Helpdesk
//       </Button>
//       <Button
//         className={classes.button}
//         startIcon={<ExitToAppIcon className={classes.icon} />}
//       >
//         Logout
//       </Button>
//     </Paper>
//     </Grid>

//   );
// }

// export default AccountSettings;
import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Grid } from '@mui/material';
import Link from 'next/link';

interface AccountSettingsProps {}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing(3),
    borderRadius: 16,
    background: 'white',
    [theme.breakpoints.up('sm')]: {
      width: 350,
      height: 452,
    },
  },
  title: {
    color: '#141522',
    fontSize: 24,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 700, // Change the value to 700 (number) instead of "700" (string)
    lineHeight: 36,
    wordWrap: 'break-word',
  },
  button: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));


const AccountSettings: FC<AccountSettingsProps> = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Paper className={classes.container}>
        <Button
          component={Link}
          href='/account/profile/editprofile'
          className={classes.button}
          startIcon={<EditIcon className={classes.icon} />}
        >
          Edit Profile
        </Button>
        <Button
          className={classes.button}
          startIcon={<SettingsIcon className={classes.icon} />}
          component={Link}
          href='/account/profile/accountsetting'
        >
          Account Setting
        </Button>
        <Button
          className={classes.button}
          startIcon={<HelpIcon className={classes.icon} />}
          component={Link}
          href='/account/profile/helpdesk'
        >
          Helpdesk
        </Button>
        <Button
          className={classes.button}
          startIcon={<ExitToAppIcon className={classes.icon} />}
        >
          Logout
        </Button>
      </Paper>
    </Grid>
  );
}

export default AccountSettings;