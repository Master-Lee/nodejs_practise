$(function() {
  $('.delete-book').click(function(e) {
    var $this = $(this);
    alert($this.data('id'));
    $.post('delete-book', {id: $this.data('id')}, function() {
      alert('delete success');
      location.href = location.href;
    });
    
    return false;
  });
});