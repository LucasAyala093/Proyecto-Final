presentacion = document.getElementById('presentacion');
datosPersonales = document.getElementById('datosPersonales')
estudios = document.getElementById('estudios')
experiencia = document.getElementById('experiencia')
habilidades = document.getElementById('habilidades')

barra1 = document.getElementById('barra1')
barra2 = document.getElementById('barra2')
barra3 = document.getElementById('barra3')
barra4 = document.getElementById('barra4')
barra5 = document.getElementById('barra5')

timeout1 = "";
timeout2 = "";
timeout3 = "";
timeout4 = "";
timeout5 = ""

document.getElementById('botonPresentacion').onmouseover = function() {
    datosPersonales.style.opacity = '0%';
    estudios.style.opacity = '0%';
    experiencia.style.opacity = '0%';
    habilidades.style.opacity = '0%';

    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
    clearTimeout(timeout4);
    clearTimeout(timeout5);

    timeout1 = setTimeout(() => { presentacion.style.opacity = '100%';}, 500);
  
    timeout2 = setTimeout(() => {  datosPersonales.style.display = 'none';}, 1000);
    presentacion.style.display = 'block';
    timeout3 = setTimeout(() => {     estudios.style.display = 'none'; },1000);
    timeout4 = setTimeout(() => {     experiencia.style.display = 'none';}, 1000);
    timeout5 = setTimeout(() => {     habilidades.style.display = 'none';}, 1000);

    barra1.style.backgroundColor = 'rgb(209, 35, 35)';
    barra2.style.backgroundColor = 'rgb(64, 70 ,74)';
    barra3.style.backgroundColor = 'rgb(64, 70 ,74)'
    barra4.style.backgroundColor = 'rgb(64, 70 ,74)'
    barra5.style.backgroundColor = 'rgb(64, 70 ,74)'
}

document.getElementById('botonDatosPersonales').onmouseover = function() {
    presentacion.style.opacity = '0%';
    estudios.style.opacity = '0%';
    experiencia.style.opacity = '0%';
    habilidades.style.opacity = '0%';

    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
    clearTimeout(timeout4);
    clearTimeout(timeout5);

    timeout1 = setTimeout(() => { datosPersonales.style.opacity = '100%';}, 500);

    datosPersonales.style.display = 'block';
    timeout2 = setTimeout(() => {     presentacion.style.display = 'none';}, 1000);
    timeout3 = setTimeout(() => {     estudios.style.display = 'none'; },1000);
    timeout4 = setTimeout(() => {     experiencia.style.display = 'none';}, 1000);
    timeout5 = setTimeout(() => {     habilidades.style.display = 'none';}, 1000);

    barra1.style.backgroundColor = 'rgb(64, 70 ,74)';
    barra2.style.backgroundColor = 'rgb(209, 35, 35)';
    barra3.style.backgroundColor = 'rgb(64, 70 ,74)'
    barra4.style.backgroundColor = 'rgb(64, 70 ,74)'
    barra5.style.backgroundColor = 'rgb(64, 70 ,74)'
}


document.getElementById('botonEstudios').onmouseover = function() {
    presentacion.style.opacity = '0%';
    datosPersonales.style.opacity = '0%';
    experiencia.style.opacity = '0%';
    habilidades.style.opacity = '0%';

    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
    clearTimeout(timeout4);
    clearTimeout(timeout5);

    timeout1 = setTimeout(() => { estudios.style.opacity = '100%';}, 500);

    timeout2 = setTimeout(() => {     datosPersonales.style.display = 'none';}, 1000);
    timeout3 = setTimeout(() => {     presentacion.style.display = 'none';}, 1000);
    estudios.style.display = 'block';
    timeout4 = setTimeout(() => {     experiencia.style.display = 'none';}, 1000);
    timeout5 = setTimeout(() => {     habilidades.style.display = 'none';}, 1000);

    barra1.style.backgroundColor = 'rgb(64, 70 ,74)';
    barra2.style.backgroundColor = 'rgb(64, 70 ,74)';
    barra3.style.backgroundColor = 'rgb(209, 35, 35)';
    barra4.style.backgroundColor = 'rgb(64, 70 ,74)';
    barra5.style.backgroundColor = 'rgb(64, 70 ,74)';
}

document.getElementById('botonExperiencia').onmouseover = function() {
    presentacion.style.opacity = '0%';
    estudios.style.opacity = '0%';
    datosPersonales.style.opacity = '0%';
    habilidades.style.opacity = '0%';

    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
    clearTimeout(timeout4);
    clearTimeout(timeout5);

    timeout1 = setTimeout(() => { experiencia.style.opacity = '100%';}, 500);

    timeout2 = setTimeout(() => {     datosPersonales.style.display = 'none';}, 1000);
    timeout3 = setTimeout(() => {     presentacion.style.display = 'none';}, 1000);
    timeout4 = setTimeout(() => {     estudios.style.display = 'none'; },1000);
    experiencia.style.display = 'block';
    timeout5 = setTimeout(() => {     habilidades.style.display = 'none';}, 1000);

    barra1.style.backgroundColor = 'rgb(64, 70 ,74)';
    barra2.style.backgroundColor = 'rgb(64, 70 ,74)';
    barra3.style.backgroundColor = 'rgb(64, 70 ,74)';
    barra4.style.backgroundColor = 'rgb(209, 35, 35)';
    barra5.style.backgroundColor = 'rgb(64, 70 ,74)';
}

document.getElementById('botonHabilidades').onmouseover = function() {
    presentacion.style.opacity = '0%';
    estudios.style.opacity = '0%';
    experiencia.style.opacity = '0%';
    datosPersonales.style.opacity = '0%';

    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
    clearTimeout(timeout4);
    clearTimeout(timeout5);

    timeout1 = setTimeout(() => { habilidades.style.opacity = '100%';}, 500);

    timeout2 = setTimeout(() => {     datosPersonales.style.display = 'none';}, 1000);
    timeout3 = setTimeout(() => {     presentacion.style.display = 'none';}, 1000);
    timeout4 = setTimeout(() => {     estudios.style.display = 'none'; },1000);
    timeout5 = setTimeout(() => {     experiencia.style.display = 'none';}, 1000);
    habilidades.style.display = 'block';

    barra1.style.backgroundColor = 'rgb(64, 70 ,74)';
    barra2.style.backgroundColor = 'rgb(64, 70 ,74)';
    barra3.style.backgroundColor = 'rgb(64, 70 ,74)';
    barra4.style.backgroundColor = 'rgb(64, 70 ,74)';
    barra5.style.backgroundColor = 'rgb(209, 35, 35)';
}
