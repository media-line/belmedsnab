"use strict";

import './top-menu.scss';

const $button = '.top-menu__menu-button';
const activeButton = 'top-menu__menu-button_active';
const $menu = '.top-menu';


$(window).on('load', function () {
    $($button).click(function () {
        $($menu).slideToggle();
        $($button).toggleClass(activeButton);
    });
});
