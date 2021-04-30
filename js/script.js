$(function () {
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse("hide");
    }
  });
});
((global) => {
  var dc = {};
  var homeHtml = "snippets/home-snippet.html";
  const insertHtml = (selector, html) => {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };
  const showLoading = (selector) => {
    var html = "<div class = 'text-center'";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  };
  document.addEventListener("DOMContentLoaded", (event) => {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      homeHtml,
      (responseText) => {
        document.querySelector("#main-content").innerHTML = responseText;
      },
      false
    );
  });
  global.$dc = dc;
})(window);
