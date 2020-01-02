var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];


console.log(campos);

document.querySelector('.form').addEventListener('submit',function(){
    var tr = document.createElement('tr');
    var tbody = document.querySelector('table tbody');
    event.preventDefault();

    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    document.getElementById('data').focus();
});
