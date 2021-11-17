function a() {
    var h = document.getElementById('hid_men');
    var burg1 = document.getElementById('burg1');
    var burg2 = document.getElementById('burg2');
    var burg3 = document.getElementById('burg3');

    if (h.style.opacity == '1') {
        h.style.opacity = '0';
        h.style.visibility = 'hidden';
        burg1.style.transform = 'rotate(0deg)';
        burg1.style.transition = '0.5s';
        burg1.style.marginBottom = '4px';
        burg3.style.transform = 'rotate(0deg)';
        burg3.style.transition = '0.5s';
        burg3.style.marginTop = '4px';
        burg2.style.opacity = '1';
        burg2.style.transition = '0.5s';
    } else {
        h.style.opacity = '1';
        h.style.visibility = 'visible';
        burg1.style.transform = 'rotate(45deg)';
        burg1.style.transition = '0.5s';
        burg1.style.marginBottom = '-5px';
        burg3.style.transform = 'rotate(-45deg)';
        burg3.style.transition = '0.5s';
        burg3.style.marginTop = '-5px';
        burg2.style.opacity = '0';
        burg2.style.transition = '0.5s';
    }
}