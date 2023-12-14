document.querySelectorAll('.dropdown').forEach(item => {
  item.addEventListener('click', function(item) {
    if (!this.classList.contains('open')) {
      this.classList.add('open');
    }
    else
      this.classList.remove('open');
  })
});
