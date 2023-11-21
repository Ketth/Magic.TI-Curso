// Função para inicializar o Slick Carousel em cada módulo
function initializeSlick() {
    $('.module-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
        nextArrow: '<button type="button" class="slick-next">Próximo</button>',
    });
}

// Inicializar o Slick Carousel quando o documento estiver pronto
script>
    $(document).ready(function () {
        // Inicialize o Slick Carousel para cada módulo
        $('.module-slider').slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
            nextArrow: '<button type="button" class="slick-next">Próximo</button>',
        });

        // Captura o evento de mudança de slide
        $('.module-slider').on('afterChange', function (event, slick, currentSlide) {
            // Verifica se é o último slide
            if (currentSlide === slick.slideCount - 1) {
                // Se for o último slide, mostra o botão do próximo módulo
                $('.module-button').show();
            }
        });

        // Evento ao clicar no botão do próximo módulo
        $('.module-button').on('click', function () {
            // Redireciona para a página do próximo módulo
            window.location.href = 'dois.html';
        });

         // Captura o evento de mudança de slide
         $('.module-slider').on('afterChange', function (event, slick, currentSlide) {
            // Verifica se é o último slide
            if (currentSlide === slick.slideCount - 1) {
                // Se for o último slide, mostra o botão do próximo módulo
                $('.module-button').show();
            }
        });

        // Evento ao clicar no botão do próximo módulo
        $('.module-button').on('click', function () {
            // Redireciona para a página do próximo módulo
            window.location.href = 'dois.html';
        });
    });
</script>
    });
</script>