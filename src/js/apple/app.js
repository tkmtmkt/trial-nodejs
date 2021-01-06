/**
 * title
 * =====
 *
 * * list1
 * * list2
 *
 *  ID | description
 * ----|-------------
 *  1  | hoge
 *  2  | fuga
 *
 * @module apple/app
 */
const $ = require('jquery');

/**
 * @param none
 */
(function () {
  $('body').append($('<div>').text('hoge'));

  $.ajax({
    type: 'GET',
    url: 'http://localhost:5000',
    success: function (res, status, xhr) {
      console.log(xhr.status);
    },
  });
})();
