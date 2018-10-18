$(document).ready(function(){
    $('.expand').click(function() {
        $(this).siblings('.sub-chapter:first').toggle('fast')
  });
});