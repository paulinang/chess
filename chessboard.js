var selectedSquare;

$('.square').on('click', function(evt) {
    var square = evt.target;
    var squareId = square.dataset.chessColumn + square.parentElement.dataset.chessRow;
    // alert('Clicked ' + squareId);
    // debugger;
    if (square.id == '') {
      if (selectedSquare) {
        selectedSquare.id = '';
      }
      square.id = 'selected';
      selectedSquare = square;
    }
    else if (square.id == 'selected') {
      square.id = '';
      selectedSquare = null;
    }
    // debugger;
  });

function setupPieces() {
  $('#row-7>.square').html('<span class=\'chess-piece pawn black\'>P</span>');
  $('#row-2>.square').html('<span class=\'chess-piece pawn white\'>P</span>');

  $('#row-8>.a, #row-8>.h').html('<span class=\'chess-piece rook black\'>R</span>');
  $('#row-1>.a, #row-1>.h').html('<span class=\'chess-piece rook white\'>R</span>');

  $('#row-8>.b, #row-8>.g').html('<span class=\'chess-piece knight black\'>N</span>');
  $('#row-1>.b, #row-1>.g').html('<span class=\'chess-piece knight white\'>N</span>');

  $('#row-8>.c, #row-8>.f').html('<span class=\'chess-piece bishop black\'>B</span>');
  $('#row-1>.c, #row-1>.f').html('<span class=\'chess-piece bishop white\'>B</span>');

  $('#row-8>.d').html('<span class=\'chess-piece queen black\'>Q</span>');
  $('#row-1>.d').html('<span class=\'chess-piece queen white\'>Q</span>');

  $('#row-8>.e').html('<span class=\'chess-piece king black\'>K</span>');
  $('#row-1>.e').html('<span class=\'chess-piece king white\'>K</span>');
}

$('#new-game').on('click', setupPieces);