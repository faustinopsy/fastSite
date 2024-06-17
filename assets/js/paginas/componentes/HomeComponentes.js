const dadosPagina = {
    estiloPadrao: {
      border: "2px solid black",
      "box-sizing": "border-box"
    },
    header: {
      tipo: "header",
      style: {
        "box-sizing": "border-box",
        textAlign: "center",
        padding: "20px",
        background: "lightblue",
        fontSize: "24px"
      },
      textContent: "Bem-vindo à Página Inicial"
    },
    main: {
      tipo: "main",
      style: {
        'box-sizing': 'border-box',
        'display': 'flex',
        'height': 'auto',
        'flex-direction': 'row',
        'flex-wrap': 'wrap',
        'justify-content': 'center',
        'gap': '5px',
        'margin': '10px'
      }
    },
    article: {
      tipo: "article",
      style: {
        border: "2px solid black",
        "box-sizing": "border-box",
        background: "lightgreen",
        display: "flex",
        "flex-wrap": "wrap",
        width: "100%",
        height: "100%",
        "justify-content": "center"
      }
    },
    section1: {
      tipo: "section",
      style: {
        border: "2px solid black",
        "box-sizing": "border-box",
        background: "lightcoral",
        width: "40%",
        height: "300px"
      }
    },
    section2: {
      tipo: "section",
      style: {
        border: "2px solid black",
        "box-sizing": "border-box",
        background: "lightsalmon",
        width: "40%",
        height: "300px"
      }
    },
    aside: {
      tipo: "aside",
      style: {
        border: "dashed 2px",
        "box-sizing": "border-box",
        background: "lightpink",
        width: "20%",
        height: "300px"
      }
    },
    imagem: {
      tipo: "img",
      style: {
        border: "2px solid black",
        "box-sizing": "border-box",
        width: "100%",
        height: "200px",
        background: "url(./img/rick.jpg) 100%",
        "background-repeat": "no-repeat",
        "background-size": "cover"
      }
    }
  };
  
  export default dadosPagina;
  