// instant page
import 'instant.page';

// icons
import 'iconify-icon';

// twind
import { install, injectGlobal } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import presetTypography from '@twind/preset-typography';

install({
  presets: [presetAutoprefix(), presetTailwind(), presetTypography()],
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
        pri: theme('colors.emerald'),
        sec: theme('colors.sky'),
      }),
      fontFamily: ({ theme }) => ({
        serif: ['"Source Serif 4"', ...theme('fontFamily.serif')],
        heading: ['"Averia Serif Libre"', ...theme('fontFamily.serif')],
      }),
      spacing: {
        '50': '50px',
      },
      keyframes: {
        'sk-stretchdelay': {
          '0%, 40%, 100%': { transform: 'scaleY(0.5)' },
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
    ['text-wrap-(unset|wrap|nowrap|balance|pretty)', 'textWrap'],
    ['btn', 'group px-3 py-2 border-(t transparent) w-full bg-pri-500/25 font-normal no-underline inline-flex items-center uppercase relative rounded ring-(1 pri-500/90) shadow motion-safe:(transition) hover:(border-white/30 bg-white/10 ring-opacity-100 shadow-lg)',],
  ],
});

injectGlobal`
  @layer base {
    [x-cloak] { @apply hidden; }
    hr { @apply border-gray-600/25; }
    pre > code { @apply !bg-transparent !leading-[21px]; }
    .prose {
      @apply
        !max-w-none
        prose-a:(text-gray-900 font-bold hover:(text-gray-700 no-underline))
        prose-headings:(font-heading)
        prose-ul:(list-circle)
        prose-li:([&::marker]:(text-gray-600/70))
        prose-hr:(border-gray-600/25)
        prose-em:(text-gray-900 font-bold)
        prose-pre:(max-w-[768px] lg:(max-w-[650px]))
        prose-code:(py-0.5 px-px bg-pri-900 text-(pri-200 sm) inline-block leading-none rounded)
        prose-tr:(border-gray-600/25);
    }
    .heading {
      @apply
        text-(gray-800 2xl)
        leading-normal
        font-(bold heading)
        uppercase
        flex
        items-center
        gap-3
        before:(w-4 h-4 bg-current opacity-20 -skew-x-12 content-[''])
        after:(w-auto h-4 bg-current flex-1 opacity-20 -skew-x-12 content-['']);
    }
    .aspect-wide { @apply mb-5 pb-[56.25%] h-0 block overflow-hidden relative; }
    .aspect-wide > iframe,.aspect-wide > embed,.aspect-wide > object,.aspect-wide > video { @apply m-0 border-0 w-full h-full absolute inset-0; }
    .warning { @apply mb-5 p-2 bg-yellow-400 text-(gray-900 wrap-balance) font-bold uppercase rounded; }
    .scene { transform: translateY(var(--translateY)); will-change: transform; }
  }
`
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