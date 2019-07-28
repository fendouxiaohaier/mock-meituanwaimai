(function() {
    let docEl = document.document || document.documentElement;

    function setRemUnit() {
        let width = docEl.getBoundingClientRect().width;
        
        docEl.style.fontSize = width / 10 + "px";   // 每一任rem等于375/10
    }

    setRemUnit();

    docEl.addEventListener("resize", setRemUnit);
})();