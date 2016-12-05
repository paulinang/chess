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
  $('#row-7>.square').addClass('chess-piece pawn black');
  $('#row-2>.square').addClass('chess-piece pawn white');
  $('#row-7>.square, #row-2>.square').html('P');

  $('#row-8>.a, #row-8>.h').addClass('chess-piece rook black');
  $('#row-1>.a, #row-1>.h').addClass('chess-piece rook white');
  $('#row-8>.a, #row-8>.h, #row-1>.a, #row-1>.h').html('R');

  $('#row-8>.b, #row-8>.g').addClass('chess-piece knight black');
  $('#row-1>.b, #row-1>.g').addClass('chess-piece knight white');
  $('#row-8>.b, #row-8>.g, #row-1>.b, #row-1>.g').html('N');

  $('#row-8>.c, #row-8>.f').addClass('chess-piece bishop black');
  $('#row-1>.c, #row-1>.f').addClass('chess-piece bishop white');
  $('#row-8>.c, #row-8>.f, #row-1>.c, #row-1>.f').html('B');

  $('#row-8>.d').addClass('chess-piece queen black');
  $('#row-1>.d').addClass('chess-piece queen white');
  $('#row-8>.d, #row-1>.d').html('Q');

  $('#row-8>.e').addClass('chess-piece king black');
  $('#row-1>.e').addClass('chess-piece king white');
  $('#row-8>.e, #row-1>.e').html('K');
}

$('#new-game').on('click', setupPieces);