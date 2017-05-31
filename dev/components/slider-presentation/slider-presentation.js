"use strict";

import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import {promiseHeaderHeight} from './../../modules/header/header';

import './slider-presentation.scss';


const $slider = '.slider-presentation__slider';

const $sliderControls = '.slider-presentation__controls-slider';

let resizeTimer;

$(document).ready(function () {
    $($slider).slick({
        fade: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slider-presentation__arrow slider-presentation__arrow_prev"></button>',
        nextArrow: '<button type="button" class="slider-presentation__arrow slider-presentation__arrow_next"></button>',
        asNavFor: $sliderControls,
    });

    $($sliderControls).slick({
        slidesToShow: 7,
        arrows: false,
        centerMode: true,
        asNavFor: $slider,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });
});
