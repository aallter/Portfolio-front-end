let menu = document.querySelector('nav');
let menu_logo = document.querySelector('.menu-logo');
var handleMatchMedia = function (mediaQuery) {
        if (mediaQuery.matches) {
          menu.classList.add('mob-menu');
          menu.classList.add('den1');
          menu_logo.classList.add('den1');
        }else{
          menu.classList.remove('mob-menu');
          menu_logo.classList.remove('den1');
        }
    },
    mql = window.matchMedia('all and (max-width: 480px)');

handleMatchMedia(mql);
mql.addListener(handleMatchMedia);



if(menu_logo){
    menu_logo.addEventListener('click',function(e){
        menu.classList.toggle('den1');

    });
};

  
