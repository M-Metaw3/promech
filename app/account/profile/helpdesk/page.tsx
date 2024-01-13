"use client"

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import Divider from '@material-ui/core/Divider';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'; // Adding award icon component

// const useStyles = makeStyles((theme) => ({
//   //... (other styles remain the same)
// }));

// function CustomCard() {
//   const classes = useStyles();

//   return (
//     <Paper className={classes.header}>
//       <div className="Title">
//         <Typography variant="h3" color="primary">Helpdesk</Typography>
//       </div>
//       <div className="Frame432" className={classes.frame}>
//         <div className={classes.roundIcon}>
//           <div className={classes.rectangle} />
//           <div className={classes.award}>
//             <EmojiEventsIcon /> {/* Insert award icon here */}
//           </div>
//         </div>
//         <div className={classes.frame}>
//           <div className="Frame71">
//             <Typography variant="h6" color="primary">What is Promech Academy</Typography>
//             <Typography variant="subtitle1" color="textSecondary">Here for the first time? See how Coursea can help students improve themselves.</Typography>
//           </div>
//         </div>
//         <div className={classes.arrowRight}>
//           <IconButton aria-label="arrow">
//             <ArrowForwardIcon />
//           </IconButton>
//         </div>
//       </div>
//       <Divider className={classes.separator} />
//       {/* Repeat the above structure for additional items */}
//     </Paper>
//   );
// }

// export default CustomCard;

// import React, { FC } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import Divider from '@material-ui/core/Divider';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

// interface CustomCardProps {}

// const useStyles = makeStyles((theme) => ({
//   //... (other styles remain the same)
// }));

// const CustomCard: FC<CustomCardProps> = () => {
//   const classes = useStyles();

//   return (
//     <Paper className={classes.header}>
//       <div className="Title">
//         <Typography variant="h3" color="primary">Helpdesk</Typography>
//       </div>
//       <div className="Frame432" className={classes.frame}>
//         <div className={classes.roundIcon}>
//           <div className={classes.rectangle} />
//           <div className={classes.award}>
//             <EmojiEventsIcon /> {/* Insert award icon here */}
//           </div>
//         </div>
//         <div className={classes.frame}>
//           <div className="Frame71">
//             <Typography variant="h6" color="primary">What is Promech Academy</Typography>
//             <Typography variant="subtitle1" color="textSecondary">Here for the first time? See how Coursea can help students improve themselves.</Typography>
//           </div>
//         </div>
//         <div className={classes.arrowRight}>
//           <IconButton aria-label="arrow">
//             <ArrowForwardIcon />
//           </IconButton>
//         </div>
//       </div>
//       <Divider className={classes.separator} />
//       {/* Repeat the above structure for additional items */}
//     </Paper>
//   );
// }

// export default CustomCard;
import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

interface CustomCardProps {}

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    // Add other header styles as needed
  },
  frame: {
    // Add styles for the frame class
  },
  roundIcon: {
    // Add styles for the roundIcon class
  },
  rectangle: {
    // Add styles for the rectangle class
  },
  award: {
    // Add styles for the award class
  },
  arrowRight: {
    // Add styles for the arrowRight class
  },
  separator: {
    // Add styles for the separator class
  },
}));

const CustomCard: FC<CustomCardProps> = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.header}>
      <div className="Title">
        <Typography variant="h3" color="primary">Helpdesk</Typography>
      </div>
      <div className={`Frame432 ${classes.frame}`}>
        <div className={classes.roundIcon}>
          <div className={classes.rectangle} />
          <div className={classes.award}>
            <EmojiEventsIcon /> {/* Insert award icon here */}
          </div>
        </div>
        <div className={classes.frame}>
          <div className="Frame71">
            <Typography variant="h6" color="primary">What is Promech Academy</Typography>
            <Typography variant="subtitle1" color="textSecondary">Here for the first time? See how Coursea can help students improve themselves.</Typography>
          </div>
        </div>
        <div className={classes.arrowRight}>
          <IconButton aria-label="arrow">
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>
      <Divider className={classes.separator} />
      {/* Repeat the above structure for additional items */}
    </Paper>
  );
}

export default CustomCard;
