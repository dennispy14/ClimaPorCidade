<h1>Weather Finder</h1>
<p>O Weather Finder é um site que permite aos usuários verificar as condições climáticas de qualquer cidade. Basta digitar o nome da cidade desejada e o site irá fornecer informações precisas e atualizadas sobre o clima.</p>

##<h2>Funcionalidades</h2>

+ Pesquisa por cidade: Os usuários podem digitar o nome de qualquer cidade para obter informações sobre o clima atual.
Exibição de informações detalhadas: Além de mostrar a temperatura atual, o site também fornece dados como umidade, velocidade do vento e descrição das condições climáticas.
+ Imagens relacionadas: Para tornar a experiência mais agradável, o site exibe uma imagem representativa da cidade pesquisada, obtida através da API Unsplash.
+ Bandeiras de países: Além das informações climáticas, o site também exibe a bandeira do país correspondente à cidade pesquisada, utilizando a API FlagsApi.
  
##<h3>APIs utilizadas</h3>
+ Unsplash API: A API do Unsplash é utilizada para obter imagens relacionadas à cidade pesquisada. Cada imagem exibida é escolhida aleatoriamente entre uma seleção de fotos disponíveis.
+ Weather API: A Weather API é responsável por fornecer os dados meteorológicos atualizados para a cidade pesquisada. Esses dados incluem temperatura, umidade, velocidade do vento, condições climáticas e muito mais.
+ FlagsApi: A FlagsApi é usada para obter a bandeira do país correspondente à cidade pesquisada. A bandeira é exibida juntamente com as informações climáticas para fornecer uma identificação visual rápida.
  
<h4>Como executar o projeto localmente:</h4>

## Pré-requisitos

- Node.js (https://nodejs.org) instalado em sua máquina.
- Chaves de API para acessar as APIs Unsplash e Weather.
## Configuração das chaves de API

1. Clone este repositório em sua máquina local.
2. Crie um arquivo chamado `.env` na raiz do projeto.
3. Abra o arquivo `.env` e insira suas chaves de API no seguinte formato:
  UNSPLASH_API_KEY=SuaChaveUnsplashAqui
  WEATHER_API_KEY=SuaChaveWeatherAqui
  <p><i>Substitua "SuaChaveUnsplashAqui", "SuaChaveWeatherAqui" e "SuaChaveFlagsApiAqui" pelas suas respectivas chaves obtidas ao se registrar nas APIs correspondentes.</i><p>

4. Salve o arquivo `.env`.

Observação: Certifique-se de não compartilhar suas chaves de API publicamente ao fazer commit ou ao compartilhar seu código.

## Como executar o projeto localmente

1. Após configurar corretamente suas chaves de API no arquivo `.env`, abra o terminal na pasta raiz do projeto.
2. Execute o seguinte comando para instalar as dependências necessárias:
   npm install
3. Em seguida, execute o seguinte comando para iniciar o servidor de desenvolvimento com o Webpack:
   npm start
4. O servidor será iniciado, e você poderá acessar o projeto em seu navegador.
5. Digite o nome da cidade desejada na caixa de pesquisa e pressione Enter. Aguarde alguns segundos enquanto o site busca as informações do clima e exibe a imagem e a bandeira correspondentes.

Observação: Se encontrar algum problema ao configurar suas chaves de API ou ao executar o projeto, verifique se o Node.js está instalado corretamente em sua máquina e se as dependências foram instaladas com sucesso usando o comando "npm install".
