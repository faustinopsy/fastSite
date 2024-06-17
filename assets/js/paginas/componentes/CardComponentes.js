const dadosCard = {
    card: {
      tipo: "div",
      class: "card",
      style: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        overflow: "hidden",
        width: "300px",
        boxSizing: "border-box",
        'border-radius': '0px 20px 0 20px',
        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.5)',
        'backdrop-filter': 'blur(30px)'
      },
      children: [
        {
          tipo: "div",
          class: "card-header",
          style: {
            backgroundColor: "#f7f7f7",
            padding: "10px 20px",
            borderBottom: "1px solid #ccc",
            textAlign: "center",
            fontSize: "18px"
          },
          textContent: "Bem-vindo ao Card"
        },
        {
          tipo: "div",
          class: "card-body",
          style: {
            padding: "20px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          },
          children: [
            {
              tipo: "img",
              class: "card-image",
              atributos: {
                src: "./img/rick.jpg",
                alt: "Imagem do Card"
              },
              style: {
                width: "100%",
                height: "auto",
                borderRadius: "8px"
              }
            },
            {
              tipo: "div",
              class: "card-content",
              style: {
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%"
              },
              children: [
                {
                  tipo: "section",
                  class: "card-section",
                  style: {
                    background: "grey",
                    width: "100%",
                    padding: "10px",
                    boxSizing: "border-box",
                    borderRadius: "4px",
                    marginBottom: "10px"
                  },
                  textContent: "Seção 1 do Card"
                }
              ]
            }
          ]
        },
        {
          tipo: "div",
          class: "card-footer",
          style: {
            backgroundColor: "#f7f7f7",
            padding: "10px 20px",
            borderTop: "1px solid #ccc",
            textAlign: "center",
            fontSize: "14px"
          },
          textContent: "Rodapé do Card"
        }
      ]
    }
  };
  
  export default dadosCard;
  