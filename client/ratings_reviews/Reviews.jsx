import React, { useEffect, useState } from 'react';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReviewList from './ReviewList.jsx';
import Ratings from './Ratings.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(12),
    margin: 'auto',
    maxWidth: '1100px',
    paddingBottom: theme.spacing(12),
  },
}));

const Reviews = (props) => {
  const classes = useStyles();
  const {
    id,
    reviewResults,
    getReviews,
    displayBySort,
    ratingsMeta,
    postReview,
    info,
  } = props;
  const [filterList, setFilterList] = useState([]);
  const [limit, setLimit] = useState(2);
  let displayList = filterList.length === 0 ? reviewResults : filterList;

  useEffect(() => {
    getReviews(id);
  }, []);

  const clickStarRating = (rating) => {
    let filterByRatings = reviewResults.filter((review) => {
      return review.rating === rating;
    });
    setFilterList(filterByRatings);
    setLimit(2);
  };

  return (
    <>
      <Box className={classes.root}>
        <Container>
          <Typography variant='subtitle1'>RATINGS & REVIEWS</Typography>
          <Grid container direction='row' justify='space-between'>
            <Grid item md={4}>
              <Ratings
                ratingsMeta={ratingsMeta}
                clickStarRating={clickStarRating}
              />
            </Grid>
            <Grid item md={8}>
              <ReviewList
                list={displayList}
                displayBySort={displayBySort}
                ratingsMeta={ratingsMeta}
                postReview={postReview}
                limit={limit}
                setLimit={setLimit}
                setFilterList={setFilterList}
                info={info}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Reviews;
