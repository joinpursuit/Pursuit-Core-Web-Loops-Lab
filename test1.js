for (var i = 99; i >= 0; i--) {
  console.log(sp(i) + ' of beer on the wall, ' + sp(i) + ' of beer.');
  i > 0 ?
    console.log('Take one down, pass it around, ' + sp(i - 1) + ' of beer on the wall.') :
    console.log('Go to the store and buy some more, 99 bottles of beer on the wall.');
  console.log('');
}

function sp(i) {
  switch (i) {
    case 0:
      j = 'No more bottles';
      break;
    case 1:
      j = '1 bottle';
      break;
    default:
      j = i + ' bottles';
  }
  return j;
}
//
// i > 0 ?
//   console.log('Take one down, pass it around, ' + sp(i - 1) + ' of beer on the wall.'):
//   console.log('Go to the store and buy some more, 99 bottles of beer on the wall.');
//
//
// if (i > 0) {
//   console.log('Take one down, pass it around, ' + sp(i - 1) + ' of beer on the wall.');
// } else {
//   console.log('Go to the store and buy some more, 99 bottles of beer on the wall.');
// }
