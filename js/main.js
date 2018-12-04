fetch('./data/projectData.json')
  .then(res => {
    return res.json();
  })
  .then(data => {
    renderProjects(data);
  })
  .catch(e => {
    console.log(e);
  });

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

//Render Projects
const renderProjects = daa => {
  let ProjectsData = daa;
  let width = ProjectsData.length * 350;
  document
    .querySelector('.projects')
    .setAttribute('style', 'width:' + width + 'px;');
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

//Render Certificates
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

//Text Animation
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }

  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
  document.body.appendChild(css);
};

fetch('./data/person/info.json')
  .then(res => {
    return res.json();
  })
  .then(data => {
    typewriterContent(data.typeingContent);
    userImage(data.image);
    userAboutMe(data.aboutme);
    userSkils(data.skills);
    userSocialMedia(data.social);
  })
  .catch(e => {
    console.log(e);
  });

const typewriterContent = data => {
  let dataArray = data.split('.');
  let resultArray = '["';
  for (let i = 0; i < dataArray.length - 1; i++) {
    resultArray += dataArray[i].trim();
    i < dataArray.length - 2 ? (resultArray += '.","') : (resultArray += '."');
  }
  resultArray += ']';
  document.querySelector('.typewrite').setAttribute('data-type', resultArray);
};

const userImage = data => {
  document.querySelector('#userImage').setAttribute('src', data);
};
const userAboutMe = data => {
  document.querySelector('#aboutme').textContent = data;
};
const userSkils = data => {};
const userSocialMedia = data => {};
