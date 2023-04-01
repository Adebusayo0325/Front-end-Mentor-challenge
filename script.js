const slideshow = document.querySelectorAll(".slide");
const names = document.querySelector(".h1");
const rate = document.querySelector(".rate");
const rating = document.querySelector(".rating");
const position = document.querySelector(".title");
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
  " images/Ellipse 17.png",
  "images/Ellipse 19.png",
  "images/Ellipse 20.png",
  "images/Ellipse 21.png",
  "images/Ellipse 18.png",
];
const newHead = [
  {
    names: `Prankur Gupta`,

    position: `SDE @Amazon`,
    about: `I am Prankur Gupta, I am a software development engineer at Amazon.I can guide you throughout your preparation phase. Trust me when I know the exact recipe to crock coding interview rounds of top companies for SDE role.  `,
  },
  {
    names: `Ankita`,
    
    position: `ML Engineer @Firework`,
    about: ` Working my way to build the world's future product. 
        Machine Learning Engineer, Data and Technology Evangelist I
        breathe in developing software with intelligence.I have been involved
        with startups with like DailyHunt, Firework HQ, MagilHub to build the AI
        end of their products.`,
  },

  {
    names: `Keshav Bathla`,
  
    position: `SDE-1 @Groww`,
    about: `  A curious learner, on a way to become a kickass developer who writes
        Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software
        Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer
        | Coding Instructor`,
  },
  {
    names: `Saumya Singha`,
    
    position: `Software Engineer @Red Hat`,
    about: ` Engineer @Red Hat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI`,
  },
  {
    names: `Saurav Pal`,
    
    position: `SDE-2 @Amazon`,
    about: `I am Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space. `,
  },
];


let numRate = ["4.9", "5.0","5.0","5.0","5.0"]
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
];
let actual;
let maxAngle;
const change = (direction) => {
  
  if (direction === "right") {
    

    if (current > slideshow.length - 1) {
      current === 0;
    }
    current++;
  }
  if (current > newHead.length - 1) {
    current = 0;
  } else if (current < 0) {
    current = newHead.length - 1;
  } else if (direction === "left") {
    

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
  maxAngle = 30 * (slideshow.length - 4);
  if (actual < maxAngle) {
    slideHolder.style.transform = `rotate(${actual}deg)`;
  } else if (actual === 0) {
    slideHolder.style.transform = `rotate${maxAngle}deg`;
    current === slideshow.length;
  } else {
    slideHolder.style.transform = `rotate(${0}deg)`;
    current = 0;
  }
  if(current % 2 !== 0){
    bgColor.style.background = "#7ABD87"
  }
  else{
    bgColor.style.background = "#8be392"
  }

  names.innerText = newHead[current].names;
  rate.innerText = numRate[current];
  rating.innerHTML = rateArr[current];
  position.innerText = newHead[current].position;
  about.innerText = newHead[current].about;
  nameTag.innerText = newHead[current].names;
  centerImg.innerHTML = `<img src="${bottomImg[current]}" alt="center-img">`;
  centerImg.style.transition = `${50}ms ease-in`;
};




function rotateSlides () {
   
  slideshow.forEach((slide,indx) =>{
    if(indx > current){
    slide.style.transform = `rotate(${(current) * 30}deg)`
       
    }
     slide.style.transform = `rotate(-${(current) * 30}deg)`
    
  })
}



rightbtn.addEventListener("click", () => {
    
    change("right")
    rotateSlides()
  
});
leftbtn.addEventListener("click", () => {
  change("left")
  rotateSlides()
});
