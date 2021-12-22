import PerfectScrollbar from 'perfect-scrollbar';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function navbarBlurOnScroll(id) {
  const navbar = document.getElementById(id);
  let navbarScrollActive = navbar ? navbar.getAttribute('data-scroll') : false;
  let scrollDistance = 5;
  let classes = ['blur', 'shadow-blur', 'left-auto'];
  let toggleClasses = ['shadow-none'];

  if (navbarScrollActive == 'true') {
    window.onscroll = debounce(function () {
      if (window.scrollY > scrollDistance) {
        blurNavbar();
      } else {
        transparentNavbar();
      }
    }, 10);
  } else {
    window.onscroll = debounce(function () {
      transparentNavbar();
    }, 10);
  }

  var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

  if (isWindows) {
    var content = document.querySelector('.main-content');
    if (navbarScrollActive == 'true') {
      content.addEventListener(
        'ps-scroll-y',
        debounce(function () {
          if (content.scrollTop > scrollDistance) {
            blurNavbar();
          } else {
            transparentNavbar();
          }
        }, 10),
      );
    } else {
      content.addEventListener(
        'ps-scroll-y',
        debounce(function () {
          transparentNavbar();
        }, 10),
      );
    }
  }

  function blurNavbar() {
    navbar.classList.add(...classes);
    navbar.classList.remove(...toggleClasses);

    toggleNavLinksColor('blur');
  }

  function transparentNavbar() {
    navbar.classList.remove(...classes);
    navbar.classList.add(...toggleClasses);

    toggleNavLinksColor('transparent');
  }

  function toggleNavLinksColor(type) {
    let navLinks = document.querySelectorAll('.navbar-main .nav-link');
    let navLinksToggler = document.querySelectorAll('.navbar-main .sidenav-toggler-line');

    if (type === 'blur') {
      navLinks.forEach((element) => {
        element.classList.remove('text-body');
      });

      navLinksToggler.forEach((element) => {
        element.classList.add('bg-dark');
      });
    } else if (type === 'transparent') {
      navLinks.forEach((element) => {
        element.classList.add('text-body');
      });

      navLinksToggler.forEach((element) => {
        element.classList.remove('bg-dark');
      });
    }
  }
}

export const main = () => {
  var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

  if (document.getElementById('navbarBlur')) {
    navbarBlurOnScroll('navbarBlur');
  }

  if (isWindows) {
    // if we are on windows OS we activate the perfectScrollbar function
    if (document.getElementsByClassName('main-content')[0]) {
      var mainpanel = document.querySelector('.main-content');
      var ps = new PerfectScrollbar(mainpanel);
    }

    if (document.getElementsByClassName('fixed-plugin')[0]) {
      var fixedplugin = document.querySelector('.fixed-plugin');
      var ps3 = new PerfectScrollbar(fixedplugin);
    }
  }

  if (document.querySelector('.sidenav-toggler')) {
    var sidenavToggler = document.getElementsByClassName('sidenav-toggler')[0];
    var sidenavShow = document.getElementsByClassName('g-sidenav-show')[0];
    var toggleNavbarMinimize = document.getElementById('navbarMinimize');

    if (sidenavShow) {
      sidenavToggler.onclick = function () {
        if (!sidenavShow.classList.contains('g-sidenav-hidden')) {
          sidenavShow.classList.remove('g-sidenav-pinned');
          sidenavShow.classList.add('g-sidenav-hidden');
          if (toggleNavbarMinimize) {
            toggleNavbarMinimize.click();
            toggleNavbarMinimize.setAttribute('checked', 'true');
          }
        } else {
          sidenavShow.classList.remove('g-sidenav-hidden');
          sidenavShow.classList.add('g-sidenav-pinned');
          if (toggleNavbarMinimize) {
            toggleNavbarMinimize.click();
            toggleNavbarMinimize.removeAttribute('checked');
          }
        }
      };
    }
  }

  if (document.querySelector('[data-toggle="widget-calendar"]')) {
    var calendarEl = document.querySelector('[data-toggle="widget-calendar"]');
    var today = new Date();
    var mYear = today.getFullYear();
    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var mDay = weekday[today.getDay()];

    var m = today.getMonth();
    var d = today.getDate();
    document.getElementsByClassName('widget-calendar-year')[0].innerHTML = mYear;
    document.getElementsByClassName('widget-calendar-day')[0].innerHTML = mDay;

    var calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      contentHeight: 'auto',
      initialView: 'dayGridMonth',
      selectable: true,
      initialDate: '2020-12-01',
      editable: true,
      headerToolbar: false,
      events: [
        {
          title: 'Call with Dave',
          start: '2020-11-18',
          end: '2020-11-18',
          className: 'bg-gradient-danger',
        },

        {
          title: 'Lunch meeting',
          start: '2020-11-21',
          end: '2020-11-22',
          className: 'bg-gradient-warning',
        },

        {
          title: 'All day conference',
          start: '2020-11-29',
          end: '2020-11-29',
          className: 'bg-gradient-success',
        },

        {
          title: 'Meeting with Mary',
          start: '2020-12-01',
          end: '2020-12-01',
          className: 'bg-gradient-info',
        },

        {
          title: 'Winter Hackaton',
          start: '2020-12-03',
          end: '2020-12-03',
          className: 'bg-gradient-danger',
        },

        {
          title: 'Digital event',
          start: '2020-12-07',
          end: '2020-12-09',
          className: 'bg-gradient-warning',
        },

        {
          title: 'Marketing event',
          start: '2020-12-10',
          end: '2020-12-10',
          className: 'bg-gradient-primary',
        },

        {
          title: 'Dinner with Family',
          start: '2020-12-19',
          end: '2020-12-19',
          className: 'bg-gradient-danger',
        },

        {
          title: 'Black Friday',
          start: '2020-12-23',
          end: '2020-12-23',
          className: 'bg-gradient-info',
        },

        {
          title: 'Cyber Week',
          start: '2020-12-02',
          end: '2020-12-02',
          className: 'bg-gradient-warning',
        },
      ],
    });
    calendar.render();
  }
};
