export default  function getWiki(name) {
  console.log('wikiname', name);
  let wiki = '';
  fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=1&exsentences=3&explaintext&origin=*&titles=${name}`)
    .then((response) => response.json())
    .then((data) => {
      const pageID = Object.keys(data.query.pages);
      wiki = data.query.pages[pageID].extract;

      console.log('wikipre', wiki);
      // check if wiki is correct
      if (pageID[0] == '-1') {
        wiki = '';
        console.error('wiki is empty');
      } else {
        wiki = data.query.pages[pageID].extract;
        if (wiki.length < 100) {
          wiki = '';
          console.error('no wiki answer');
        }
      }
      // wiki = removeUnwantedWiki(wiki);
      wiki = wiki.replaceAll(' (listen)', '');
      console.log('wikipost', wiki);
      return wiki

      // add to form-input- field
      // const wikiField = document.getElementById('wikiField');
      // wikiField.innerHTML = wiki;

      //   });
    });
}

/* remove the '(listen)'-text from the wiki - only works, when inside () */
//   function removeUnwantedWiki(text) {
//     return text.replaceAll('(listen)', '');
//   }
