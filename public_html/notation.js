/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('document').ready(function() {
    $('.yeah').css('background-color', 'red');

    $('#superHumans').accordion({header: "h3"});

    $('#superHumans').css('width', '400px');

    $('h3').css('background', 'red');

    $('div:last p:nth-child(3)').css('background-color', 'red');

    $('p:last').css('color', 'black');

    $('p:gt(1)').css('border-style', 'solid');

    $('p:first').css({'background-color': 'red', 'color': 'black'});

    $('.2').css({'visibility': 'hidden', 'position': 'absolute'});

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('h1').bind('click', mouseClick);

    $('#replaceWText').css('color', 'black');

    $('#replaceWText').bind('click', replaceWText);

    $('#randPara').bind('click', addAPara);

    $('#removePara').bind('click', removeAPara);

    $('#show').css('visibility', 'hidden');

    $('#hide').bind('click', hideThePage);

    $('#show').bind('click', showThePage);
});

//Functions
function hideThePage() {
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage() {
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}

function removeAPara() {
    $('#randPara p:last').remove();
}

function addAPara() {
    $('#randPara').append('<p>This is my jquery page.</p>');
}

function replaceWText() {
    $('#replaceWText').text('My name is Brandon.');
}

function mouseOverMe() {
    $("h1").html("Jquery");
}

function mouseOutMe() {
    $('h1').html('Page');
}

function mouseClick() {
    $('p').html('My name is Brandon and this is my jquery page.');
}