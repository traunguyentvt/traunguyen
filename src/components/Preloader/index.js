import React, { useEffect } from 'react';
import $ from 'jquery';

const Preloader = () => {
    useEffect(() => {
        const preloaderElement = $('#preloader');

        if (preloaderElement.length) {
            preloaderElement.delay(500).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    }, []);

    return <div id="preloader"></div>;
};

export default Preloader;
