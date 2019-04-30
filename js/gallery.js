'use strict';

//** Sort the gallery **//
$('.list1, .list2, .list3').wrapAll('<ol id="sort-list">');
$('.list1').wrapAll('<li id="list1">');
$('.list2').wrapAll('<li id="list2">');
$('.list3').wrapAll('<li id="list3">');
let defaultArray = $('li').toArray();
// let defaultImage = $('.list1 div, .list2 div, .list3 div').toArray();

function sort() {
    $('.i3')[0].src = "./img/Gallery/3.png"

    let newList = document.getElementsByClassName('new');
    newList[0].addEventListener('click', function () {
        newSort();
    });

    let featuredList = document.getElementsByClassName('featured');
    featuredList[0].addEventListener('click', function () {
        featuredSort();
    });

    let editorList = document.getElementsByClassName('editor');
    editorList[0].addEventListener('click', function () {
        editorSort();
    })
}
sort()

// New Sort
function newSort() {
    let list = $('#sort-list');
    for (let i = 0; i < defaultArray.length; i++) {
        list.append(defaultArray[i]);
    }
    return list;
}

// Featured Sort
function featuredSort() {
    let list = $('#sort-list');
    for (let i = 0; i < defaultArray.length; i++) {
        if (i == 0) {
            list.append(defaultArray[i + 2]);
        }
        else if (i == 1) {
            list.append(defaultArray[i - 1]);
        } else {
            list.append(defaultArray[i - 1]);
        }
    }
    return list;
}

// Editors' Picks Sort
function editorSort() {
    let list = $('#sort-list');
    for (let i = 0; i < defaultArray.length; i++) {
        if (i == 0) {
            list.append(defaultArray[i + 1]);
        }
        else if (i == 1) {
            list.append(defaultArray[i + 1]);
        } else {
            list.append(defaultArray[i - 2]);
        }
    }
    return list;
}


//** Filter the Gallery **//
function filter() {
    let darkList = document.getElementsByClassName('dark');
    darkList[0].addEventListener('click', function () {
        darkFilter();
    });

    let brightList = document.getElementsByClassName('bright');
    brightList[0].addEventListener('click', function () {
        brightFilter();
    });

    let unlockList = document.getElementsByClassName('unlocks');
    unlockList[0].addEventListener('click', function () {
        unlockFilter();
    })

    let lockList = document.getElementsByClassName('locks');
    lockList[0].addEventListener('click', function () {
        lockFilter();
    })

    let resetList = document.getElementsByClassName('reset');
    resetList[0].addEventListener('click', function () {
        newSort();
    })  

}
filter();

// Dark Filter
function darkFilter() {
    let list = $('#sort-list')[0];
    list.innerHTML = '';
    list.append(defaultArray[0]);
    $('.i3')[0].src = "./img/Gallery/6.png"
    $("p:nth-child(4)")[4].innerHTML = "Lock";
    return list;
}

// Bright Filter
function brightFilter() {
    let list = $('#sort-list')[0];
    list.innerHTML = '';
    list.append(defaultArray[1]);
    list.append(defaultArray[2]);
    $('.i6')[0].src = "./img/Gallery/3.png"
    $("p:nth-child(4)")[4].innerHTML = "Unlock";
    return list;
}

// Unlock Filter
function unlockFilter() {
    let list = $('#sort-list')[0];
    list.innerHTML = '';
    list.append(defaultArray[0]);
    $('.i3')[0].src = "./img/Gallery/3.png"
    $("p:nth-child(4)")[4].innerHTML = "Unlock";
    return list;
}

// Lock Filter
function lockFilter() {
    let list = $('#sort-list')[0];
    list.innerHTML = '';
    list.append(defaultArray[1]);
    list.append(defaultArray[2]);
    $('.i6')[0].src = "./img/Gallery/6.png"
    $("p:nth-child(4)")[4].innerHTML = "Lock";
    return list;
}

// Alert for Lock selection
function lockAlert() {
  alert("Opps!!! This filter is LOCK T.T");
}



