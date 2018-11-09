$(document).ready(function(){
    $('.expand').click(function() {
        $(this).siblings('.sub-chapter:first').toggle('fast')
    });
    $('.hamburger').click(function() {
        $(this).siblings('.chapters:first').toggle('fast')
    });
});