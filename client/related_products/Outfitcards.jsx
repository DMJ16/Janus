import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { getDefaultImg } from '../utility/relatedUtility.js';
import CardMedia from '@material-ui/core/CardMedia';
import { salePrice, avgRatings } from './../utility/relatedUtility.js';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    paddingTop: '100%', // 16:9
  },
});

const Outfitcards = ({ onUpdateOutfit, removeOutfit, styles, item }) => {
  const classes = useStyles();
  console.log(item);
  const displayPhoto = () => {
    const defaultPhoto = {
      id: 1,
      src: '../../public/No_Default.jpg',
      title: 'default',
      description: 'default'
    }
    if (!item.styles) {
      return (
        null
      )
    } else {
      let photoSrc = '';
      photoSrc = getDefaultImg(item.styles);
      return (
        <CardMedia
          className={classes.media}
          image={photoSrc || defaultPhoto.src}
          title={item.results.name}
        />
      )
    }
  }
  let results = salePrice(item.styles);
  const stylePrice = () => {
    results = salePrice(item.styles);
    if (item.styles) {
      return (
        <Typography variant="body2" component="p">
          {item.results.name}
          <br />
          {`$${results || 56}`}
        </Typography>
      )
    } else if (results[0] !== 'S') {
      return (
        <Typography variant="body2" component="p">
          {item.results.name}
          <br />
          ${results || 65 }
        </Typography>
      )
    } else {
      return (
        <Typography variant="body2" component="p" color='red'>
          {item.results.name}
          <br />
          ${results}
        </Typography>
      )
    }
  }
  const showRating = () => {
      return (
        <Box component='fieldset' mb={3} borderColor='transparent'>
          <Rating name='read-only' value={Math.floor(Math.random() * (5 - 1) + 1)} readOnly />
        </Box>
      )
    }
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={() => { removeOutfit(item.results.id) }}>
            <HighlightOffIcon />
          </IconButton>
        }
      />
      {displayPhoto()}
      <CardContent>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {item.results.category}
        </Typography>
        {stylePrice()}
        {showRating()}
        {/* <Box component='fieldset' mb={3} borderColor='transparent'>
          <Rating name='read-only' value={Math.floor(Math.random() * (5-1) + 1)} readOnly />
        </Box> */}
      </CardContent>
    </Card>
  );
}

export default Outfitcards
