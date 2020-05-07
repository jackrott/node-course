const socket = io()
socket.on('message', (message) => {
    console.log(message)
})

document.querySelector("#message-form").addEventListener('submit', (e) => {
    e.preventDefault()
    const message = e.target.elements.message.value
    socket.emit('sendMessage', message, (error) => {
        if(error) {
            return console.log(error)
        }

        console.log('Message delivered')
    })
})

document.querySelector("#send-location").addEventListener('click', () => {
    if(!navigator.geolocation) {
        return alert('Ubicación no es soportada por el navegador')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
        }, () => {
            console.log('Ubicación compartida')
        })
    })

})