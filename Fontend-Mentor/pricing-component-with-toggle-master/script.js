

function changePrices() {
    const basic = document.getElementById("basic")
    const professional = document.getElementById("professional")
    const master = document.getElementById("master")
    const toggle = document.getElementById("checkbox")

    basic.innerHTML = toggle.checked ? "19.99" : "199.99"
    professional.innerHTML = toggle.checked ? "24.99" : "249.99"
    master.innerHTML = toggle.checked ? "39.99" : "399.99"


}