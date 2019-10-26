$(function () {
  //question description

  {
    const questions = document.querySelectorAll('.questionLink');
    const answerBlock = document.createElement('div');
    answerBlock.classList.add('question-answerBlock');
    const answerClose = document.createElement('span');
    answerClose.textContent = 'x';
    answerClose.classList.add('question-answerBlock-close');
    const answer = [
      'Answer #1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat eu quam ac porttitor. Vivamus pharetra dui id lorem vestibulum porttitor. Cras malesuada, purus a posuere faucibus, dui risus ultrices.',
      'Answer #2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat eu quam ac porttitor. Vivamus pharetra dui id lorem vestibulum porttitor. Cras malesuada, purus a posuere faucibus, dui risus ultrices.',
      'Answer #3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat eu quam ac porttitor. Vivamus pharetra dui id lorem vestibulum porttitor. Cras malesuada, purus a posuere faucibus, dui risus ultrices.',
      'Answer #4: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat eu quam ac porttitor. Vivamus pharetra dui id lorem vestibulum porttitor. Cras malesuada, purus a posuere faucibus, dui risus ultrices.',
      'Answer #5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat eu quam ac porttitor. Vivamus pharetra dui id lorem vestibulum porttitor. Cras malesuada, purus a posuere faucibus, dui risus ultrices.',
    ];

    questions.forEach((el, idx) => {
      el.addEventListener('click', (event) => {
        event.preventDefault();
        answerBlock.style.display = 'block';
        el.parentNode.style.position = 'relative';
        answerBlock.textContent = answer[idx];
        answerBlock.insertAdjacentElement("beforeend", answerClose);
        el.parentNode.insertAdjacentElement('beforeEnd', answerBlock);
      })
    });
    answerBlock.addEventListener('click', event => {
      const target = event.target;
      if (target.tagName !== 'SPAN') return;
      answerBlock.style.display = 'none';
    })
  }

  //store slider
  {
    $('.store-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button class="prev"></button>',
      nextArrow: '<button class="next"></button>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button class="prev"></button>',
            nextArrow: '<button class="next"></button>'
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<button class="prev"></button>',
            nextArrow: '<button class="next"></button>'
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="prev"></button>',
            nextArrow: '<button class="next"></button>'
          }
        }
      ]
    });
  }
  {
    $(window).scroll(function () {
      if ($(window).width() > 768) {
        if ($(this).scrollTop() !== 0) {
          $('#btnToTop').fadeIn();
        } else {
          $('#btnToTop').fadeOut();
        }
      }
    });
    $('#btnToTop').click(function () {
      $('body,html').animate({scrollTop: 0}, 1200, 'easeInQuad');
    });
  }
  {
    $('#header-btn').on('click', () => {
      $('.popup').css('display', 'block');
    });
    $('.popup-close').on('click', () => {
      $('.popup').css('display', 'none');
    })
  }
});


