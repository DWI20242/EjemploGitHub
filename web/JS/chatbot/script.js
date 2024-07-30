document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const exitBtn = document.getElementById('exit-btn');

    // Función para iniciar la conversación con un saludo del bot
    function startConversation() {
        // Respuesta de saludo del chatbot al iniciar la conversación
        appendMessage('bot', 'Hola! Bienvenido a nuestro Restaurant. Que va ordenar Hoy?');
        // Lista de opciones de menú
        appendMessage('bot', 'Menu:');
        appendMessage('bot', '1. Pizza');
        appendMessage('bot', '2. Burger');
        appendMessage('bot', '3. Ensalada');
    }

    // Llama a la función startConversation al cargar la página para iniciar la conversación
    startConversation();

    sendBtn.addEventListener('click', function() {
        const userMessage = userInput.value.trim();
        if (userMessage !== '') {
            appendMessage('user', userMessage);
            // Aquí puedes agregar la lógica para manejar la respuesta del chatbot según el mensaje del usuario
            // Por ahora, simplemente responde con un mensaje de ejemplo
    // Analiza el mensaje del usuario para determinar la acción a realizar
        switch(userMessage.toLowerCase()) {
            case '1':
                // Respuesta del bot para la opción 1 (Pizza)
                setTimeout(function() {
                    appendMessage('bot', '¡Perfecto! Enseguida preparamos una deliciosa pizza para ti.');
                }, 500);
                break;
            case '2':
                // Respuesta del bot para la opción 2 (Hamburguesa)
                setTimeout(function() {
                    appendMessage('bot', '¡Claro! Una jugosa hamburguesa está en camino.');
                }, 500);
                break;
            case '3':
                // Respuesta del bot para la opción 3 (Ensalada)
                setTimeout(function() {
                    appendMessage('bot', '¡Una ensalada fresca y saludable será entregada pronto!');
                }, 500);
                break;
            default:
                // Respuesta del bot para cualquier otra opción no reconocida
                setTimeout(function() {
                    appendMessage('bot', 'Lo siento, no entendí tu elección. ¿Podrías repetirla?');
                }, 500);
        }
        
        userInput.value = '';
    }
});

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    
    // Manejo del evento click en el botón de salida
    exitBtn.addEventListener('click', function() {
        // Limpiar el contenido del chat
        chatBox.innerHTML = '';
        // Mostrar un mensaje de despedida
        appendMessage('bot', '¡Hasta luego! Gracias por usar nuestro chatbot.');
        // Deshabilitar la entrada del usuario y el botón de enviar
        userInput.disabled = true;
        sendBtn.disabled = true;
    });
});