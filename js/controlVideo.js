        // Control del video de fondo
        document.addEventListener('DOMContentLoaded', function () {
            const video = document.querySelector('.header-video');
            if (video) {
                // Acelerar la velocidad del video (1.5x más rápido)
                video.playbackRate = 1.5;

                // Asegurar que el loop funcione perfectamente
                video.addEventListener('ended', function () {
                    video.currentTime = 0;
                    video.play();
                });

                // Forzar reproducción
                video.play().catch(e => {
                    console.log('Video autoplay bloqueado:', e);
                });
            }
        });