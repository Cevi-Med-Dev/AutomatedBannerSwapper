let d = new Date();
let Today = d.getDate();
let Month = d.getMonth();

//Configurable object for images chosen
const Holidays = {
  independence: {
    title: "independence",
    month: 6,
    start: 3,
    end: 8,
    mbImg:
      "https://files.cevimedone.com/cevimed/images/holidays/mobile-4th.jpg",
    pcImg: "https://files.cevimedone.com/cevimed/images/holidays/4th.jpg",
    btnMesg: "Celebrate Your independence in Comfort",
    btnLink: "",
  },
  veteransDay: {
    title: "veteransDay",
    month: 10,
    start: 11,
    end: 11,
    mbImg: "https://files.cevimedone.com/cevimed/images/holidays/vDay.jpg",
    pcImg: "https://files.cevimedone.com/cevimed/images/holidays/vDay.jpg",
    btnMesg: "",
    btnLink: "",
  },
  thanksgiving: {
    title: "thanksgiving",
    month: 10,
    start: 26,
    end: 29,
    mbImg: "https://files.cevimedone.com/cevimed/images/holidays/tnxGvn-mb.jpg",
    pcImg: "https://files.cevimedone.com/cevimed/images/holidays/tnxGvn.jpg",
    btnLink: "",
  },
};

//function that handles logic
const imgSwapper = (holiday) => {
  console.log(Holidays[`${holiday}`].pcImg);
  if (window.innerWidth > 700) {
    document.querySelector(".card-homepage__asset.section-bg img").src = Holidays[`${holiday}`].pcImg;
  } else {
    if (Holidays[`${holiday}`].mbImg) {
      console.log(Holidays[`${holiday}`].mbImg);
      document.querySelector(".card-homepage__asset.section-bg img").src = Holidays[`${holiday}`].mbImg;
    }
  }
  if (Holidays[`${holiday}`].btnMesg) {
    console.log(Holidays[`${holiday}`].mbImg);
    document.querySelector(
      ".card-homepage__button.btn.btn-primary.btn1"
    ).innerText = Holidays[`${holiday}`].btnMesg;
  }else{
    document.querySelector(".card-homepage__button.btn.btn-primary.btn1").style.display = "none";
  }
};

Object.values(Holidays).forEach((holiday) => {
  if (holiday.month === Month && holiday.end > Today && holiday.start <= Today) {
    imgSwapper(holiday.title);
  }
});
