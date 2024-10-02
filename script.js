let l1=document.querySelector("#resize_top_1");
let l2=document.querySelector("#resize_top_2");
let l3=document.querySelector("#resize_top_3");
let ti=document.querySelector(".titles");
let t=document.querySelector(".top");
let p=document.querySelector(".projects");
let pd=document.querySelectorAll(".project_description");
let pt=document.querySelectorAll(".project_title");
let pr=document.querySelectorAll(".project");
let hm,wm,h,r;
rs();

window.onresize=()=>{
    rs();
};

window.onload=()=>{
    rs();
};


function rs()
{
    hm=window.screen.height
    wm=window.screen.width;
    r=hm/wm;
    h=100*r;
    if(h/hm*100>20)
    {
    h=20*hm/100;
    }
    if(h/hm*100<10)
        {
            h=10*hm/100;
            }
    t.style.padding=h/4+"px";
    l1.style.height=parseInt(h/3)+"px";
    l2.style.height=parseInt(h/3)+"px";
    l3.style.height=parseInt(h/3)+"px";
    if(r<1)
    {
    ti.style.flexDirection="row";
    ti.style.gap="10px";
        p.style.gridTemplateColumns="1fr 1fr";
        p.style.gridTemplateRows="1fr 1fr 1fr";
        pd.forEach(i=>{
            i.style.fontSize=60/r/5+"px";
        })
        pt.forEach(i=>{
            i.style.fontSize=100/r/5+"px";
        })
        pr.forEach(i=>{
            i.style.height="30vh";
        })
    }
    else
    {
    ti.style.flexDirection="column";
    ti.style.gap="2px";
        p.style.gridTemplateColumns="1fr";
        p.style.gridTemplateRows="1fr 1fr 1fr 1fr 1fr";
        pd.forEach(i=>{
            i.style.fontSize=50/r/2.5+"px";
        })
        pt.forEach(i=>{
            i.style.fontSize=60/r/2.5+"px";
        })
        pr.forEach(i=>{
            i.style.height="30vh";
        })
    }
}

let pda=[];
pda[0]=`"Whether it rains" is a weather app that uses the visual crossing weather API to fetch information about the upcoming week's weather of any city or region that the user inputs, which it will then display systematically.`;
pda[1]=`"Dont'Task" is a todo app that allows users to schedule and organize their tasks. The features include creating multiple projects for different types of tasks, adding deatiled information to each task such as due date, due time, checklists for subtasks, and priority. It also tracks the creation time, and stores all the information for later access through localStorage implementation.`;
pda[2]=`This website is a web implementation of the popular card game "UNO" (Created by Mattel). It implements all of the different functionalities of each type of card and gives a complete gameplay experience. It allows the user to play with upto 3 other bot players, who make thier own decisions, providing a realistic UNO experience.`;
pda[3]=`"L Game" is an abstract strategy game that is played with two players. This is an android app implementation of a game which uses minimalist and simple game design to provide an convinient user experience.`;
pda[4]=`"Convo Pro" is a units converter android app that can convert between various categories of units such as weight, length, time, currencies, etc. It aims to provide maximum convinience to the user by providing all kinds of units based utilities in one app.`;


pd.forEach(i=>{
    i.addEventListener("click",(e)=>{
        let d=document.createElement("div");
        d.id="dialog";
        d.appendChild(document.createElement("p"));
        d.addEventListener("click",(e)=>{
            e.target.remove();
        });
        let b=document.querySelector("body");
        b.insertBefore(d,b.firstChild);
        d.children[0].textContent=pda[e.target.id];
    })
})