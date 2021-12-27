import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  let percentage = {value: 100 - (({...props}.value / 280) * 100)};
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...percentage} thickness={4.5} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {
            (()=> {
              console.log(props.value)
              if(props.value <= 20) {
                return(`${Math.round(props.value)}`);
              }
            })()
          
          }
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularStatic(props) {
  const [progress, setProgress] = React.useState(280);
  
  React.useEffect(() => {
    setProgress(280 - props.chars.length);
  });

  return <CircularProgressWithLabel value={progress} />;
}