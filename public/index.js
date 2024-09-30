$(function () {
    $("#home").on("click", () => {
        $('html, body').animate({
            scrollTop: $('.home').offset().top
        }, 1000)
    })

    $("#habilidades").on("click", () => {
        $('html, body').animate({
            scrollTop: 900
        }, 1000)
    })

    $("#projetos").on("click", () => {
        $('html, body').animate({
            scrollTop: 1500
        }, 1000)
    })

    $("#contato").on("click", () => {
        $('html, body').animate({
            scrollTop: $('.contato').offset().top
        }, 1000)
    })
})