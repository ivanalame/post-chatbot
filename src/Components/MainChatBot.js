import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'

const DiseñoChat = {
  background: '#f5f8fb',
  fontFamily: 'Arial, sans-serif',
  headerBgColor: '#00bcd4',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#00bcd4',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


export default class MainChatBot extends Component {
  render() {
    return (
      <div>
        <h1>MainChatBot</h1>

        <ThemeProvider theme={DiseñoChat}>
          <ChatBot
          
            steps={[
              {
                id: 'intro',
                message: 'Bienvenido a mi ChatBot. ¿Como te llamas?',
                trigger: '1', //con el trigger iremos al step con id nombre
              },
              {
                id: '1',
                user: true, //con user permitimos el ingreso de datos por chat
                trigger: '2', 
              },
              {
                id: '2',
                // Usando {previousValue} pintaremos el valor recibido en el step anterior
                message: 'Encantado de conocerte {previousValue}',     
                trigger: '3',  
              },
              {
                id: '3',
                message: '¿Que mas necesitas?',     
                end: true,  
              },
            ]}
          />
        </ThemeProvider>
      </div>
    );
  }
}
