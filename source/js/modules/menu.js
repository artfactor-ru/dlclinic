let btn = document.querySelector('.burger');
let body = document.body;


btn.addEventListener('click', function() {
    body.classList.toggle('open');
    let close = document.querySelector('.close');

    close.addEventListener('click', function() {
        body.classList.remove('open');
    })
    let menuitem = document.querySelectorAll('.burger-nav-item__more');


    menuitem.forEach((element) => {
        let link = element.querySelector('.burger-nav-item__more>.burger-nav-mobile__link>svg')

        link.addEventListener('click', function() {
            event.preventDefault();
            let levelmenu = element.querySelector('.burger-nav-mobile__list-level');

            let backbtn = element.querySelector('.burger-nav-mobile__item--back');

            levelmenu.classList.add('active');

            backbtn.addEventListener('click', function() {
                console.log(levelmenu);
                levelmenu.classList.remove('active');
            })
        })
    })


})


let subTrigger = document.querySelector('.tag__name');

if (subTrigger) {
    subTrigger.addEventListener('click', function() {
        body.classList.toggle('open-sub');
        let close = subTrigger.querySelector('.close');

        close.addEventListener('click', function() {
            body.classList.remove('open');
        })
        let menuitem = document.querySelectorAll('.tag__item--more');
        menuitem.forEach((element) => {
            let link = element.querySelector('.tag__item--more>.tag__link svg')

            link.addEventListener('click', function(event) {
                event.preventDefault();
                let levelmenu = element.querySelector('.tag__level');

                let backbtn = element.querySelector('.tag__item--back');

                levelmenu.classList.add('active');

                backbtn.addEventListener('click', function(event) {
                    event.preventDefault();
                    levelmenu.classList.remove('active');
                })
            })
        })


    })
}