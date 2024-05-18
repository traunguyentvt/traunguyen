import React, { useEffect } from 'react';
import $ from 'jquery';
import '../../libs/easing.js';

const BackToTop = () => {
    useEffect(() => {
        const handleScroll = () => {
            const backToTopElement = document.querySelector('.back-to-top');

            if (window.pageYOffset > 100) {
                backToTopElement.classList.remove('fadeOut');
                backToTopElement.style.display = 'block';
                backToTopElement.classList.add('fadeIn');
            } else {
                backToTopElement.classList.remove('fadeIn');
                backToTopElement.classList.add('fadeOut');
            }
        };

        $('.back-to-top').click(() => {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
            return false;
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a href="#" className="back-to-top animated">
            <i className="fa fa-chevron-up"></i>
        </a>
    );
};

export default BackToTop;
