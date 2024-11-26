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
    start: 25,
    end: 30,
    mbImg: "https://files.cevimedone.com/cevimed/images/holidays/tnxGvn-mb.jpg",
    pcImg: "https://files.cevimedone.com/cevimed/images/holidays/tnxGvn.jpg",
    btnMesg: "Thank You for Choosing Us!",
    btnLink: "",
  },
  december: {
    title: "december",
    month: 11,
    start: 1,
    end: 23,
    mbImg: "https://files.cevimedone.com/cevimed/images/holidays",
    pcImg: "./december.jpg",
    btnMesg: "Happy Holiday Season ",
    btnLink: "",
  },
  christmas: {
    title: "christmas",
    month: 11,
    start: 23,
    end: 31,
    mbImg: "https://files.cevimedone.com/cevimed/images/holidays",
    pcImg: "./christmas.jpg",
    btnMesg: "Marry Christmas Happy New Years",
    btnLink: "",
  },
};

//function that handles logic
const imgSwapper = (holiday) => {
  console.log(holiday);
  {
    if (holiday.pcImg) {
      document.querySelector(".card-homepage__asset.section-bg img").src =
        holiday.pcImg;
    }
    //  if(holiday.pcImg){document.querySelector(".pcBanner").src = holiday.mbImg}
    if (holiday.btnMesg) {
      document.querySelector(".card-homepage__button.btn.btn-primary.btn1").innerText = holiday.btnMesg;
    }
    if (holiday.btnLink) {
      document.querySelector(".card-homepage__button.btn.btn-primary.btn1").href = holiday.btnLink;
    }
  }
};

let currentHoliday = Object.values(Holidays).find(
  (holiday) => holiday.month === Month && holiday.start === Today
);

  imgSwapper(currentHoliday);
