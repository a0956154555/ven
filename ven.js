let collapse = document.querySelector(".collapse");
let aboutUs = document.querySelector(".about-us");
let aboutFstChild = document.querySelector(".about-banner:first-child");
let underBannerTxt = document.querySelector(".under-banner-txt");
let aboutBannerFirst = document.querySelector(".about-banner-first");
collapse.addEventListener("click", function () {
  collapse.style.width = "100%";
  setTimeout(() => {
    aboutFstChild.style.width = "0%";
  }, 100);
  setTimeout(() => {
    aboutUs.style.height = "0";
    aboutUs.style.transition = "1s";
  }, 1000);
  setTimeout(() => {
    underBannerTxt.style.padding = "450px 10px";
  }, 2000);
});
function isMobileDevice() {
  return window.matchMedia("(max-width: 450px)").matches;
}

let humanNum = 0;
let humansArr = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
];
let questionLoveMe = document.querySelector(".questionLoveMe");
window.addEventListener("load", function () {
  if (isMobileDevice()) {
    aboutFstChild.style.transition = "1s";
    questionLoveMe.style.opacity = "1";
    setInterval(function () {
      aboutBannerFirst.style.backgroundImage = `url(${humansArr[humanNum]})`;
      humanNum++;
      if (humanNum >= 4) {
        humanNum = 0;
      }
    }, 3000);
  }
});
let askQuestion = document.querySelector(".askQuestion");
let askQuestion2 = document.querySelector(".askQuestion2");
let askQuestion3 = document.querySelector(".askQuestion3");

let questionOneAnswerAll = document.querySelectorAll(".questionOneAnswerAll");
let questionTwoAnswerAll = document.querySelectorAll(".questionTwoAnswerAll");
let questionThreeAnswer = document.querySelector(".questionThreeAnswer");

for (let i = 0; i < questionOneAnswerAll.length; i++) {
  questionOneAnswerAll[i].addEventListener("click", function () {
    this.style.color = "red";
    this.style.border = "1px red solid";
    setTimeout(() => {
      askQuestion.style.transition = "1s";
      askQuestion.style.opacity = "0";
    }, 1000);
    setTimeout(() => {
      askQuestion.style.display = "none";
    }, 2000);
    setTimeout(() => {
      askQuestion2.style.display = "flex";
    }, 2000);
  });
}
for (let i = 0; i < questionTwoAnswerAll.length; i++) {
  questionTwoAnswerAll[i].addEventListener("click", function () {
    this.style.color = "red";
    this.style.border = "1px red solid";
    setTimeout(() => {
      askQuestion2.style.transition = "1s";
      askQuestion2.style.opacity = "0";
    }, 1000);
    setTimeout(() => {
      askQuestion2.style.display = "none";
    }, 2000);

    setTimeout(() => {
      askQuestion3.style.display = "flex";
    }, 2000);
  });
}

let questionThreeTitle = document.querySelector(".questionThreeTitle");
let questionFix = document.querySelector(".questionFix");
let heart = document.querySelector(".heartPic");
let seaPic = document.querySelector(".seaPic");

questionThreeAnswer.addEventListener("click", function () {
  this.style.border = "1px red solid";
  this.style.color = "red";
  setTimeout(() => {
    askQuestion3.style.width = "100%";
    askQuestion3.style.transition = "1s";
    askQuestion3.style.height = "100vh";
  }, 1000);
  setTimeout(() => {
    underQuestionPic.style.display = "none";
  }, 2000);
  setTimeout(() => {
    questionThreeTitle.style.opacity = 0;
    questionThreeTitle.style.transition = "1s";
  }, 3000);
  setTimeout(() => {
    questionThreeTitle.style.display = "none";
    questionFix.style.opacity = 0;
    questionFix.style.transition = "1s";
  }, 4000);
  setTimeout(() => {
    questionFix.style.display = "none";
  }, 5000);
  setTimeout(() => {
    questionThreeAnswer.style.border = "none";
    questionThreeAnswer.style.transition = "1s";
    questionThreeAnswer.style.fontSize = "50px";
  }, 5000);
  setTimeout(() => {
    questionThreeAnswer.opacity = "0";
    questionThreeAnswer.innerHTML = ` <img src="./img/H03.svg" alt="">`;
  }, 6100);
  setTimeout(() => {
    askQuestion3.style.display = "none";
    aboutUs.style.display = "flex";
    underBannerTxt.style.display = "flex";
    seaPic.style.display = "block";
  }, 7100);
});

let underQuestionPic = document.querySelector(".underQuestionPic");
let underQuestionPicNum = 0;
let underPicArr = [
  'url("./img/6.jpg")',
  'url("./img/7.jpg")',
  'url("./img/8.jpg")',
  'url("./img/9.jpg")',
  'url("./img/10.jpg")',
  'url("./img/11.jpg")',
];
setInterval(() => {
  underQuestionPicNum++;
  underQuestionPic.style.transition = "1s";
  underQuestionPic.style.opacity = "0"; // 設定不透明度為 0，即完全透明
  setTimeout(() => {
    underQuestionPic.style.backgroundImage = underPicArr[underQuestionPicNum];
    underQuestionPic.style.opacity = "1"; // 設定不透明度為 1，即完全不透明
  }, 1000); // 等待 500 毫秒後切換圖片並淡入
  if (underQuestionPicNum >= 5) {
    underQuestionPicNum = 0;
  }
}, 3000); // 每 2000 毫秒（2 秒）切換一次圖片

let seaTitle = document.querySelector(".seaTitle");
let seaPicAll = document.querySelector(".seaPicAll");
let seaTrue = false;
let seaBtn = document.querySelector(".seaTitle span");
seaTitle.addEventListener("click", function () {
  seaTrue = !seaTrue;
  if (seaTrue) {
    seaPicAll.style.display = "block";
    seaBtn.innerHTML = `-`;
  } else {
    seaPicAll.style.display = "none";
    seaBtn.innerHTML = `+`;
  }
});

let ramenTitle = document.querySelector(".ramenTitle");
let ramenPicAll = document.querySelector(".ramenPicAll");
let ramenTrue = false;
let ramenBtn = document.querySelector(".ramenTitle span");
ramenTitle.addEventListener("click", function () {
  ramenTrue = !ramenTrue;
  if (ramenTrue) {
    ramenPicAll.style.display = "block";
    ramenBtn.innerHTML = `-`;
  } else {
    ramenPicAll.style.display = "none";
    ramenBtn.innerHTML = `+`;
  }
});
