// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Link from 'next/link';
// import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard({certificate}) {
//   const [expanded, setExpanded] = React.useState(false);
// console.log(certificate?.certificate?.attributes?.image?.data?.attributes)
//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }} 
    
    
//     >
   
//       <CardMedia
//         component="img"
//         height="300"
//         image={certificate?.attributes?.image?.data?.attributes?.url?`http://promech-backend.addictaco.com/${certificate?.attributes?.image?.data?.attributes?.url}`:''}
//         alt="Paella dish"
//       />
//       <CardContent>
//         {/* <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography> */}
//       </CardContent>
//       <CardActions disableSpacing>

//         <IconButton 
//         component={Link} href={certificate?.attributes?.pdf?.data?.attributes?.url?`http://promech-backend.addictaco.com/${certificate?.attributes?.pdf?.data?.attributes?.url}`:''}
//         aria-label="share">
//           <CloudDownloadIcon  />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
          
//           <Typography paragraph>
//      {certificate?.attributes?.details}
//           </Typography>

 
   
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface RecipeReviewCardProps {
  certificate: {
    attributes: {
      image: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      pdf: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      details: string;
    };
  };
}

export default function RecipeReviewCard({ certificate }: RecipeReviewCardProps) {
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={certificate?.attributes?.image?.data?.attributes?.url ? `http://promech-backend.addictaco.com${certificate?.attributes?.image?.data?.attributes?.url}` : ''}
        alt="Paella dish"
      />
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          component={Link}
          href={certificate?.attributes?.pdf?.data?.attributes?.url ? `http://promech-backend.addictaco.com${certificate?.attributes?.pdf?.data?.attributes?.url}` : ''}
          aria-label="share"
        >
          <CloudDownloadIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {certificate?.attributes?.details}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}


