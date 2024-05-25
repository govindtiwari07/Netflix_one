const main = document.querySelectorAll(".five_blok");
const child = document.querySelectorAll(".five_blok_bottom");
const rotate = document.querySelectorAll('.rotate');
main[0].addEventListener('click',() => {
    child[0].style.display = 'block';
    child[1].style.display = 'none';
    child[2].style.display = 'none';
    child[3].style.display = 'none';
    child[4].style.display = 'none';
    child[5].style.display = 'none';
    rotate[0].style.transform = 'rotate(45deg)';
    rotate[1].style.transform = 'rotate(0deg)';
    rotate[2].style.transform = 'rotate(0deg)';
    rotate[3].style.transform = 'rotate(0deg)';
    rotate[4].style.transform = 'rotate(0deg)';
    rotate[5].style.transform = 'rotate(0deg)';
    main[0].addEventListener('dblclick',function(){
        child[0].style.display = 'none';
        rotate[0].style.transform = 'rotate(0deg)';
    })
})

main[1].addEventListener('click',() => {
    child[1].style.display = 'block';
    child[0].style.display = 'none';
    child[2].style.display = 'none';
    child[3].style.display = 'none';
    child[4].style.display = 'none';
    child[5].style.display = 'none';
    rotate[1].style.transform = 'rotate(45deg)';
    rotate[0].style.transform = 'rotate(0deg)';
    rotate[2].style.transform = 'rotate(0deg)';
    rotate[3].style.transform = 'rotate(0deg)';
    rotate[4].style.transform = 'rotate(0deg)';
    rotate[5].style.transform = 'rotate(0deg)';
    main[1].addEventListener('dblclick',function(){
        child[1].style.display = 'none';
        rotate[1].style.transform = 'rotate(0deg)';
    })
})

main[2].addEventListener('click',() => {
    child[2].style.display = 'block';
    child[0].style.display = 'none';
    child[1].style.display = 'none';
    child[3].style.display = 'none';
    child[4].style.display = 'none';
    child[5].style.display = 'none';
    rotate[2].style.transform = 'rotate(45deg)';
    rotate[0].style.transform = 'rotate(0deg)';
    rotate[1].style.transform = 'rotate(0deg)';
    rotate[3].style.transform = 'rotate(0deg)';
    rotate[4].style.transform = 'rotate(0deg)';
    rotate[5].style.transform = 'rotate(0deg)';
    main[2].addEventListener('dblclick',function(){
        child[2].style.display = 'none';
        rotate[2].style.transform = 'rotate(0deg)';
    })
})

main[3].addEventListener('click',() => {
    child[3].style.display = 'block';
    child[0].style.display = 'none';
    child[1].style.display = 'none';
    child[2].style.display = 'none';
    child[4].style.display = 'none';
    child[5].style.display = 'none';
    rotate[3].style.transform = 'rotate(45deg)';
    rotate[0].style.transform = 'rotate(0deg)';
    rotate[2].style.transform = 'rotate(0deg)';
    rotate[1].style.transform = 'rotate(0deg)';
    rotate[4].style.transform = 'rotate(0deg)';
    rotate[5].style.transform = 'rotate(0deg)';
    main[3].addEventListener('dblclick',function(){
        child[3].style.display = 'none';
        rotate[3].style.transform = 'rotate(0deg)';
    })
})

main[4].addEventListener('click',() => {
    child[4].style.display = 'block';
    child[0].style.display = 'none';
    child[1].style.display = 'none';
    child[2].style.display = 'none';
    child[3].style.display = 'none';
    child[5].style.display = 'none';
    rotate[4].style.transform = 'rotate(45deg)';
    rotate[0].style.transform = 'rotate(0deg)';
    rotate[2].style.transform = 'rotate(0deg)';
    rotate[3].style.transform = 'rotate(0deg)';
    rotate[1].style.transform = 'rotate(0deg)';
    rotate[5].style.transform = 'rotate(0deg)';
    main[4].addEventListener('dblclick',function(){
        child[4].style.display = 'none';
        rotate[4].style.transform = 'rotate(0deg)';
    })
})

main[5].addEventListener('click',() => {
    child[5].style.display = 'block';
    child[0].style.display = 'none';
    child[1].style.display = 'none';
    child[2].style.display = 'none';
    child[3].style.display = 'none';
    child[4].style.display = 'none';
    rotate[5].style.transform = 'rotate(45deg)';
    rotate[0].style.transform = 'rotate(0deg)';
    rotate[2].style.transform = 'rotate(0deg)';
    rotate[3].style.transform = 'rotate(0deg)';
    rotate[4].style.transform = 'rotate(0deg)';
    rotate[1].style.transform = 'rotate(0deg)';
    main[5].addEventListener('dblclick',function(){
        child[5].style.display = 'none';
        rotate[5].style.transform = 'rotate(0deg)';
    })
})