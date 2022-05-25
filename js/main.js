$(document).ready(function () {

    const newButton = $('<button id="button-main">Uruchom animację</button>');
    $('body').prepend(newButton);

    const newSquare = $('<div id="square"></div>');
    $(newSquare).css('height', '200px');
    $(newSquare).css('width', '200px');
    $(newSquare).css('background-color', 'red');

    $('body').append(newSquare);

    $('#button-main').click(function() {
        $('#square').animate(
            { marginLeft: '100px', height: '100px', width: '100px' }, 3000
            )
        $('#square').animate(
            {'backgroundColor': 'blue'}, 5000
            )
    });
});
