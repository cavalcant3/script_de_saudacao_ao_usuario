  function carregar() {
      var msg = document.getElementById('msg')
      var foto = document.getElementById('foto')
     
      var date = new Date()
      var hora = date.getHours()
      //var hora=13
      msg.innerHTML = `Agora são ${hora} horas`
      if (hora >= 0 && hora <=12) {
          //bom dia!
         foto.src='manha.png'
          document.body.style.background='#e2cd9f'
      } else if (hora>=12 && hora <18) {
          //boa tarde
          document.body.style.background= '#b9846f'
          foto.src = 'tarde.png'
      } else {
          //boa noite
          foto.src = 'noite.png'
          document.body.style.background = '#515154'
      }
  }


