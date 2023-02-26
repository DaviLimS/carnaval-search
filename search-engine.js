function search() {
    let opt = document.getElementById('city');
    let valueOpt = opt.options[opt.selectedIndex].value;
    //obtem o valor selecionado no select

    let ba = document.getElementById('BA');
    let sp = document.getElementById('SP');
    let sc = document.getElementById('SC');
    let rj = document.getElementById('RJ');
    let bh = document.getElementById('BH');
    let pe = document.getElementById('PE');
    let pe1 = document.getElementById('PE1');
    let bsb = document.getElementById('BSB');
    let pr = document.getElementById('PR');

    let baID = ba.id;
    let spID = sp.id;
    let scID = sc.id;
    let rjID = rj.id;
    let bhID = bh.id;
    let peID = pe.id;
    let pe1ID = pe1.id;
    let bsbID = bsb.id;
    let prID = pr.id;
    //pega o nome do id

    switch (valueOpt) {
        case baID:
            sp.style.display = 'none';
            sc.style.display = 'none';
            rj.style.display = 'none';
            ba.style.display = 'block';
            bh.style.display = 'none';
            pe.style.display = 'none';
            pe1.style.display = 'none';
            bsb.style.display = 'none';
            pr.style.display = 'none';
            break;

        case spID:
            sc.style.display = 'none';
            rj.style.display = 'none';
            ba.style.display = 'none';
            sp.style.display = 'block';
            bh.style.display = 'none';
            pe.style.display = 'none';
            pe1.style.display = 'none';
            bsb.style.display = 'none';
            pr.style.display = 'none';
            break;

        case scID:
            rj.style.display = 'none';
            ba.style.display = 'none';
            sp.style.display = 'none';
            sc.style.display = 'block';
            bh.style.display = 'none';
            pe.style.display = 'none';
            pe1.style.display = 'none';
            bsb.style.display = 'none';
            pr.style.display = 'none';
            break;
        
        case rjID:
            ba.style.display = 'none';
            sp.style.display = 'none';
            sc.style.display = 'none';
            rj.style.display = 'block';
            bh.style.display = 'none';
            pe.style.display = 'none';
            pe1.style.display = 'none';
            bsb.style.display = 'none';
            pr.style.display = 'none';
            break;

        case bhID:
            ba.style.display = 'none';
            sp.style.display = 'none';
            sc.style.display = 'none';
            rj.style.display = 'none';
            bh.style.display = 'block';
            pe.style.display = 'none';
            pe1.style.display = 'none';
            bsb.style.display = 'none';
            pr.style.display = 'none';
            break;

        case peID:
            ba.style.display = 'none';
            sp.style.display = 'none';
            sc.style.display = 'none';
            rj.style.display = 'none';
            bh.style.display = 'none';
            pe.style.display = 'block';
            pe1.style.display = 'none';
            bsb.style.display = 'none';
            pr.style.display = 'none';
            break;

        case pe1ID:
            ba.style.display = 'none';
            sp.style.display = 'none';
            sc.style.display = 'none';
            rj.style.display = 'none';
            bh.style.display = 'none';
            pe.style.display = 'none';
            pe1.style.display = 'block';
            bsb.style.display = 'none';
            pr.style.display = 'none';
            break;

        case bsbID:
            ba.style.display = 'none';
            sp.style.display = 'none';
            sc.style.display = 'none';
            rj.style.display = 'none';
            bh.style.display = 'none';
            pe.style.display = 'none';
            pe1.style.display = 'none';
            bsb.style.display = 'block';
            pr.style.display = 'none';
            break;

        case prID:
            ba.style.display = 'none';
            sp.style.display = 'none';
            sc.style.display = 'none';
            rj.style.display = 'none';
            bh.style.display = 'none';
            pe.style.display = 'none';
            pe1.style.display = 'none';
            bsb.style.display = 'none';
            pr.style.display = 'block';
            break;

        default:
            ba.style.display = 'block';
            sp.style.display = 'block';
            sc.style.display = 'block';
            rj.style.display = 'block';
            bh.style.display = 'block';
            pe.style.display = 'block';
            pe1.style.display = 'block';
            bsb.style.display = 'block';
            pr.style.display = 'block';
            break;
    }
}