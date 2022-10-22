AOS.init();

      function about() {
        document.getElementById("about").scrollIntoView();
      }


      const modal = document.querySelector('.modal');
      const overlay = document.querySelector('.overlay');
      const btnCloseModal = document.querySelector('.close-modal');
      const music = new Audio('interstellar.mp3')

      const scroll = document.getElementsByTagName('body')
      window.onload = function() {
        //hide loading
        document.getElementById('loading').style.display = 'none';
        scroll[0].style.overflow = 'hidden';
        modal.classList.remove('hidden');
        document.getElementById('icon').scrollIntoView();
        // overlay.classList.remove('hidden');
        // scroll to top

      };

      const closeModal = function () {
        modal.classList.add('hidden');
        // overlay.classList.add('hidden');
        scroll[0].style.overflow = 'scroll';  
        // play interstellar.mp3 on loop
        music.volume = 0.2;
        music.loop = true;
        music.play();
      };



      btnCloseModal.addEventListener('click', closeModal);

      overlay.addEventListener('click', closeModal);

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeModal();
        }
      });
