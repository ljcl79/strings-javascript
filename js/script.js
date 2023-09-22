function substringTest(element) {
    const divParent = element.closest('.card-body');
    const valor = divParent.querySelector('.entrada').value;
    const desde = divParent.querySelector('.desde').value;
    const hasta = divParent.querySelector('.hasta').value;
    
    if (hasta != '') {
        divParent.querySelector('.resultado').innerHTML = valor.substring(Number(desde), Number(hasta));
    } else {
        divParent.querySelector('.resultado').innerHTML = valor.substring(Number(desde));
    }
}

const sliceTest = function(element) {
    const divParent = element.closest('.card-body');
    const valor = divParent.querySelector('.entrada').value;
    const desde = divParent.querySelector('.desde').value;
    const hasta = divParent.querySelector('.hasta').value;
    
    if (hasta != '') {
        divParent.querySelector('.resultado').innerHTML = valor.slice(Number(desde), Number(hasta));
    } else {
        divParent.querySelector('.resultado').innerHTML = valor.slice(Number(desde));
    }
}

const splitTest = (element) => {
    const divParent = element.closest('.card-body');
    const valor = divParent.querySelector('.entrada').value;
    const separador = divParent.querySelector('.separador').value;
    
    const pedazos = valor.split(separador);
    console.log(pedazos);
    const lista = pedazos.map((e) => {
        return `<li>${e}</li>`
    }).join("");
    divParent.querySelector('.resultado').innerHTML = `<ul>${lista}</ul>`;
}

const concatTest = (element) => {
    const divParent = element.closest('.card-body');
    const entrada1 = divParent.querySelector('.entrada1').value;
    const entrada2 = divParent.querySelector('.entrada2').value;

    divParent.querySelector('.resultado').innerHTML = `${entrada1} ${entrada2}`;
}

const includeTest = (element) => {
    const divParent = element.closest('.card-body');
    const entrada = divParent.querySelector('.entrada').value;
    const valor = divParent.querySelector('.valor').value;

    divParent.querySelector('.resultado').innerHTML = entrada.includes(valor) ? 'Esta incluido' : 'No se incluye';
}

const searchTest = (element) => {
    const divParent = element.closest('.card-body');
    const entrada = divParent.querySelector('.entrada').value;
    const valor = divParent.querySelector('.valor').value;

    divParent.querySelector('.resultado').innerHTML = entrada.search(valor) >= 0 ? 'Esta incluido' : 'No se incluye';
}

const replaceTest = function(element) {
    const divParent = element.closest('.card-body');
    const entrada = divParent.querySelector('.entrada').value;
    const valor_buscar = divParent.querySelector('.valor_buscar').value;
    const valor_reemplazar = divParent.querySelector('.valor_reemplazar').value;

    divParent.querySelector('.resultado').innerHTML = entrada.replace(valor_buscar, valor_reemplazar);
}


const replaceAllTest = function(element) {
    const divParent = element.closest('.card-body');
    const entrada = divParent.querySelector('.entrada').value;
    const valor_buscar = divParent.querySelector('.valor_buscar').value;
    const valor_reemplazar = divParent.querySelector('.valor_reemplazar').value;

    divParent.querySelector('.resultado').innerHTML = entrada.replaceAll(valor_buscar, valor_reemplazar);
}

const toUpperCaseTest = function(element) {
    const divParent = element.closest('.card-body');
    const entrada = divParent.querySelector('.entrada').value;
    

    divParent.querySelector('.resultado').innerHTML = entrada.toUpperCase();
}

const toLowerCaseTest = function(element) {
    const divParent = element.closest('.card-body');
    const entrada = divParent.querySelector('.entrada').value;
    

    divParent.querySelector('.resultado').innerHTML = entrada.toLowerCase();
}