ScrollTrigger.defaults({
    toggleActions: "play complete reverse reset",// keyword: play,pause,resume,reverse,restart,reset,complete,none | ToggleActions: enter the start, pass the end, enter the end, scroll back pass the start. 
    scrub: 1
});

gsap.to("#text-1", {
    scrollTrigger: {
        id: "text1",
        trigger: "#text-1",
        start:"center center",
        end:"=+300 top",
        toggleClass: "visible",
        pin: true
    },
   
});

gsap.to("#directory", {
    scrollTrigger: {
        id: "direct",
        trigger: "#directory",
        start:"center bottom",
        end:"center 90%",
        toggleClass: "visible"
    },
   
});

gsap.to(".letter", {
    scrollTrigger: {
        id: "letter",
        trigger: ".letter",
        start:"center center",
        end:"=+900 top",
        toggleClass: "visible",
        pin: true
    },
   
});

gsap.to("#last-text", {
    scrollTrigger: {
        id: "last-text",
        trigger: "#last-text",
        start:"center 90%",
        end:"=+100 center",
        toggleClass: "visible",
        pin: true
    },
   
});

//  function loadSVG (){
//     fetch("start-1.svg")
//      .then((response) => {return response.text();})
//      .then((svg) => {
//         document.getElementById('bg-view').innerHTML = svg;
//          document.querySelector('#bg-view svg').setAttribute("preserveAspectRatio","xMidYMid slice");
//          setAnimationScroll();
//      })
//  }
//  loadSVG();

function loadSVGs() {
    const targets = [
        { file: "start-1.svg", id: "bg-view" },
        { file: "start-2.svg", id: "bgintro-view" }
    ];

    const promises = targets.map(({ file, id }) => {
        return fetch(file)
            .then(res => res.text())
            .then(svg => {
                const container = document.getElementById(id);
                if (!container) {
                    console.warn(`Container #${id} not found.`);
                    return;
                }

                container.innerHTML = svg;
                const svgEl = container.querySelector('svg');
                if (svgEl) {
                    svgEl.setAttribute("preserveAspectRatio", "xMidYMid slice");
                }
            });
    });

    // Optional: wait for all SVGs before running animation setup
    Promise.all(promises).then(() => {
        setAnimationScroll();
    });
}

loadSVGs();




function setAnimationScroll (){
    gsap.registerPlugin(ScrollTrigger, SplitText);

     const split = new SplitText("#title", { type: "words" });
    
    let runAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#bg-view",
            start:"top 0%",
            end: "bottom",
            scrub:true
        }
    });

     runAnimation.from("#mountain-range", { y: 400 });

 
     gsap.from(split.words, {
            y: 100,
            autoAlpha: 0,
            stagger: 0.05,
            scrollTrigger: {
            toggleActions: "play complete reverse reset",
            id: "title",
            trigger: "#title",
            start: "center center",
            end: "+=300 top",
            pin: true,
            scrub: 1
         },
     });


    gsap.registerPlugin(ScrollTrigger);
    let runAnimation2 = gsap.timeline({
        scrollTrigger:{
            id: "bgintro",
            trigger: "#bgintro-view",
            start: "top top",
            end: "+=25000",
            scrub: true,
            pin: true,
            
        }
    });

    runAnimation2.add([
        gsap.to("#bgintro-view svg",2,{
             y:-100
         }),
        gsap.from("#ogfamily-2half",2, {
            y:400,
            x:0,
            opacity:0
        }),

        gsap.from("#ogfamily-1half",2, {
            y:400,
            x:0,
            opacity:0
        })
        
    ])
    .add([
        gsap.from("#tape-1-p1",1, {
            scale:3,
            opacity:0
        }),
        gsap.from("#tape-2-p1",1, {
            scale:3,
            opacity:0
        })
    ])
    .add([
        gsap.to("#bgintro-view svg",5,{
             scale:1.75,
             x:1400,
             y:300
         }),
         gsap.from("#chris-sister-text",5, {
            opacity:0,
         })
    ])
    .add([
        gsap.to("#chris-sister-text",5, {
            opacity:0.2,
         }),
        gsap.to("#bgintro-view svg",5,{
             scale:1.7,
             x:1000,
             y:-50
         }),
        gsap.from("#chris-mom-text",5, {
            opacity:0,
         })
    ])
    .add([
        gsap.to("#bgintro-view svg",5,{
             scale:1.75,
             x:300,
             y:630
         }),
        gsap.from("#chris-dad-text",5, {
            opacity:0,
         }),
        gsap.to("#chris-mom-text",5, {
            opacity:0.2,
         })
    ])
    .add([
        gsap.to("#bgintro-view svg",5,{
             scale:1.75,
             x:-100,
             y:340
         }),
        gsap.from("#chris-bio",5, {
            opacity:0,
         }),
        gsap.to("#chris-dad-text",5, {
            opacity:0.2,
         })
    ])
    .add([
        gsap.to("#bgintro-view svg",5,{
             scale:1.2,
             x:-2300,
             y:-40
         }),
        
        gsap.to("#chris-bio",5, {
            opacity:0.2,
         })
    ])
    .add([
        gsap.to("#bgintro-view svg",2,{
             scale:0.8,
             x:-950,
             y:-500
        }),
        gsap.to("#chris-bio",2, {
            opacity:0,
        }),
        gsap.to("#chris-dad-text",2, {
            opacity:0,
        }),
        gsap.to("#chris-mom-text",2, {
            opacity:0,
        }),
        gsap.to("#chris-sister-text",2, {
            opacity:0,
        }),
        gsap.to("#guilt-text",2, {
            opacity:0,
        }),
        ,
        gsap.to("#ogfamily-2half",2, {
            x:400
        }),

        gsap.to("#ogfamily-1half",2, {
            x:400
        }),
        gsap.to("#tape-1-p1",2, {
            
            opacity:0
        }),

        gsap.to("#tape-2-p1",2, {
            
            opacity:0
        }),
        gsap.to("#tape-1-p2",2, {
            
            opacity:0
        }),

        gsap.to("#tape-2-p2",2, {
            
            opacity:0
        }),
        gsap.to("#family2-1half",2, {
            x:-400
        }),

        gsap.to("#family2-2half",2, {
            x:-400
        })
    ])
    .add([
        gsap.from("#violence-text",2, {
            opacity:0,
        }),
        gsap.to("#ogfamily-2half",2, {
            x:300,
            y:50
        }),
        gsap.to("#family2-2half",2, {
            x:-300,
            y:50
        })
    ])
    .add([
        gsap.to("#bgintro-view svg",5,{
             scale:1.5,
             x:-950,
             y:-2045
        }),
        gsap.from("#escape-text",5,{
             opacity:0
        })
    ])
    .add([
        gsap.to("#bgintro-view svg",5,{
             scale:12,
             x:-950,
             y:-13045,
             onComplete: () => console.log("Door animation complete")
        })
    ])
 }


 