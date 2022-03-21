function carregar(){
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  hora = 22
  msg.innerHTML = `Agora são ${hora} horas.`

  if (hora >= 00 && hora <= 12)
  {
    msg.innerHTML += `<p>Bom Dia !!!</p>`
    img.src = './images/nascer-do-sol.jpg'
    document.body.style.background = '#e2cd9f'
  } 
  else if(hora <= 18)
  {
    msg.innerHTML += `<p>Boa Tarde !!!</p>`
    img.src = './images/por-do-sol.jpg'
    document.body.style.background = '#b9846f'
  } 
  else
  {
    msg.innerHTML += `<p>Boa Noite !!!</p>`
    img.src = './images/noite.jpeg'
    document.body.style.background = '#515154'
  }
}