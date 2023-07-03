const slideshow = document.querySelectorAll(".slide");

const names = document.querySelector(".h1");

const rate = document.querySelector(".rate");
const rating = document.querySelector(".rating");
const positions = document.querySelector(".title");
const about = document.querySelector(".text");
const rightbtn = document.querySelector(".btn-right");
const leftbtn = document.querySelector(".btn-left");
const nameTag = document.querySelector(".name-tag");
const slideHolder = document.querySelector(".slide-holder");
const centerImg = document.querySelector(".center-img");
const bgColor = document.querySelector(".slides")
let current = 0;
// let prev = 2;
// let alpha = slideshow.length;
//select all slides
//use foreach to loop through all the slides
//i want the position to change with each click
//select the next btn
//add an event listener
//slide.style.left = `${(indx ) *  15} slide 3
//slide.style.top = `${(indx + current) +  50} slide 3 //if cuurent is 1

const bottomImg = [
  "aka-images/konan.jpeg",
  "aka-images/Itachi.jpeg",
  "aka-images/Kisame.jpeg",
  "aka-images/Sasori.jpeg",
  "aka-images/Deidara.jpeg",
  "aka-images/Kakuzu.jpeg",
  "aka-images/Hidan.jpeg" ,
  "aka-images/Orochimaru.jpeg",
  "aka-images/Zetsu.jpeg",
  "aka-images/Pain.jpeg"
  
  
];
const newHead = [
  {
    names: `Konan`,

    position: `SDE @Amazon`,
    about: `I am Prankur Gupta, I am a software development engineer at Amazon.I can guide you throughout your preparation phase. Trust me when I know the exact recipe to crock coding interview rounds of top companies for SDE role.  `,
  },
  {
    names: `Itachi`,
    
    position: `ML Engineer @Firework`,
    about: ` Working my way to build the world's future product. 
        Machine Learning Engineer, Data and Technology Evangelist I
        breathe in developing software with intelligence.I have been involved
        with startups with like DailyHunt, Firework HQ, MagilHub to build the AI
        end of their products.`,
  },

  {
    names: `Kisame`,
  
    position: `SDE-1 @Groww`,
    about: `  A curious learner, on a way to become a kickass developer who writes
        Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software
        Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer
        | Coding Instructor`,
  },
  {
    names: `Sasori`,
    
    position: `Software Engineer @Red Hat`,
    about: ` Engineer @Red Hat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI`,
  },
  {
    names: `Deidara`,
    
    position: `SDE-2 @Amazon`,
    about: `I am Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space. `,
  },
    {

    names: `Kakuzu`,


    position: `SDE @Amazon`,
    about: `I am Prankur Gupta, I am a software development engineer at Amazon.I can guide you throughout your preparation phase. Trust me when I know the exact recipe to crock coding interview rounds of top companies for SDE role.  `,
  },
    {

    names: `Hidan`,


    position: `SDE @Amazon`,
    about: `I am Prankur Gupta, I am a software development engineer at Amazon.I can guide you throughout your preparation phase. Trust me when I know the exact recipe to crock coding interview rounds of top companies for SDE role.  `,
  },
    {

    names: `Orochimaru`,


    position: `SDE @Amazon`,
    about: `I am Prankur Gupta, I am a software development engineer at Amazon.I can guide you throughout your preparation phase. Trust me when I know the exact recipe to crock coding interview rounds of top companies for SDE role.  `,
  },

  {

    names: `Zetsu`,


    position: `SDE @Amazon`,
    about: `I am Prankur Gupta, I am a software development engineer at Amazon.I can guide you throughout your preparation phase. Trust me when I know the exact recipe to crock coding interview rounds of top companies for SDE role.  `,
  },

  {

    names: `Pain`,


    position: `SDE @Amazon`,
    about: `I am Prankur Gupta, I am a software development engineer at Amazon.I can guide you throughout your preparation phase. Trust me when I know the exact recipe to crock coding interview rounds of top companies for SDE role.  `,
  },

  {

    names: `Sasori`,

    
    position: `Software Engineer @Red Hat`,
    about: ` Engineer @Red Hat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI`,
  },
  
    {

    names: `Deidara`,

    
    position: `SDE-2 @Amazon`,
    about: `I am Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space. `,
  },
];


