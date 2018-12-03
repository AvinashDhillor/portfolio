fetch('./projects/sample1.json')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  });
