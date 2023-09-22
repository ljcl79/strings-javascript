function substringTest(element) {
    const divParent = element.closest('.card-body');
    const valor = divParent.querySelector('.entrada').value;
    const desde = divParent.querySelector('.desde').value;
    const hasta = divParent.querySelector('.hasta').value;

    const subString = valor.substring(Number(desde), Number(hasta));
    divParent.querySelector('.resultado').innerHTML = subString;

}