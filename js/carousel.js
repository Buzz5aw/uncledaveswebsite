(function soimcCarousel() {
        var nextVisible = 1,
                runCarousel,
                carouselVideo = document.getElementsByClassName('carousel_video')[0];

        function startCarousel(interval) {
                runCarousel = setInterval(function() {
                        moveCarousel(nextVisible);
                }, interval);
        }

        function moveCarousel(currentlyVisible) {
                var carousel_items = document.getElementsByClassName('carousel_item');
                document.getElementsByClassName('visible')[0].classList.remove('visible');
                nextVisible++;
                carousel_items[currentlyVisible].classList.add('visible');
                if(currentlyVisible === carousel_items.length - 1) {
                    nextVisible = 0;
                }
        }

       function stopCarousel() {
                clearInterval(runCarousel);
        }

        startCarousel(5500);
}());