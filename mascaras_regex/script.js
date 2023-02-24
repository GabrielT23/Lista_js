function mascara_cpf(input){
    input.value = input.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function mascara_cep(input){
    input.value = input.value.replace(/\D/g, '') 
    .replace(/(\d{5})(\d)/, '$1-$2') 
    .replace(/(-\d{3})\d+ ?$/, '$1');
}

function mascara_valor(input){
    let v = input.value.replace(/\D/g,'');
    v = (v/100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    v = 'R$ '+ v;
    input.value = v;
}