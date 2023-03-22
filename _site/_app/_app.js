// instant page
import 'instant.page';

// icons
import 'iconify-icon';

// twind
import { install, injectGlobal } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';

install({
  presets: [presetAutoprefix(), presetTailwind()],
  darkMode: 'class',
  hash: false,
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      colors: ({ theme }) => ({
        gray: theme('colors.neutral'),
        pri: {
          '50': '#F8FAF7', 
          '100': '#F2F5F0', 
          '200': '#DEE7D8', 
          '300': '#C9D8C1', 
          '400': '#98B589', 
          '500': '#799D64', 
          '600': '#6D8D5A', 
          '700': '#5B764B', 
          '800': '#495E3C', 
          '900': '#3B4D31',
        },
        sec: {
          '50': '#FEFEFF',
          '100': '#FCFEFE',
          '200': '#F8FCFD',
          '300': '#F4FAFB',
          '400': '#ECF7F9',
          '500': '#E4F3F6',
          '600': '#CDDBDD',
          '700': '#ABB6B9',
          '800': '#899294',
          '900': '#707779',
        },
      }),
      fontFamily: ({ theme }) => ({
        serif: 'Noto Serif,'+ theme('fontFamily.serif'),
      }),
      spacing: {
        '50': '50px',
      },
      keyframes: {
        'sk-stretchdelay': {
          '0%,40%,100%': { transform: 'scaleY(0.5)' },
          '20%': { transform: 'scaleY(1.0)' },
        },
        'waggle': {
          '0%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(1deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'wiggle': {
          '0%': { transform: 'rotate(-20deg)' },
          '10%': { transform: 'rotate(10deg)' },
          '25%': { transform: 'rotate(0deg)' },
        },
        'float': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(0, 1rem)' },
        },
        'slide': {
          'from': { 'background-position': '0 0' },
          'to': { 'background-position': '-639px 0' },
        },
      },
      animation: {
        'waggle': 'waggle .25s',
        'wiggle': 'wiggle 1s alternate infinite',
        'float': 'float 4s ease-in-out alternate infinite',
        'slide': 'slide 60s linear infinite',
      },
    },
  },
  rules: [
    [ 'btn', 'group px-3 py-2 border-(t transparent) w-full bg-pri-500/25 font-normal inline-flex items-center uppercase relative rounded ring-(1 pri-500/90) shadow motion-safe:(transition) hover:(border-white/30 bg-white/10 ring-opacity-100 shadow-lg)', ],
  ],
});

