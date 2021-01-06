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
 * @module orange/app
 */
const $ = require('jquery');

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
