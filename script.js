    function switchLang(lang) {
      document.getElementById('en').classList.remove('show');
      document.getElementById('cn').classList.remove('show');
      document.getElementById(lang).classList.add('show');
    }

    function toggleTheme() {
        document.body.classList.toggle('dark');
    }
