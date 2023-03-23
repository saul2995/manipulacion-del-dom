//Por el nombre de la etiqueta
const h1=document.querySelector("h1");
const parrafito=document.querySelector(".parrafito");
const pid=document.querySelector('#pid');
const boton=document.querySelector("button");
const resultado=document.querySelector(".resultado");
console.log({
    h1,
    parrafito,
    pid,
    boton
})

//document crearElementos con DOM

h1.innerHTML= 'aprendizaje en platzi <br> feo';//convierte a texto en html
h1.innerText='patito <br> feo';//convierte todo a html
console.log(h1.getAttribute('pantalla'));//muetra el valor de la clase
h1.setAttribute('pantalla','rojo');//cambiar el atributo de la clase o asignar el atributo a la clase

//agregar una clase
h1.classList.add('verde');
//eliminar la clase
h1.classList.remove('rojo');


//crear elemento html
console.log(document.createElement('img'));
const img=document.createElement('img');//lo paso a la variable
img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9mPR-jpcn_T7Ghrna0x7rKY9BHe7JkFgzjqeB-VgmoQ&s')
console.log(img);
pid.appendChild(img);//agregan el elemento en el cuerpo del html

//eventos
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
function btnOnclick(){
    
    const i1=parseInt(input1.value);
    const i2=parseInt(input2.value);
    const suma=i1+i2;
    resultado.innerHTML="el resultado es: " +suma;
    
}