injectGlobal({
  '[x-cloak]': { '@apply': 'hidden', },
  'a:not([class]),a[class="lb"]': { '@apply': 'text-black font-bold motion-safe:transition', },
  'a:not([class]):hover,a:not([class]):focus,a[class="lb"]:hover,a[class="lb"]:focus': { '@apply': 'text-opacity-90 underline', },
  'p:not([class]),ul:not([class]),ol:not([class]),table:not([class])': { '@apply': 'mb-5 border-current', },
  'ul:not([class]) ul:not([class]),ul:not([class]) ol:not([class]),ol:not([class]) ol:not([class]),ol:not([class]) ul:not([class])': { '@apply': 'mb-0', },
  'ul:not([class])': { '@apply': 'ml-5 list-disc', },
  'ol:not([class])': { '@apply': 'ml-5 list-decimal', },
  'blockquote:not([class])': { '@apply': 'ml-5 pl-5 border-(l-2 pri-500/50)', },
  'i:not([class]),em:not([class])': { '@apply': 'font-bold', },
  'hr,hr:not([class])': { '@apply': 'mb-5 border-black opacity-10', },
  'h1,h1:not([class]),h2,h2:not([class]),h3,h3:not([class]),h4,h4:not([class]),h5,h5:not([class]),h6,h6:not([class])': { '@apply': 'mb-5 text-(3xl gray-800/90) font-bold', },
  'h2,h2:not([class])': { '@apply': 'text-2xl', },
  'h3,h3:not([class])': { '@apply': 'text-xl', },
  'h4,h4:not([class])': { '@apply': 'text-lg', },
  'h5,h5:not([class])': { '@apply': 'text-base', },
  'h6,h6:not([class])': { '@apply': 'text-sm', },
  'table:not([class])': { '@apply': 'w-full divide(y gray-600 opacity-25)', },
  'table:not([class]) thead tr': { '@apply': 'text-(sm gray-700) uppercase', },
  'table:not([class]) th,table:not([class]) td': { '@apply': 'py-[2px] px-2 text-left', },
  'table:not([class]) tbody': { '@apply': 'divide(y gray-600 opacity-25)', },
  'table:not([class]) th': { '@apply': 'text-(xs pri-900) uppercase', },
  '.aspect-wide': { '@apply': 'mb-5 pb-[56.25%] h-0 block overflow-hidden relative', },
  '.aspect-wide > iframe,.aspect-wide > embed,.aspect-wide > object,.aspect-wide > video': { '@apply': 'm-0 border-0 w-full h-full absolute inset-0', },
  '.prose h3:not(:first-child)': { '@apply': 'mt-16', },
  '.prose h2:not([class]),.prose h3:not([class]),.prose .heading': { '@apply': 'font-bold leading-normal text-gray-800 uppercase flex items-center', },
  '.prose h2:not([class]):before,.prose h2:not([class]):after,.prose h3:not([class]):before,.prose h3:not([class]):after,.prose .heading:before,.prose .heading:after': { '@apply': 'mr-3 w-4 h-4 bg-current opacity-20 transform -skew-x-12', 'content': '""', },
  '.prose h2:after,.prose h3:after,.prose .heading:after': { '@apply': 'mr-0 ml-3 w-auto flex-1', },
  '.prose h2 a,.prose h3 a,.prose .heading a': { '@apply': 'text-current hover:(text-current text-opacity-50 no-underline) focus:(text-current text-opacity-50 no-underline)', },
  '.prose code': { '@apply': 'px-1 py-px bg-pri-800 text-(yellow-200 xs) inline-block rounded-sm', },
  '.lb': { '@apply': 'inline-block relative', },
  '.lb .img-th + .img-note': { '@apply': 'p-1 bg-pri-900 text-white text-center block absolute inset-x-1 bottom-1 rounded motion-safe:transition', },
  '.lb:hover .img-th + .img-note,.lb:focus .img-th + .img-note': { '@apply': 'opacity-100', },
  '.blocker': { '@apply': 'p-5 w-full h-full bg-black/75 text-center overflow-auto z-[9999] flex items-center justify-center fixed inset-0', },
  '.blocker:before': { 'content': '""', '@apply': 'mr-[-0.05em] h-full align-middle inline-block', },
  '.blocker.behind': { '@apply': 'bg-transparent', },
  '.scene': { 'transform': 'translateY(var(--translateY))', 'will-change': 'transform', },
});

// jquery-like selector
window.$_ = function(selector, next) {
  let selectors = document.querySelectorAll(selector);
  [].forEach.call(selectors, next);
};

// basicscroll
import * as basicScroll from 'basicscroll'
$_('.scene', function(el) {
  basicScroll.create({
    elem: el,
    from: 0,
    to: 519,
    direct: true,
    props: {
      '--translateY': {
        from: '0',
        to: `${ 1 * el.dataset.modifier }px`
      }
    }
  }).start()
});

// mana day
let realDate = new Date();
let realDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let manaDays = ['Mana Holy', 'Aura', 'Salamander', 'Undine', 'Dryad', 'Jinn', 'Gnome'];
let realDay = realDays[realDate.getDay()];
let manaDay = manaDays[realDate.getDay()];
$_('#head-day img', function(el){
  el.setAttribute('src', '/_assets/img/dotw/'+ realDay +'.png')
  el.setAttribute('alt', manaDay)
});
$_('#head-day b span', function(el){
  el.innerText = manaDay
});

// alpinejs
import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import focus from '@alpinejs/focus';
Alpine.plugin(collapse);
Alpine.plugin(focus);
window.Alpine = Alpine;
Alpine.start();