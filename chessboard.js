var selectedSquare;

$('.square').on('click', function(evt) {
  var square = evt.target;
  var squareId = square.dataset.chessColumn + square.parentElement.dataset.chessRow;
  highlightSquare(square);
  if (square.classList.contains('chess-piece') != -1) {
    showPaths(square);
  }
  });

function highlightSquare(square) {
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
}

var columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var chessMoves = {
  'pawn': {
    x: [0],
    y: [1]
  }
}

function showPaths(square) {
  var chessPiece = square.dataset.chessPiece;
  var coordinates = {
    x: columns.indexOf(square.dataset.chessColumn),
    y: parseInt(square.parentElement.dataset.chessRow)
  };
  var possibleCoordinates = [coordinates.x + 0, coordinates.y + 1];
  var possibleSquares = $('#row-' + possibleCoordinates[1] + '>.' + columns[possibleCoordinates[0]]);
  debugger;

}

function setupPieces() {
  $('#row-7>.square').addClass('chess-piece black').attr('data-chess-piece', 'pawn');
  $('#row-2>.square').addClass('chess-piece white').attr('data-chess-piece', 'pawn');
  $('#row-7>.square, #row-2>.square').html('P');

  $('#row-8>.a, #row-8>.h').addClass('chess-piece black').attr('data-chess-piece', 'rook');
  $('#row-1>.a, #row-1>.h').addClass('chess-piece white').attr('data-chess-piece', 'rook');
  $('#row-8>.a, #row-8>.h, #row-1>.a, #row-1>.h').html('R');

  $('#row-8>.b, #row-8>.g').addClass('chess-piece black').attr('data-chess-piece', 'knight');
  $('#row-1>.b, #row-1>.g').addClass('chess-piece white').attr('data-chess-piece', 'knight');
  $('#row-8>.b, #row-8>.g, #row-1>.b, #row-1>.g').html('N');

  $('#row-8>.c, #row-8>.f').addClass('chess-piece black').attr('data-chess-piece', 'bishop');
  $('#row-1>.c, #row-1>.f').addClass('chess-piece white').attr('data-chess-piece', 'bishop');
  $('#row-8>.c, #row-8>.f, #row-1>.c, #row-1>.f').html('B');

  $('#row-8>.d').addClass('chess-piece black').attr('data-chess-piece', 'queen');
  $('#row-1>.d').addClass('chess-piece white').attr('data-chess-piece', 'queen');
  $('#row-8>.d, #row-1>.d').html('Q');

  $('#row-8>.e').addClass('chess-piece black').attr('data-chess-piece', 'king');
  $('#row-1>.e').addClass('chess-piece white').attr('data-chess-piece', 'king');
  $('#row-8>.e, #row-1>.e').html('K');
}

$('#new-game').on('click', setupPieces);