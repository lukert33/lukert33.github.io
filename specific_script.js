$(document).ready(function(){

navLink = $('a.blog-nav-item')

//This doesn't work. The css("border") selector won't cooperate with fadeIn/Out. raises:
// Uncaught TypeError: undefined is not a function specific_script.js:10(anonymous function) specific_script.js:10m.event.special.(anonymous function).handle jquery.min.js:3m.event.dispatch jquery.min.js:3r.handle

navLink.hover(
  function(){
    $(this).css('border').fadeIn(300);
 }, function(){
    $(this).css('border').fadeOut(300);
 })

})