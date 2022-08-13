const  setting = document.querySelector(".s-icon .fa-cog");
const styleSwitch = document.querySelector(".style-switch");
const dayNight = document.querySelector(".style-switch .day-night");
const nav = document.querySelectorAll(".navigation ul .list");
const linkColor = document.querySelectorAll(".link-color")

setting.addEventListener("click",()=>{
    styleSwitch.classList.toggle("active")
})

window.addEventListener('scroll',()=>{
    if(styleSwitch.classList.contains("active")){
        styleSwitch.classList.remove("active");
    }
})


function setActiveTheme(title){
    Array.from(linkColor).map((color)=>{
        if(color.title === title) color.disabled = false;
        else color.disabled = true;
    })
}

dayNight.addEventListener("click",()=>{
    if(dayNight.querySelector("i").classList.contains("fa-sun")){
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    }else{
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    document.querySelector("body").classList.toggle("dark")
})


window.addEventListener("load",()=>{
    document.querySelector("#home").classList.remove("hidden");
    if(document.querySelector("body").classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})




/* function getTag(tag){
    Array.from(nav).map((item)=>{
        item.classList.remove("active");
        if(item.getAttribute("data-link") === tag){
            item.classList.add("active");
            scrollWindow(false);
            const element = document.querySelector(`.main-content #${tag}`);
            element.scrollIntoView({
                behavior: "smooth",
                block:"start"
            });
        }
        
    })
}

const list = document.querySelectorAll(".list");
   
   function adClick(){
    list.forEach((item , index) => {
        item.classList.remove("active");
        this.classList.add("active");
      });
   }
list.forEach((item) => item.addEventListener("click",adClick));



window.addEventListener("load",getTag("home"));
const section = document.querySelectorAll(".main-content .section");
function scrollWindow(a){
        window.addEventListener("scroll",()=>{
            section.forEach((item)=>{
                    let top = window.scrollY;
                    let offset = item.offsetTop - 80;
                    let height = item.offsetHeight;
                    let tag =  item.getAttribute("id");
                    console.log(tag);
                    if(top >= offset && top < offset + height) {
                        console.log("1");
                        Array.from(nav).map((ele)=>{
                        ele.classList.remove("active");
                        console.log(document.querySelector(`.navigation ul li.list[data-link=${tag}]`));
                        document.querySelector(`.navigation ul li.list[data-link=${tag}]`).classList.add("active");
                    })
                   }
            })
           
        })
}
 */


$(document).ready(function() {
    $('.list > a').bind('click', function(e) {
                e.preventDefault(); // prevent hard jump, the default behavior
                console.log($('.list > a'));
                var target = $(this).attr("href"); // Set the target as variable
				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html , body').stop().animate({
						scrollTop: $(target).offset().top
				}, 800, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});
				return false;
		});
});

$(window).scroll(function() {
/* 		var scrollDistance = $(window).scrollTop(); */
		// Show/hide menu on scroll
		/* if (scrollDistance >= 850) {
			$('nav').fadeIn("fast");
		} else {
				$('nav').fadeOut("fast");
		} */
		// Assign active class to nav links while scolling
       
		$('.section').each(function(i) {
            let scrollDistance = $(window).scrollTop();
            let offset = $(this).offset().top - 80;
            let height = $(this).outerHeight();
				if (scrollDistance >= offset && scrollDistance < offset + height) {
					$('.list.active').removeClass('active');
					$('.list').eq(i).addClass('active');
				}
		});
}).scroll();