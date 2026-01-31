/**
 * Product page: sync thumbnail clicks to main image and show active thumbnail.
 * When user clicks any thumbnail, we show the matching main slide by data-media-id
 * (direct show/hide so the correct image is always displayed).
 */
(function () {
  function initProductGalleryThumbnails() {
    document.querySelectorAll('xo-carousel').forEach(function (carousel) {
      var thumbnail = carousel.querySelector('xo-carousel-thumbnail');
      if (!thumbnail) return;

      var thumbnailList = thumbnail.querySelector('xo-carousel-list');
      var thumbnailSlides = thumbnailList ? Array.from(thumbnailList.querySelectorAll('xo-carousel-slide')) : [];
      var mainList = Array.from(carousel.querySelectorAll('xo-carousel-list')).find(function (list) {
        return !list.closest('xo-carousel-thumbnail');
      });
      if (!mainList || !thumbnailSlides.length) return;

      var mainSlides = Array.from(mainList.querySelectorAll('xo-carousel-slide'));
      if (!mainSlides.length) return;

      mainList.classList.add('product-gallery-direct-sync');
      var inner = mainList.closest('xo-carousel-inner');
      if (inner) inner.classList.add('product-gallery-direct-sync');

      function getMainSlideByMediaId(mediaId) {
        for (var i = 0; i < mainSlides.length; i++) {
          if (String(mainSlides[i].getAttribute('data-media-id')) === String(mediaId)) return mainSlides[i];
        }
        return null;
      }

      function setActiveThumbnail(clickedSlide) {
        var target = clickedSlide || thumbnailSlides[0];
        thumbnailSlides.forEach(function (slide) {
          if (slide === target) {
            slide.classList.add('is-active');
            slide.setAttribute('aria-current', 'true');
          } else {
            slide.classList.remove('is-active');
            slide.removeAttribute('aria-current');
          }
        });
      }

      function showSlideForThumbnail(clickedThumb) {
        var mediaId = clickedThumb.getAttribute('data-media-id');
        var targetSlide = (mediaId !== null && mediaId !== '') ? getMainSlideByMediaId(mediaId) : mainSlides[thumbnailSlides.indexOf(clickedThumb)];
        if (!targetSlide) targetSlide = mainSlides[0];

        mainList.style.transform = '';
        mainList.style.removeProperty('transform');
        if (inner) {
          inner.scrollLeft = 0;
          inner.scrollTop = 0;
        }

        mainSlides.forEach(function (slide) {
          if (slide === targetSlide) {
            slide.classList.add('is-visible');
            slide.removeAttribute('hidden');
          } else {
            slide.classList.remove('is-visible');
            slide.setAttribute('hidden', '');
          }
        });
        setActiveThumbnail(clickedThumb);
      }

      thumbnailSlides.forEach(function (slide) {
        slide.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          showSlideForThumbnail(slide);
        });
        slide.style.cursor = 'pointer';
        slide.setAttribute('role', 'button');
        slide.setAttribute('tabindex', '0');
        var idx = thumbnailSlides.indexOf(slide) + 1;
        slide.setAttribute('aria-label', 'View image ' + idx + ' of ' + thumbnailSlides.length);
      });

      showSlideForThumbnail(thumbnailSlides[0] || null);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductGalleryThumbnails);
  } else {
    initProductGalleryThumbnails();
  }
})();
