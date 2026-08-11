document.querySelectorAll(".comparador-img").forEach((comparador) => {

    const overlay = comparador.querySelector(".overlay");
    const slider = comparador.querySelector(".slider");

    let activo = false;

    function mover(x){

        const rect = comparador.getBoundingClientRect();

        let posicion = x - rect.left;

        if(posicion < 0) posicion = 0;

        if(posicion > rect.width) posicion = rect.width;

        const porcentaje = (posicion / rect.width) * 100;

        overlay.style.width = porcentaje + "%";

        slider.style.left = porcentaje + "%";

    }

    comparador.addEventListener("mousedown",(e)=>{

        activo = true;

        mover(e.clientX);

    });

    window.addEventListener("mouseup",()=>{

        activo = false;

    });

    window.addEventListener("mousemove",(e)=>{

        if(!activo) return;

        mover(e.clientX);

    });

    comparador.addEventListener("touchstart",(e)=>{

        activo = true;

        mover(e.touches[0].clientX);

    });

    window.addEventListener("touchend",()=>{

        activo = false;

    });

    window.addEventListener("touchmove",(e)=>{

        if(!activo) return;

        mover(e.touches[0].clientX);

    });

});