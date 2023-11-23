import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

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
  validarNombre = (value) => {
    // Verificar si el nombre tiene más de 15 caracteres
    if (value.length > 15) {
      return 'El nombre debe tener máximo 15 caracteres.';
    }

    // Verificar si el nombre contiene números
    if (/\d/.test(value)) {
      return 'El nombre no puede contener números.';
    }

    // Verificar si la primera letra no está en mayúscula
    if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
      return 'El nombre debe comenzar con mayúscula.';
    }

    return true;
  };

  render() {
    return (
      <div>
        <h1>MainChatBot</h1>

        <ThemeProvider theme={DiseñoChat}>
          <ChatBot
            steps={[
              {
                id: 'intro',
                message: 'Bienvenido a mi ChatBot. ¿Cómo te llamas?',
                trigger: '1',
              },
              {
                id: '1',
                user: true,
                validator: this.validarNombre,
                trigger: '2',
              },
              {
                id: '2',
                message: 'Encantado de conocerte {previousValue}',
                trigger: '3',
              },
              {
                id: '3',
                message: '¿Qué necesitas?',
                trigger: '4',
              },
              {
                id: '4',
                options: [
                  { value: 'y', label: 'Ayuda con React', trigger: 'ayudareact' },
                  { value: 'n', label: 'Otros', trigger: 'comandosreact' },
                  { value: 't', label: 'Nada mas', trigger: 'finCHAT' },
                ],
              },
                  {
                    id: 'ayudareact',
                    message: "¿Que tipo de ayuda?",
                    trigger: '5',
                  },
                  {
                    id: '5',
                    options:  [
                      { value: '1', label: '¿Que es?', trigger: 'inicioreact' },
                      { value: '2', label: 'Caracteristicas: JSX, ciclos de vida...', trigger: 'caracteristicasreact' },
                      { value: '3', label: 'Hooks', trigger: 'hookreact' },
                    ],
                  },
                  {
                    id: 'inicioreact',
                    message: 'Aqui tienes informacion sobre ¿Que es react?',
                    trigger: '6',
                  },
                  {
                    id: 'caracteristicasreact',
                    message: 'Aqui tienes informacion sobre ¿Caracteristicas de react?',
                    trigger: '6',
                  },
                  {
                    id: 'hookreact',
                    message: 'Aqui tienes informacion sobre ¿Hook de react?',
                    trigger: '6',
                  },

                  {
                    id: '6',
                    message: '¿Necesitas Algo mas?',
                    trigger: '7',
                  },
                  {
                    id: '7',
                    options:  [
                      { value: 'yes', label: 'Si, necesito mas ayuda', trigger: '3' },
                      { value: 'no', label: 'No gracias', trigger: 'finCHAT' },      
                    ],
                  },
              {
                id: 'comandosreact',
                message: 'Ok',
                end: true,
              },
              {
                id: 'finCHAT',
                message: "Estupendo,¡Ten un buen día!",
                end: true,
              },
            ]}
          />
        </ThemeProvider>
      </div>
    );
  }
}
