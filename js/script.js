const countDown = document.querySelectorAll('.countdown');
const countDownContainer = document.querySelector('.countdown-container');
const scrollTop = document.getElementById('top');

function countNum(){
	countDown.forEach(count=>{
		let target =+ count.getAttribute('data-count');
		let addNum = target / 800;

		let num =+ count.innerHTML;
		if(num < target){
			num = num + addNum;
			num = Math.floor(num);
			count.innerHTML = num;
			setTimeout(countNum,100);
		}else{
			count.innerHTML = target;
		};
	});
};

window.addEventListener('scroll',()=>{
	const height = window.innerHeight	
	const elmDistance = countDownContainer.getBoundingClientRect().top;
	if(height > elmDistance + 200){
		countNum();
	};
	if(window.pageYOffset > 100){
		scrollTop.classList.add('active');
	}else{
		scrollTop.classList.remove('active');
	}
});
scrollTop.addEventListener('click',()=>{
	window.scrollTo(0,0);
});
const filterBtn = document.querySelectorAll('.project .project-nav-link'),
		boxs   = document.querySelectorAll('.project .box');

filterBtn.forEach(btn =>{
	let btnTarget = btn.getAttribute('data-name');
	btn.addEventListener('click',()=>{
		boxs.forEach(box =>{
			let boxTarget = box.getAttribute('data-name');
			if(btnTarget == boxTarget){
				let active = document.querySelector('.project .project-nav-link.active');
				active.classList.remove('active')
				btn.classList.add('active')
				box.classList.add('active');
			}else{
				box.classList.remove('active');
			};
		});
	});
});



