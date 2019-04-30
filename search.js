'use strict';
let container = document.querySelector('.container')

// Search by the given categories
function search() {
    let a = $('.architecture');
    a[0].addEventListener('click', function () {
        container.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            let random = Math.floor(Math.random() * 100);
            searchResult(random, a.attr('id'));
        } 
    })

    let n = $('.nature');
    n[0].addEventListener('click', function () {
        container.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            let random = Math.floor(Math.random() * 100);
            searchResult(random, n.attr('id'));
        } 
    })

    let an = $('.animal');
    an[0].addEventListener('click', function () {
        container.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            let random = Math.floor(Math.random() * 100);
            searchResult(random, an.attr('id'));
        } 
    })

    let f = $('.food');
    f[0].addEventListener('click', function () {
        container.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            let random = Math.floor(Math.random() * 100);
            searchResult(random, f.attr('id'));
        } 
    })

    let p = $('.people');
    p[0].addEventListener('click', function () {
        container.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            let random = Math.floor(Math.random() * 100);
            searchResult(random, p.attr('id'));
        } 
    })

    let d = $('.dance');
    d[0].addEventListener('click', function () {
        container.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            let random = Math.floor(Math.random() * 100);
            searchResult(random, d.attr('id'));
        } 
    })

    let b = $('.bw');
    b[0].addEventListener('click', function () {
        container.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            let random = Math.floor(Math.random() * 100);
            searchResult(random, b.attr('id'));
        } 
    })
}
search()

function searchResult(num, id) {
    fetch(`https://source.unsplash.com/collection/${id}/500x500/?sig=${num}`)
        .then((response) => {
            let item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = 
            `<a href="${response.url}" download="${response.url}">
                <img src="${response.url}" alt="images of other sources"/>
            </a>`
            container.appendChild(item);
        })
}

// Download searched images function
$("img").click(function(){
 var href = $('a').attr('href');
 window.location.href = href;
});


