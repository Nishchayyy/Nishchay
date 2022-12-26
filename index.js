let movies=[
    {
        name:"More Than Friends",
        des:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. A qui voluptates optio, molestias, quis, veritatis ipsam velit fuga animi nam aspernatur harum ea.",
        image:"images/more.webp"
    },
    {
        name:"jaya jaya jaya jaya hey",
        des:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. A qui voluptates optio, molestias, quis, veritatis ipsam velit fuga animi nam aspernatur harum ea.",
        image:"images/slider2.webp"
    },
    {
        name:"big boss",
        des:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. A qui voluptates optio, molestias, quis, veritatis ipsam velit fuga animi nam aspernatur harum ea.",
        image:"images/slider3.webp"
    },
    {
        name:"Avatar",
        des:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. A qui voluptates optio, molestias, quis, veritatis ipsam velit fuga animi nam aspernatur harum ea.",
        image:"images/slider4.webp"
    },
    {
        name:"neeya naana",
        des:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. A qui voluptates optio, molestias, quis, veritatis ipsam velit fuga animi nam aspernatur harum ea.",
        image:"images/slider 5.webp"
    }
];
const carousel=document.querySelector(".carousel");
let sliders=[];

let slideIndex=0;//tract the current slide
const createSlide=()=>{
        if(slideIndex>=movies.length){
            slideIndex=0;
        }

        //create DOM elements
        let slide=document.createElement("div");
        var imgElement=document.createElement("img");
        let content=document.createElement("div");
        let h1=document.createElement("h1");
        let p=document.createElement("p");

        //attaching all the elements
        imgElement.appendChild(document.createTextNode(""));
        h1.appendChild(document.createTextNode(movies[slideIndex].name));
        p.appendChild(document.createTextNode(movies[slideIndex].des));
        content.appendChild(h1);
        content.appendChild(p);
        slide.appendChild(imgElement);
        slide.appendChild(content);
        carousel.appendChild(slide);

        //setting up images
        imgElement.src=movies[slideIndex].image;
        slideIndex++; 

        //setting class names
        slide.className="slider";
        content.className="slide-content";
        h1.className="movie-title";
        p.className="movie-des";
        
        //MAIN FORMULA FOR SLIDING THE SLIDERS
        sliders.push(slide);
        if(sliders.length){
            sliders[0].style.marginLeft=`calc(-${100*(sliders.length-2)}%-${30*(sliders.length-2)
            }px)`;
        }
};
for(let i=0;i<3;i++){
    createSlide();
}
setInterval(()=>{
    createSlide();
},3000);
