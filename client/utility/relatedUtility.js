module.exports = {
  getDefaultImg: (stylesArr) => {
    /* this function checks if the default? is equal to 1 then returns the img for that path*/
    let results = '';
    for (const ele of stylesArr) {
      if (ele['default?'] === 1) {
        return results = ele.photos[0].url;
      }
    }
    // if no default value will return a placeholder img of photo not available.
    return results = './../../public/No_Default.jpg';
  },
  comparisonBuilder: (currentItem) => {
    let results = [];   
    currentItem.features.forEach((feat) => {      
      results.push(`${feat.feature}: ${feat.value}`);
    });   
    return results;
  }
}

//feature: "UV Protection", value: "null"}