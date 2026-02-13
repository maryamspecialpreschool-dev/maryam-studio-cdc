// @ts-nocheck
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScriptLoader() {
    const pathname = usePathname();

    useEffect(() => {
        // We need to wait for the DOM to be updated
        const timer = setTimeout(() => {
            if (typeof window !== 'undefined' && (window as any).jQuery) {
                const $ = (window as any).jQuery;

                // 1. Re-init WOW.js
                if ((window as any).WOW) {
                    new (window as any).WOW().init();
                }

                // 2. Re-init Slick Slider (vscustom-carousel.js logic)
                $('.vs-carousel').not('.slick-initialized').each(function (this: any) {
                    var vsSlide = $(this);

                    // Collect Data 
                    function d(data: string) {
                        return vsSlide.data(data);
                    }

                    // Custom Arrow Button
                    var prevButton = '<button type="button" class="slick-prev"><i class="' + d('prev-arrow') + '"></i></button>',
                        nextButton = '<button type="button" class="slick-next"><i class="' + d('next-arrow') + '"></i></button>';

                    // Function For Custom Arrow Btn 
                    $('[data-slick-next]').each(function (this: any) {
                        $(this).on('click', function (e: any) {
                            e.preventDefault()
                            $($(this).data('slick-next')).slick('slickNext');
                        })
                    })

                    $('[data-slick-prev]').each(function (this: any) {
                        $(this).on('click', function (e: any) {
                            e.preventDefault()
                            $($(this).data('slick-prev')).slick('slickPrev');
                        })
                    })

                    // Check for arrow wrapper
                    if (d('arrows') == true) {
                        if (!vsSlide.closest('.arrow-wrap').length) {
                            vsSlide.closest('.container').parent().addClass('arrow-wrap')
                        }
                    }

                    vsSlide.slick({
                        dots: (d('dots') ? true : false),
                        fade: (d('fade') ? true : false),
                        arrows: (d('arrows') ? true : false),
                        speed: (d('speed') ? d('speed') : 1000),
                        asNavFor: (d('asnavfor') ? d('asnavfor') : false),
                        autoplay: ((d('autoplay') == false) ? false : true),
                        infinite: ((d('infinite') == false) ? false : true),
                        slidesToShow: (d('slide-show') ? d('slide-show') : 1),
                        adaptiveHeight: (d('adaptive-height') ? true : false),
                        centerMode: (d('center-mode') ? true : false),
                        autoplaySpeed: (d('autoplay-speed') ? d('autoplay-speed') : 8000),
                        centerPadding: (d('center-padding') ? d('center-padding') : '0'),
                        focusOnSelect: ((d('focuson-select') == false) ? false : true),
                        pauseOnFocus: (d('pauseon-focus') ? true : false),
                        pauseOnHover: (d('pauseon-hover') ? true : false),
                        variableWidth: (d('variable-width') ? true : false),
                        vertical: (d('vertical') ? true : false),
                        prevArrow: (d('prev-arrow') ? prevButton : '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>'),
                        nextArrow: (d('next-arrow') ? nextButton : '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>'),
                        rtl: ($('html').attr('dir') == 'rtl') ? true : false,
                        responsive: [{
                            breakpoint: 1600,
                            settings: {
                                arrows: (d('xl-arrows') ? true : false),
                                dots: (d('xl-dots') ? true : false),
                                slidesToShow: (d('xl-slide-show') ? d('xl-slide-show') : d('slide-show')),
                                centerMode: (d('xl-center-mode') ? true : false),
                                centerPadding: 0,
                                gap: "30px"
                            }
                        }, {
                            breakpoint: 1500,
                            settings: {
                                arrows: (d('ml-arrows') ? true : false),
                                dots: (d('ml-dots') ? true : false),
                                slidesToShow: (d('ml-slide-show') ? d('ml-slide-show') : d('slide-show')),
                                centerMode: (d('ml-center-mode') ? true : false),
                                centerPadding: 0
                            }
                        }, {
                            breakpoint: 1200,
                            settings: {
                                arrows: (d('lg-arrows') ? true : false),
                                dots: (d('lg-dots') ? true : false),
                                slidesToShow: (d('lg-slide-show') ? d('lg-slide-show') : d('slide-show')),
                                centerMode: (d('lg-center-mode') ? d('lg-center-mode') : false),
                                centerPadding: 0
                            }
                        }, {
                            breakpoint: 992,
                            settings: {
                                arrows: (d('md-arrows') ? true : false),
                                dots: (d('md-dots') ? true : false),
                                slidesToShow: (d('md-slide-show') ? d('md-slide-show') : 2),
                                centerMode: (d('md-center-mode') ? d('md-center-mode') : false),
                                centerPadding: 0
                            }
                        }, {
                            breakpoint: 768,
                            settings: {
                                arrows: (d('sm-arrows') ? true : false),
                                dots: (d('sm-dots') ? true : false),
                                slidesToShow: (d('sm-slide-show') ? d('sm-slide-show') : 1),
                                centerMode: (d('sm-center-mode') ? d('sm-center-mode') : false),
                                centerPadding: 0
                            }
                        }, {
                            breakpoint: 576,
                            settings: {
                                arrows: (d('xs-arrows') ? true : false),
                                dots: (d('xs-dots') ? true : false),
                                slidesToShow: (d('xs-slide-show') ? d('xs-slide-show') : 1),
                                centerMode: (d('xs-center-mode') ? d('xs-center-mode') : false),
                                centerPadding: 0
                            }
                        }
                        ]
                    });
                });

                // 3. Re-init Magnific Popup
                $('.popup-image').magnificPopup({
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });

                $('.popup-video').magnificPopup({
                    type: 'iframe'
                });

                // 4. Re-init Isotope (for Gallery)
                // Wait for images to load
                if ($('.filter-active').length > 0) {
                    $('.filter-active').imagesLoaded(function () {
                        var $filter = '.filter-active',
                            $filterItem = '.filter-item',
                            $filterMenu = '.filter-menu-active';

                        if ($($filter).length > 0) {
                            var $grid = $($filter).isotope({
                                itemSelector: $filterItem,
                                filter: '*',
                            });

                            // filter items on button click
                            $($filterMenu).off('click', 'button').on('click', 'button', function (this: any) {
                                var filterValue = $(this).attr('data-filter');
                                $grid.isotope({
                                    filter: filterValue
                                });
                            });

                            // Menu Active Class 
                            $($filterMenu).off('click', 'button').on('click', 'button', function (this: any, event: any) {
                                event.preventDefault();
                                $(this).addClass('active');
                                $(this).siblings('.active').removeClass('active');
                            });
                        };
                    });
                }

                // 5. Preloader fade out
                $('.preloader').fadeOut();

                // 6. Data Bg Src
                $('[data-bg-src]').each(function (this: any) {
                    var src = $(this).attr('data-bg-src');
                    $(this).css('background-image', 'url(' + src + ')');
                    $(this).removeAttr('data-bg-src').addClass('background-image');
                });

                // 7. Mobile Menu & Side Menu Logic
                // Mobile Menu Toggle
                $('.vs-menu-toggle').off('click').on('click', function (e: any) {
                    e.preventDefault();
                    $('.vs-menu-wrapper').toggleClass('vs-body-visible');
                });

                // Dropdown Toggle for Mobile
                if ($('.vs-mobile-menu .menu-item-has-children > span.expander').length === 0) {
                    $('.vs-mobile-menu .menu-item-has-children').each(function (this: any) {
                        $(this).prepend('<span class="expander"><i class="fal fa-plus"></i></span>');
                    });
                }

                $('.vs-mobile-menu').off('click', '.expander').on('click', '.expander', function (this: any, e: any) {
                    e.preventDefault();
                    $(this).parent().children('.sub-menu').slideToggle();
                    $(this).find('i').toggleClass('fa-plus fa-minus');
                    $(this).parent().toggleClass('active');
                });

                // 8. Data Mask Src
                if ($('[data-mask-src]').length > 0) {
                    $('[data-mask-src]').each(function (this: any) {
                        var mask = $(this).attr('data-mask-src');
                        $(this).css({
                            'mask-image': 'url(' + mask + ')',
                            '-webkit-mask-image': 'url(' + mask + ')'
                        });
                        $(this).removeAttr('data-mask-src');
                    });
                }

                // 9. Data Overlay
                if ($('[data-overlay]').length > 0) {
                    $('[data-overlay]').each(function (this: any) {
                        var $this = $(this);
                        if ($this.find('.overlay').length > 0) return; // Prevent duplicate overlay

                        var overlay = $this.data('overlay');
                        var opacity = $this.data('opacity');
                        var color = 'var(--black-color)'; // Default black

                        if (overlay === 'title') color = 'var(--title-color)';
                        if (overlay === 'theme') color = 'var(--theme-color)';
                        if (overlay === 'secondary') color = 'var(--secondary-color)';
                        if (overlay === 'smoke') color = 'var(--smoke-color)';
                        if (overlay === 'white') color = 'var(--white-color)';
                        if (overlay === 'black') color = 'var(--black-color)';

                        $this.css('position', 'relative');
                        $this.prepend(`<div class="overlay" style="background-color: ${color}; opacity: ${opacity / 10};"></div>`);
                    });
                }

                // 10. Shape Mockup
                $.fn.shapeMockup = function () {
                    var $shape = $(this);
                    $shape.each(function (this: any) {
                        var $currentShape = $(this),
                            shapeTop = $currentShape.data('top'),
                            shapeRight = $currentShape.data('right'),
                            shapeBottom = $currentShape.data('bottom'),
                            shapeLeft = $currentShape.data('left');
                        $currentShape.css({
                            top: shapeTop,
                            right: shapeRight,
                            bottom: shapeBottom,
                            left: shapeLeft,
                        }).removeAttr('data-top')
                            .removeAttr('data-right')
                            .removeAttr('data-bottom')
                            .removeAttr('data-left')
                            .parent().addClass('shape-mockup-wrap');
                    });
                };

                if ($('.shape-mockup').length > 0) {
                    $('.shape-mockup').shapeMockup();
                }

                // 11. Counter Up
                if ($('.counter-number').length > 0 && (window as any).jQuery.fn.counterUp) {
                    $('.counter-number').counterUp({
                        delay: 10,
                        time: 1000
                    });
                }

                // Side Menu Toggle
                $('.sideMenuToggler').off('click').on('click', function (e: any) {
                    e.preventDefault();
                    $('.sidemenu-wrapper').addClass('show');
                });

                $('.sideMenuCls, .sidemenu-wrapper').off('click').on('click', function (e: any) {
                    // unexpected behavior fix: prevents closing when clicking content
                    if ($(e.target).hasClass('sidemenu-wrapper') || $(e.target).closest('.sideMenuCls').length > 0) {
                        e.preventDefault();
                        $('.sidemenu-wrapper').removeClass('show');
                    }
                });

                // Prevent closing when clicking content
                $('.sidemenu-content').on('click', function (e: any) {
                    e.stopPropagation();
                });

                // Sticky Header
                $(window).on('scroll', function () {
                    if ($(window).scrollTop() > 400) {
                        $('.sticky-wrapper').addClass('sticky');
                    } else {
                        $('.sticky-wrapper').removeClass('sticky');
                    }
                });

            }
        }, 100); // 100ms delay to ensure React has rendered

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
