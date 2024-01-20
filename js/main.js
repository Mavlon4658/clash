let tabs = document.querySelectorAll('.tab');
if (tabs.length) {
    tabs.forEach(tab => {
        let tab_btns = tab.querySelectorAll('button');
        let tab_items = tab.querySelectorAll('.tab_item');
        tab_btns.forEach((tab_btn, btn_idx) => {
            tab_btn.onclick = () => {
                if (!tab_items[btn_idx].classList.contains('active')) {
                    tab_items.forEach((tab_item, item_idx) => {
                        if (tab_item.classList.contains('active')) {
                            tab_item.classList.remove('active');
                            tab_item.classList.add('end-active')
                            setTimeout(() => {
                                tab_item.classList.remove('end-active')
                            }, 200);
                        }
                    })
                    setTimeout(() => {
                        tab_items[btn_idx].classList.add('active')
                    }, 200);
                }
                tab_btns.forEach(item => {
                    item.classList.remove('active')
                })
                tab_btn.classList.add('active')
            }
        })
    })
}

let radios_btn = document.querySelectorAll('.radio_btn');
if (radios_btn.length) {
    radios_btn.forEach(btn => {
        btn.onclick = () => {
            if (btn.querySelector('input[type="radio"]')) {
                btn.querySelector('input[type="radio"]').click();
            }
        }
    })
}

let modal_open = document.querySelectorAll('.accounts__list .price');
let account_modal = document.querySelector('.account_modal')
if (modal_open.length) {
    modal_open.forEach(btn => {
        btn.onclick = () => {
            account_modal.classList.remove('end_active')
            account_modal.classList.add('active')
            disableScrolling()
        }
    })
    
}

let modal_close = document.querySelectorAll('.modal .modal_close');
if (modal_close.length) {
    modal_close.forEach(btn => {
        btn.onclick = () => {
            closeModal();
        }
    })
}

let hall_slider = document.querySelector('.hall_slider .swiper');
if (hall_slider) {
    let hallSlider = new Swiper(hall_slider, {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".hall_slider .btn_next",
            prevEl: ".hall_slider .btn_prev",
        },
    })
}

let hall_show = document.querySelectorAll('.accounts__list .btn_primary');
let hall_modal = document.querySelector('.hall_modal');
if (hall_show.length) {
    hall_show.forEach(show_btn => {
        show_btn.onclick = () => {
            hall_modal.classList.remove('end_active');
            hall_modal.classList.add('active');
        }
    })
}

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

function closeModal () {
    document.querySelectorAll('.modal').forEach(modal => {
        if (modal.classList.contains('active')) {
            modal.classList.remove('active');
            modal.classList.add('end_active');
            enableScrolling();
        }
    })
}