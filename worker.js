self.addEventListener('message', async (event) => {
  const { type } = event.data;
  
  if (type === 'fetchData') {
      try {
          const urls = [
              '/json/curriculo.json',
              '/json/portifolio.json',
              '/json/a2fa.json',
              '/json/cpfcorreto.json',
              '/json/InteligenciaArtificial.json',
              '/json/LogicaProgramacao.json',
              '/json/LogsSistemas.json',
              '/json/MachineLearningPHP.json',
              '/json/OPHP.json',
              '/json/TreinandoModelo.json'
          ];

          const responses = await Promise.all(urls.map(url => fetch(url)));
          const jsonData = await Promise.all(responses.map(response => response.json()));

          const data = {
              curriculo: jsonData[0],
              portifolio: jsonData[1],
              cards:[
                jsonData[2],jsonData[3],jsonData[4],jsonData[5],
                jsonData[6],jsonData[7],jsonData[8], jsonData[9]
              ]
              
          };

          self.postMessage({ type: 'dadosJson', data });
      } catch (error) {
          self.postMessage({ type: 'error', error: error.message });
      }
  }
});
