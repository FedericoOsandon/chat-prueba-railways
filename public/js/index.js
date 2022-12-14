const socket = io.connect()

const render = (data) => {
    const html = data.map((element, idx) => {
                            return (`<div>
                                        <strong>${element.author}</strong>:
                                        <em>${element.text}</em>
                                    </div>`)
                        }).join(" ")
    document.getElementById('mensajes').innerHTML = html
}

socket.on('mensajes-clientes', data => {
    render(data)
})

const addMensaje = (e) => {
   
    const mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('text').value
    }
    socket.emit('mensaje-al-servidor', mensaje)
    return false
}