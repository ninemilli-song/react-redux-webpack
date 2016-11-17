/**
 * Created by songxg on 16/6/1.
 */

import $ from 'jquery';

let resizeTimeout = null;

const windowResizer = {
    init () {

    },

    resize () {
        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(() => {
            let ww = $(window).width();
            let wh = $(window).height();

            if (wh >= 1280) {

            }
            else {

            }
        }, 300);
    }
}

export default windowResizer;