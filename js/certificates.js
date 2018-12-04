fetch('./data/certificates/certificates.json')
  .then(res => {
    return res.json();
  })
  .then(data => {
    renderCertificates(data);
  })
  .catch(e => {
    console.log(e);
  });

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
}

const renderCertificates = data => {
  let certificatesData = data;
  for (let i = 0; i < certificatesData.length; i++) {
    let imageElement = document.createElement('img');
    imageElement.setAttribute('src', certificatesData[i].path);
    let random = getRandomInt(-7, 7).toString();
    console.log(random);
    imageElement.setAttribute('style', 'transform: rotate(' + random + 'deg);');
    document.querySelector('.certificates').appendChild(imageElement);
  }
};
