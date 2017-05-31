"use strict";

import './accuray-map.scss';

import {promiseHeaderHeight} from './../../modules/header/header';

const $tab = ".accuray-map__point";
const $info = ".accuray-map__info";
const $content = ".accuray-map__content";
const $link = ".accuray-map__anchor-link";
let headerHeight;


$(window).on('load', function () {
    promiseHeaderHeight.then(
        result => {
            headerHeight = result;
        }
    );

    $($tab).click(function () {
        let index;
        index = $(this).index();

        $($info).fadeOut();
        $($info).eq(index).fadeIn();
        $('html, body').animate({scrollTop: $($content).offset().top - headerHeight}, 1000);
    });

    $($link).click(function () {
        let link;
        link = $(this).attr('href').substr(1);
        $('html, body').animate({scrollTop: $('[name='+link+']').offset().top - headerHeight}, 1000);
        return false;
    });
});
