fetch('./data/sample.json')
  .then(res => {
    return res.json();
  })
  .then(data => {
    renderProjects(data);
  })
  .catch(e => {
    console.log(e);
  });

const renderProjects = daa => {
  let ProjectsData = daa;
  for (let i = 0; i < ProjectsData.length; i++) {
    let data = ProjectsData[i];
    let sectionelement = document.createElement('a');
    let imageelement = document.createElement('img');
    let pelement = document.createElement('p');

    sectionelement.setAttribute('class', 'projectcardview');
    sectionelement.setAttribute('href', data.link);
    imageelement.setAttribute('style', 'width: 300px;height:200px;');
    imageelement.setAttribute('src', data.image);
    pelement.textContent = data.title;
    sectionelement.appendChild(imageelement);
    sectionelement.appendChild(pelement);
    document.querySelector('.projects').append(sectionelement);
  }
};
