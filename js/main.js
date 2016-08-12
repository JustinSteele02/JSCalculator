var num1 = 0;
var num2 = 0;
var hitEquals = false;

$('.num').click(function() {
  var btnText = $(this).children().text();
  if ($('#display-text').text() === '0') {
    if (btnText !== '0') {
      $('#display-text').text('').append(btnText);
    }
  } else {
    if (hitEquals) {
      $('#display-text').text('').append(btnText);
      hitEquals = false;
    } else {
      $('#display-text').append(btnText); 
    } 
  }
  console.log(hitEquals);
});

$('.clear').click(function() {
  $('#display-text').text('0');
  if ($(this).attr('id') === 'all-clear') {
    $('#current-op-text').text('');
    $('#current-op-symbol').text('');
    num1 = 0;
    num2 = 0;
  }
});

$('#back').click(function() {
  var str = $('#display-text').text();
  var shortStr = str.slice(0, -1);
  if (str.length > 1) {
    $('#display-text').text(shortStr);
  } else {
    if (str !== '0') {
      $('#display-text').text('0');
    }
  }
});

$('.operator').click(function() {
  if (num1 === 0) {
    num1 = parseFloat($('#display-text').text());
    $('#current-op-text').text($('#display-text').text());
    $('#current-op-symbol').text($(this).children().text());
  } else {
    num2 = parseFloat($('#display-text').text());
    var ans = doMath(num1, num2, $('#current-op-symbol').text());
    $('#current-op-text').text(ans);
    num1 = ans;
    console.log(ans);
  }
  $('#current-op-symbol').text($(this).children().text());
  $('#display-text').text('0');
});

$('#equals').click(function() {
  hitEquals = true;
  num2 = parseFloat($('#display-text').text());
  $('#display-text').text(doMath(num1, num2, $('#current-op-symbol').text()));
  $('#current-op-text').text('');
  $('#current-op-symbol').text('');
  num1 = 0;
  num2 = 0;
});

function doMath(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '×':
      return num1 * num2;
      break;
    case '÷':
      return num1 / num2;
      break;
  }
}