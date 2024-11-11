let d = new Date();
let Today = d.getDate();
let Month = d.getMonth();

//Configurable object for images chosen 
const HolidayObject = {
  independence: {
    month: 0,
    start: 15,
    end: 15,
    mbImg: "",
    pcImg: "",
    btnMesg: "",
    btnLink: ""
  },
  independence: {
    month: 6,
    start: 3,
    end: 8,
    mbImg: "https://files.cevimedone.com/cevimed/images/july-4th/mobile-4th.jpg",
    pcImg: "https://files.cevimedone.com/cevimed/images/july-4th/4th.jpg",
    btnMesg: "Celebrate Your independence in Comfort",
    btnLink: ""
  },
  thanksgiving: {
    month: 10,
    start: 28,
    end: 30,
    mbImg: "https://files.cevimedone.com/cevimed/images/",
    pcImg: "./tnxGvn.jpg",
    btnMesg: "Thank You for Choosing Us!",
    btnLink: ""
  },
  december: {
    month: 11,
    start: 1,
    end: 23,
    mbImg: "https://files.cevimedone.com/cevimed/images/",
    pcImg: "./december.jpg",
    btnMesg: "Happy Holiday Season ",
    btnLink: ""
  },
  christmas: {
    month: 11,
    start: 23,
    end: 31,
    mbImg: "https://files.cevimedone.com/cevimed/images/",
    pcImg: "./christmas.jpg",
    btnMesg: "Marry Christmas Happy New Years",
    btnLink: ""
  },
};

//function that handles logic
const imgSwapper = () => {
  if (
    Month == HolidayObject["thanksgiving"].month &&
    Today >= HolidayObject["thanksgiving"].start &&
    Today <= HolidayObject["thanksgiving"].end
  ) {
    document.querySelector(".pcBanner").src =
      HolidayObject["thanksgiving"].pcImg;
      document.querySelector(
          ".upholsteryBtn"
        ).innerText = `${HolidayObject["thanksgiving"].btnMesg}`;
        document.querySelector(".bannerContainer").style.display = "block";
        document.querySelector(".homepage-banner.container-fluid.container--xxl").style.display = "none";

        // document.querySelector(".mbBanner").src = HolidayObject["thanksgiving"].mbImg
  } else if (
    Month == HolidayObject["december"].month &&
    Today >= HolidayObject["december"].start &&
    Today <= HolidayObject["december"].end 
  ) {
    document.querySelector(".pcBanner").src = HolidayObject["december"].pcImg;
    document.querySelector(
        ".upholsteryBtn"
    ).innerText = `${HolidayObject["december"].btnMesg}`;
    document.querySelector(".bannerContainer").style.display = "block";
    document.querySelector(".homepage-banner.container-fluid.container--xxl").style.display = "none";

    // document.querySelector(".mbBanner").src = HolidayObject["december"].mbImg
  } else if (
    Month == HolidayObject["christmas"].month &&
    Today >= HolidayObject["christmas"].start &&
    Today <= HolidayObject["christmas"].end
  ) {
    document.querySelector(".pcBanner").src = HolidayObject["christmas"].pcImg;
    // document.querySelector(".mbBanner").src = HolidayObject["christmas"].mbImg
    document.querySelector(
      ".upholsteryBtn"
    ).innerText = `${HolidayObject["christmas"].btnMesg}`;
    document.querySelector(".bannerContainer").style.display = "block";
    document.querySelector(".homepage-banner.container-fluid.container--xxl").style.display = "none";
  } else if (

    //target specific images only is a feature !!


    Month == HolidayObject["independence"].month &&
    Today >= HolidayObject["independence"].start &&
    Today <= HolidayObject["independence"].end
  ) {
    document.querySelector(".pcBanner").src =
      HolidayObject["independence"].pcImg;
    // document.querySelector(".mbBanner").src = HolidayObject["independence"].mbImg
    document.querySelector(
      ".upholsteryBtn"
    ).innerText = `${HolidayObject["independence"].btnMesg}`;
    document.querySelector(".bannerContainer").style.display = "block";
    document.querySelector(".homepage-banner.container-fluid.container--xxl").style.display = "none";
  } else {
    document.querySelector(".pcBanner").style.display = "none";
    document.querySelector(".homepage-banner container-fluid container--xxl").style.display = "block";
    console.log("Images/default.png");
  }
};

imgSwapper();
