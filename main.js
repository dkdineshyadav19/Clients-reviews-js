const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
    {
    id: 4,
    name: "Dekster",
    job: "ui/ux",
    img:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
    text:
      "humblebrag, marfa pok pok heirloom fashion axe cray schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.stumptown venmo actually seitan. VHS farm-to-tableEdison bulb put a bird on it   ",
  },
];
const img = document.getElementById("person");
const author= document.getElementById("author");
const job= document.getElementById("job");
const info = document.getElementById("info");

const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const random= document.querySelector(".random-btn");
let index=0;
window.addEventListener("DOMContentLoaded",function(){

updateData(index);


});


function updateData(){
    const arr=reviews[index];
     img.src=arr.img;
    author.textContent=arr.name;
    job.textContent=arr.job;
    info.textContent=arr.text;
}


next.addEventListener("click",function(){

index++;
    if(index>reviews.length -1)
        {
            index=0;
        }
    updateData();
});
prev.addEventListener("click",function(){

index--;
    if(index<0)
        {
            index=reviews.length -1;
        }
    updateData();
});
random.addEventListener("click",function(){

index=Math.floor(Math.random()*reviews.length);
    updateData();
});