let numRate = ["4.9", "5.0","5.0","5.0","5.0", "4.9", "5.0", "5.0", "5.0", "4.5", "3.8"]
let rateArr = [
  `<span><i class="fa fa-star" aria-hidden="true"></i></span>
              <span><i class="fa fa-star" aria-hidden="true" ></i></span>
              <span><i class="fa fa-star" aria-hidden="true" ></i></span>
              <span><i class="fa fa-star" aria-hidden="true"></i></span>
              <span><i class="fa fa-star-half" aria-hidden="true"></i></span>`,
  `   <span><i class="fa fa-star" aria-hidden="true"></i></span>
              <span><i class="fa fa-star" aria-hidden="true" ></i></span>
              <span><i class="fa fa-star" aria-hidden="true" ></i></span>
              <span><i class="fa fa-star" aria-hidden="true"></i></span>
              <span><i class="fa fa-star" aria-hidden="true"></i></span>`,
  `   <span><i class="fa fa-star" aria-hidden="true"></i></span>
              <span><i class="fa fa-star" aria-hidden="true" ></i></span>
              <span><i class="fa fa-star" aria-hidden="true" ></i></span>
              <span><i class="fa fa-star" aria-hidden="true"></i></span>
              <span><i class="fa fa-star" aria-hidden="true"></i></span>`,
  `   <span><i class="fa fa-star" aria-hidden="true"></i></span>
              <span><i class="fa fa-star" aria-hidden="true" ></i></span>
              <span><i class="fa fa-star" aria-hidden="true" ></i></span>
              <span><i class="fa fa-star" aria-hidden="true"></i></span>
              <span><i class="fa fa-star" aria-hidden="true"></i></span>`,
  `   <span><i class="fa fa-star" aria-hidden="true"></i></span>
              <span><i class="fa fa-star" aria-hidden="true" ></i></span>
              <span><i class="fa fa-star" aria-hidden="true" ></i></span>
              <span><i class="fa fa-star" aria-hidden="true"></i></span>
              <span><i class="fa fa-star" aria-hidden="true"></i></span>`,
                `<span><i class="fa fa-star" aria-hidden="true"></i></span>

              <span><i class="fa fa-star" aria-hidden="true" ></i></span>

              <span><i class="fa fa-star" aria-hidden="true" ></i></span>
              <span><i class="fa fa-star" aria-hidden="true"></i></span>
              <span><i class="fa fa-star-half" aria-hidden="true"></i></span>
             `,
             
               `<span><i class="fa fa-star" aria-hidden="true"></i></span>

              <span><i class="fa fa-star" aria-hidden="true" ></i></span>

              <span><i class="fa fa-star" aria-hidden="true" ></i></span>
              <span><i class="fa fa-star" aria-hidden="true"></i></span>
              <span><i class="fa fa-star-half" aria-hidden="true"></i></span>`,
              
                `<span><i class="fa fa-star" aria-hidden="true"></i></span>

              <span><i class="fa fa-star" aria-hidden="true" ></i></span>

              <span><i class="fa fa-star" aria-hidden="true" ></i></span>
              <span><i class="fa fa-star" aria-hidden="true"></i></span>
              <span><i class="fa fa-star-half" aria-hidden="true"></i></span>`,
               `<span><i class="fa fa-star" aria-hidden="true"></i></span>

              <span><i class="fa fa-star" aria-hidden="true" ></i></span>

              <span><i class="fa fa-star" aria-hidden="true" ></i></span>
              <span><i class="fa fa-star" aria-hidden="true"></i></span>
              <span><i class="fa fa-star-half" aria-hidden="true"></i></span>`,
];
let actual;
let maxAngle;




const change = (direction) => {
  
  if (direction === "right") {
    

    if (current > (slideshow.length  + 2)) {
      current === 0;
    }
    else if(current < 0 ) {
        current === slideshow.length - 1
    }
    current++;
  }
  if (current >(newHead.length  +2) ) {
    current = 0;
  } else if (current < 1) {
    current = newHead.length - 1;
  }
   else if (direction === "left") {
    

    if (current < 1) {
      current === slideshow.length;
    }
    if (current > newHead.length - 1) {
      current = 0;
    } else if (current < 0) {
      current = newHead.length - 1;
    }
    current--;
  }
  actual = current * 30;
  maxAngle = 30 * (slideshow.length - 2);
  if (actual < maxAngle) {
    slideHolder.style.transform = `rotate(${actual}deg)`;
  } else if (actual === 0) {
    slideHolder.style.transform = `rotate${maxAngle}deg`;
    current === slideshow.length;
  } else {
    slideHolder.style.transform = `rotate(${0}deg)`;
    current = 0;
  }
 // if(current % 2 !== 0){
//    bgColor.style.background = "#7ABD87  }
//  else{
//    bgColor.style.background = "#8be392"
 // }

  names.innerText = newHead[current].names;
  rate.innerText = numRate[current];
  rating.innerHTML = rateArr[current];
  positions.innerText = newHead[current].position;
  about.innerText = newHead[current].about;
  nameTag.innerText = newHead[current].names;
  centerImg.innerHTML = `<img src="${bottomImg[current]}" alt="center-img">`;
  centerImg.style.transition = `${50}ms ease-in`;
  rotateSlides()
};


 slideshow.forEach(slide =>  slide.style.transform = `rotate(${(current) * 30}deg)`)

function rotateSlides () {
   
  slideshow.forEach((slide,indx) =>{
    if(indx > current){
    slide.style.transform = `rotate(${(current) * 30}deg)`
       
    }
     slide.style.transform = `rotate(-${(current) * 30}deg)`
    
  })
}
let interval ; 
function resetInterval () {
    
    clearInterval (interval)
     interval = setInterval(() =>change("right"), 2100);

}
 let direction;   
change(direction)

rightbtn.addEventListener("click", () => {
    
    change("right")
    rotateSlides()
    resetInterval()
  
});
leftbtn.addEventListener("click", () => {
  change("left")
  rotateSlides()
  resetInterval()
});





var myVar;

function myFunction() {

  myVar = setTimeout(showPage, 5000);
}
function showPage() { 
    document.querySelector(".tri").style.display = "none";
document.getElementById("all").style.display = "block";
document.body.classList.remove('loader')
document.body.classList.add('body')
clearInterval (interval)
interval = setInterval(() =>change("right"), 1700);

}
