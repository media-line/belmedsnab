"use strict";

import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import isMobile from 'ismobilejs';
import {promiseHeaderHeight} from './../../modules/header/header';

import './slider.scss';


const $slider = '.slider';
const $slide = '.slider__slide';

let resizeTimer;

$(window).on('load', function () {
    if ( !(isMobile.phone || isMobile.tablet) ) {
        promiseHeaderHeight.then(
            result => {
                $($slide).css('height', $(window).outerHeight() - result + 'px');
            }
        );

        $(window).resize(function (e) {
            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(function() {

                promiseHeaderHeight.then(
                    result => {
                        $($slide).css('height', $(window).outerHeight() - result + 'px');
                    }
                );
            }, 250);
        });
    }
});

$(document).ready(function () {
    $($slider).slick({
        fade: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slider__arrow slider__arrow_prev"></button>',
        nextArrow: '<button type="button" class="slider__arrow slider__arrow_next"></button>',
        autoplay: true,
        autoplaySpeed: 5000
    });
});
