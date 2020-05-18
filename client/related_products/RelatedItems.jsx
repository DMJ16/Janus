import React from 'react';
import { Grid } from '@material-ui/core';
import RelatedItemsCard from './RelatedItemsCard'
import ComparisonModal from './ComparisonModal';

const RelatedItems = ({ relatedProducts, onGetRelated, onAddOutfit, onGetCurrent, compareProducts }) => {
  console.log(compareProducts);

  const getReleatedItems = () => {
    // TODO: REFACTOR
    if (!relatedProducts.state) {
      return null;
    } else {
      return (
        <Grid
          container
          direction={'row'}
          justify='space-between'
        >
          {relatedProducts.state.map((item, i) => {
            return (
              <RelatedItemsCard key={i} item={item} addOutfit={onAddOutfit} currentItem={compareProducts} compareItem={item} />
            )
          })}
        </Grid>
      )
    }
  }

  return (
    <div>
      <button onClick={onGetRelated}>TEST_Display_Related_Items_ID_2</button>      
      <Grid
        container direction='row'
        justify='space-between'
      >
        {getReleatedItems()}
      </Grid>
    </div>

  )
}
export default RelatedItems;