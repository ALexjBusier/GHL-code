// Alila Services — shared front-end behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
    });
  }

  // Filterable grids (gallery + shop)
  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var buttons = group.querySelectorAll('.filter-btn');
    var targetSelector = group.getAttribute('data-filter-group');
    var items = document.querySelectorAll(targetSelector);

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var value = btn.getAttribute('data-filter');

        items.forEach(function (item) {
          var cats = (item.getAttribute('data-category') || '').split(' ');
          if (value === 'all' || cats.indexOf(value) !== -1) {
            item.classList.add('show');
          } else {
            item.classList.remove('show');
          }
        });
      });
    });
  });

  // Inquiry / contact forms — placeholder submit handling.
  // Once this page is cloned into GoHighLevel, replace this form
  // with a native GHL form/survey element so submissions flow into
  // your GHL contacts + pipeline automatically.
  document.querySelectorAll('form[data-placeholder-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Thanks! This form is a design placeholder — connect it to a GHL form after import.';
        note.style.display = 'block';
      }
    });
  });
});
