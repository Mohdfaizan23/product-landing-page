Shery.imageEffect("#back", {style: 5, config: {"a":{"value":5,"range":[0,30]},
"b":{"value":0.95,"range":[-1,1]},
"zindex":{"value":-9996999,"range":[-9999999,9999999]},
"aspect":{"value":1.1185628925254958},
"ignoreShapeAspect":{"value":true},
"shapePosition":{"value":{"x":0,"y":0}},
"shapeScale":{"value":{"x":0.5,"y":0.5}},
"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
"shapeRadius":{"value":0,"range":[0,2]},
"currentScroll":{"value":0},
"scrollLerp":{"value":0.07},
"gooey":{"value":true},
"infiniteGooey":{"value":true},
"growSize":{"value":1,"range":[1,15]},
"durationOut":{"value":0.1,"range":[0.1,5]},
"durationIn":{"value":1,"range":[0.1,5]},
"displaceAmount":{"value":0.5},
"masker":{"value":true},
"maskVal":{"value":1.36,"range":[1,5]},
"scrollType":{"value":0},
"geoVertex":{"range":[1,64],"value":1},
"noEffectGooey":{"value":false},
"onMouse":{"value":1},
"noise_speed":{"value":0.84,"range":[0,10]},
"metaball":{"value":0.24,"range":[0,2]},
"discard_threshold":{"value":0.5,"range":[0,1]},
"antialias_threshold":{"value":0,"range":[0,0.1]},
"noise_height":{"value":0.52,"range":[0,2]},
"noise_scale":{"value":14.02,"range":[0,100]}}, gooey: true});

var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;
    document.querySelector("#main").addEventListener("click", function () {
        if (!animating) {
            animating = true;
            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0], {top: "100%"});
                    animating = false;
                },
            });

            index === h1s.length-1 ? (index = 0) : index++;

            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
            });
        };
    });
});
let x = 0;
	let p = -10;
	let i = 1;
	let doom = document.getElementsByClassName('item');
	let confr = (doom.length - 3)*(-350);
	let confl = 0;
	//left
	document.getElementById("l").addEventListener("click", function(){
   		x += 350;
   		if (x > confl){x = confr - 350}else{
    	document.getElementById("move").style.marginLeft = x + "px";}
	});
	//right
	document.getElementById("r").addEventListener("click", function(){
		x += -350;
		p += -10;
		if (x < confr){x = 350}else{
    	document.getElementById("move").style.marginLeft = x + "px";}
	});