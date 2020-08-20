const navbarLinks = document.querySelectorAll('a.nav-link');
navbarLinks.forEach(link => link.addEventListener('click', ()=>{
	for(let samplelink of Array.from(navbarLinks)){
		if(samplelink.classList.contains('active')) samplelink.classList.remove('active')
	}
link.classList.add('active');
}))
var id = document.querySelector('.banner-text');
var tl = new TimelineMax({
	delay: 0.5
});
tl.fromTo(id, 0.8, {
	y: -100,
	opacity: 0
}, {
	y: 0,
	opacity: 1
})