<h1>Weather Finder</h1>
<p>O Weather Finder é um site que permite aos usuários verificar as condições climáticas de qualquer cidade. Basta digitar o nome da cidade desejada e o site irá fornecer informações precisas e atualizadas sobre o clima.</p>

<h2>Funcionalidades</h2>

+ Pesquisa por cidade: Os usuários podem digitar o nome de qualquer cidade para obter informações sobre o clima atual.
Exibição de informações detalhadas: Além de mostrar a temperatura atual, o site também fornece dados como umidade, velocidade do vento e descrição das condições climáticas.
+ Imagens relacionadas: Para tornar a experiência mais agradável, o site exibe uma imagem representativa da cidade pesquisada, obtida através da API Unsplash.
+ Bandeiras de países: Além das informações climáticas, o site também exibe a bandeira do país correspondente à cidade pesquisada, utilizando a API FlagsApi.
+ Geolocalização: Informa o clima da cidade em que o usuário está localizado.

  
## <h3>APIs utilizadas</h3>
+ Unsplash API: A API do Unsplash é utilizada para obter imagens relacionadas à cidade pesquisada. Cada imagem exibida é escolhida aleatoriamente entre uma seleção de fotos disponíveis.
+ Weather API: A Weather API é responsável por fornecer os dados meteorológicos atualizados para a cidade pesquisada. Esses dados incluem temperatura, umidade, velocidade do vento, condições climáticas e muito mais.
+ FlagsApi: A FlagsApi é usada para obter a bandeira do país correspondente à cidade pesquisada. A bandeira é exibida juntamente com as informações climáticas para fornecer uma identificação visual rápida.
+ GeoCode: A GeoCode é usada para obter a cidade correspondente do usuário, através da latitude e longetude obtidas pelo navegador.
  
<h4>Como executar o projeto localmente:</h4>

## Pré-requisitos

- Chaves de API para acessar as APIs Unsplash, Weather e Geocode.

## Configuração das chaves de API

1. Clone este repositório em sua máquina local.

2. Substitua ChaveUnsplash, ChaveWeather e ChaveGeocodeApi pelas suas respectivas chaves obtidas ao se registrar nas APIs correspondentes.

4. Salve o arquivo.
