const botao_topo = document.querySelector("#toTop");

botao_topo.style.display = "block";

window.onscroll = () => {
    const scrollValue = document.documentElement.scrollTop;

    if(scrollValue > 200) {
        botao_topo.style.display = "block";
    } else {
        botao_topo.style.display = "none";
    }
};


