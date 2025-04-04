let botao = document.getElementById('btn-add')
let tarefa = document.getElementById('input-tarefa')
let lista = document.getElementById('list')

botao.addEventListener('click', () => {
    let paragrafo = document.createElement('p')
    paragrafo.innerHTML = tarefa.value
    paragrafo.classList.add('estilo-paragrafo')
    lista.appendChild(paragrafo)

    paragrafo.addEventListener('click', () => {
        paragrafo.style.textDecoration = 'line-through'
    })

    paragrafo.addEventListener('dblclick', () => {
        lista.removeChild(paragrafo)
    })
})


