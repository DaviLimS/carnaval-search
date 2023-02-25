function search() {
    let opt = document.getElementById('city');
    let valueOpt = opt.options[opt.selectedIndex].value;
    //obtem o valor selecionado no select

    let ba = document.getElementById('BA');
    let sp = document.getElementById('SP');
    let sc = document.getElementById('SC');
    let rj = document.getElementById('RJ');

    let baID = ba.id;
    let spID = sp.id;
    let scID = sc.id;
    let rjID = rj.id;
    //pega o nome do id

    switch (valueOpt) {
        case baID:
            sp.style.display = 'none';
            sc.style.display = 'none';
            rj.style.display = 'none';
            break;

        case spID:
            sc.style.display = 'none';
            rj.style.display = 'none';
            ba.style.display = 'none';
            break;

        case scID:
            rj.style.display = 'none';
            ba.style.display = 'none';
            sp.style.display = 'none';
            break;
        
        case rjID:
            ba.style.display = 'none';
            sp.style.display = 'none';
            sc.style.display = 'none';
            break;

        default:
            break
    }
}