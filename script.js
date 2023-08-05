// Modal Scripts
const projectsImages = document.querySelectorAll('[data-modal-src]');
const modal = document.querySelector('[data-modal]');
const modalImg = document.querySelector('[data-modal-img]');
const closeModal = document.querySelector('.closeModal');

function openModal(imgSrc) {
  modalImg.src = imgSrc;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  document.body.style.marginRight = scrollWidth.toString() + 'px';
}

projectsImages.forEach(item => {
  item.addEventListener('click', () => openModal(item.src));
});

closeModal.addEventListener('click', () => {
  document.body.style.overflow = 'visible';
  document.body.style.marginRight = '0';
  modal.style.display = 'none';
});

// Language Scripts
const changeLanguage = document.querySelector('.languages');
const languageDropdown = document.querySelector('.language-selector');
const langArrow = document.querySelector('.lang-arrow');
const portugueseButton = document.querySelector('#portuguese-button');
const englishButton = document.querySelector('#english-button');
const headerAbout = document.querySelector('#header-about');
const headerProjects = document.querySelector('#header-projects');
const headerLanguages = document.querySelector('.header-languages');
const heroTitle = document.querySelector('#hero-title');
const descriptionP1 = document.querySelector('#description-p1');
const descriptionP2 = document.querySelector('#description-p2');
const descriptionP3 = document.querySelector('#description-p3');
const descriptionP4 = document.querySelector('#description-p4');
const infoName = document.querySelector('#info-name');
const infoAge = document.querySelector('#info-age');
const infoLocation = document.querySelector('#info-location');
const infoTeconlogies = document.querySelector('#info-tecnologies');
const infoContact = document.querySelector('#info-contact');
const projectsTitle = document.querySelector('#projects-title');
const ytP1 = document.querySelector('#yt-p1');
const ytP2 = document.querySelector('#yt-p2');
const ytP3 = document.querySelector('#yt-p3');
const ytP4 = document.querySelector('#yt-p');
const batmanP1 = document.querySelector('#batman-p1');
const batmanP2 = document.querySelector('#batman-p2');
const batmanP3 = document.querySelector('#batman-p3');
const batmanP4 = document.querySelector('#batman-p4');
const batmanP5 = document.querySelector('#batman-p5');
const batmanP6 = document.querySelector('#batman-p6');
const ecommP1 = document.querySelector('#ecomm-p1');
const ecommP2 = document.querySelector('#ecomm-p2');
const ecommP3 = document.querySelector('#ecomm-p3');
const ecommP4 = document.querySelector('#ecomm-p4');
const pokedexP1 = document.querySelector('#pokedex-p1');
const pokedexP2 = document.querySelector('#pokedex-p2');
const pokedexP3 = document.querySelector('#pokedex-p3');
const pokedexP4 = document.querySelector('#pokedex-p4');
const rickMortyP1 = document.querySelector('#rick-morty-p1');
const rickMortyP2 = document.querySelector('#rick-morty-p2');
const rickMortyP3 = document.querySelector('#rick-morty-p3');
const rickMortyP4 = document.querySelector('#rick-morty-p4');
const rickMortyP5 = document.querySelector('#rick-morty-p5');
const toSite = document.querySelectorAll('.to-site');
const toGitHub = document.querySelectorAll('.to-github');
const toGitApi = document.querySelectorAll('.to-git-api');
const toDockerHub = document.querySelectorAll('.to-docker');
const smallProjectsTitle = document.querySelector('#small-projects-title');
const smallProjectsT1 = document.querySelector('#small-projects-t1');
const smallProjectsT2 = document.querySelector('#small-projects-t2');
const priceComponent = document.querySelector('#price-component');
const newsPage = document.querySelector('#news-page');
const calculatorApp = document.querySelector('#calculator');
languageDropdown.style.display = 'none';

changeLanguage.addEventListener('click', () => {
  if (languageDropdown.style.display === 'none') {
    languageDropdown.style.display = 'flex';
    langArrow.innerHTML = '&#9650;';
  } else {
    languageDropdown.style.display = 'none';
    langArrow.innerHTML = '&#9660;';
  }
});

//Translate to portuguese
portugueseButton.addEventListener('click', () => {
  headerAbout.innerText = 'Sobre mim / Contato';
  headerProjects.innerText = 'Projetos';
  headerLanguages.innerText = 'Selecionar Idioma ';
  heroTitle.innerText = 'Procurando por um programador full-stack?';
  descriptionP1.innerText =
    'Olá, meu nome é Carlos Eduardo, mas pode me chamar de Kadu!';
  descriptionP2.innerText =
    'Sempre fui fascinado por tecnologia e pela area de TI, então decidi entrar para a area.';
  descriptionP3.innerText =
    'Atualmente estou focado em me tornar o melhor desenvolvedor web full-stack possivel.';
  descriptionP4.innerText =
    'Estou mais familiarizado a trabalhar com javascript, com React.js e Node.js, mas adoro aprender novas tecnologias e sou ansioso por aprender qualquer nova tecnologia capaz de me transformar em um desenvolvedor ainda melhor.';
  infoName.innerText = 'Nome: Carlos Eduardo Viana';
  infoAge.innerText = 'Idade: 26';
  infoLocation.innerText = 'De: Pernambuco, Brasil';
  infoTeconlogies.innerText = 'Tecnologias';
  infoContact.innerText = 'Contato';
  projectsTitle.innerText = 'Meus Projetos';
  ytP1.innerText =
    'Um clone da versão para desktops da pagina inicial do youtube, feita com React.js com Typescript, usando styled components e react-router-dom, contendo uma barra lateral de navagação, dropdown de configurações onde você pode escolher entre temas claro e escuro e deixar salvo a preferencia no local storage.';
  ytP2.innerText =
    'A Aplicação usa uma API para criação de usuarios, autentificação e criação de templates para simulação da pagina de pesquisa.';
  ytP3.innerText =
    'No back-end usei Node.js com express e typescript, base de dados MySQl para armazenar dados sobre usuarios e templates de videos, uuid para gerar IDs aleatorios para usuários e vídeos, bycript para criptografar as senhas dos usuarios e jsonwebtoken para gerar um token de acesso que mantém o usuario logado por 30 dias.';
  batmanP1.innerText =
    'Uma aplicação React.js que simula um site de divulgação e venda de ingressos para o filme do batman 2022.';
  batmanP2.innerText =
    'O site é responsivo para dispositivos menores e tem quatro páginas:';
  batmanP3.innerText =
    'A página principal com o trailer do filme, sinopse e cards com imagens dos principais personagens.';
  batmanP4.innerText =
    'Página de contato com um simples formulário para contato.';
  batmanP5.innerText = 'Página de fotos com um carrossel de fotos do filme.';
  batmanP6.innerText =
    'Página de comentários onde você pode adicionar um comentário, simulando conexão com uma API e base de dados.';
  ecommP1.innerText =
    'Uma aplicação que simula um e-commerce focado na venda de consoles e acessorios de video-game.';
  ecommP2.innerText =
    'Nela você pode procurar por produtos, acessar a página do produto para ter acesso a mais detalhes sobre o produto, adicionar e remover itens do carrinho(que fica salvo na local storage) e terminar o pedido, simulando uma compra.';
  ecommP3.innerText =
    'A aplicação se conecta a uma base de dados MongoDB para pegar dados dos produtos e adicionar informações sobre pedidos.';
  ecommP4.innerText =
    'Construida com Next.js, axios para requisições de dados e fazer pedidos, mongoose para conectar com MongoDB e SASS para estilização.';
  pokedexP1.innerText =
    'Um aplicativo mobile feito com: React Native com expo, redux tollkit e redux persist.';
  pokedexP2.innerHTML =
    'Você pode usar o aplicativo para procurar por pokemons e ver varias informações sobre os pokémons (tiradas do <a href="https://pokeapi.co/" target="_blank" class="link">PokéApi</a>), como: evoluções, tipos, formas, ataques e muito mais.';
  pokedexP3.innerText =
    'Você pode salvar quantos pokémons quiser como favoritos para ter acesso as suas informações com mais facilidade.';
  pokedexP4.innerText =
    'Você também pode colocar uma imagem de perfil no cabeçalho do aplicativo, pode tanto usar uma foto do armazenamento do aparelho quanto tirar uma foto direto da câmera do aplicativo.';
  rickMortyP1.innerText =
    'Um aplicativo web completamente responsivo sobre Rick & Morty, feito com: Vue.js, Nuxt.Js e Tailwind CSS';
  rickMortyP2.innerText =
    'No aplicativo você pode buscar por personagens e ver iformações sobre seu status, episódios em que aparece, ultima localização e mais...';
  rickMortyP3.innerText =
    'Ou você pode ver informações sobre episódios como: sinopse, personagens que aparecem, data de lançamento...';
  rickMortyP4.innerText =
    'Você pode também deixar um comentário na página de algum episódio, ou curtir o comentário de outra pessoa. Você precisara estar registrado e logado para fazer e curtir comentários e também para acessar a página de papéis de parede.';
  rickMortyP5.innerText =
    'A aplicação usa base de dados SQLite e Prisma ORM para gerenciar dados de usuario, comentarios e curtidas.';
  toSite.forEach(i => (i.innerText = 'Ir para site'));
  toGitHub.forEach(i => (i.innerText = 'Ir para repositório no GitHub'));
  toGitApi.forEach(i => (i.innerText = 'Ir para repositório da API no GitHub'));
  toDockerHub.forEach(i => (i.innerText = 'Ir para imagem no DockerHub'));
  smallProjectsTitle.innerText = 'Alguns projetos do Front-end Mentor';
  smallProjectsT1.innerHTML =
    'Esses são alguns projetos mais simples e menores tirados do site <a class="link" href="https://www.frontendmentor.io/" target="_blank">Frontend Mentor</a>, focados em testar e aperfeiçoar as habilidades dos devs.';
  smallProjectsT2.innerText =
    'Eles são todos responsivos, usando a estratégia de mobile first e construídos com apenas Javascript, HTML e CSS';
  priceComponent.innerText =
    'Um componente de preços com um botão para mudar entre tipos de planos.';
  newsPage.innerText =
    'Uma página de noticias com um simples menu de modal. Na versão mobile o cabeçalho vira um icone para abrir o menu.';
  calculatorApp.innerText =
    'Uma Calculadora com três temas de cores, usando "prefered-color-scheme" para definir o melhor tema para o usuário de acordo com as preferencias do dispositivo ou navegador.';

  languageDropdown.style.display = 'none';
  langArrow.innerHTML = '&#9660;';
});

// Translate to English
englishButton.addEventListener('click', () => {
  headerAbout.innerText = 'About me / Contact';
  headerProjects.innerText = 'Projects';
  headerLanguages.innerText = 'Change Language ';
  heroTitle.innerText = 'Looking for a Full-Stack Web Developer?';
  descriptionP1.innerText =
    'Hi, my name is Carlos Eduardo, but you can call me Kadu! ';
  descriptionP2.innerText =
    "I've always been fascinated by technology, so I decided to start a career as a Developer.";
  descriptionP3.innerText =
    "Currently I'm focused to become as best as I can get with Full-Stack Web Development. ";
  descriptionP4.innerText =
    "I'm especially used to work with javascript, React.js and Node.js, but willingly and longing to learn any new technologies to build better and better projects. ";
  infoName.innerText = 'Name: Carlos Eduardo Viana';
  infoAge.innerText = 'Age: 26';
  infoLocation.innerText = 'From: Pernambuco, Brasil';
  infoTeconlogies.innerText = 'Tecnologies';
  infoContact.innerText = 'Contact';
  projectsTitle.innerText = 'My projects';
  ytP1.innerText =
    "A clone of YouTube's homepage desktop version built with Typescript React.js using styled components and react-router-dom, with side-bar, configurations dropdown where you can toggle dark/light themes that stays saved to local storage.";
  ytP2.innerText =
    'The application uses an API to provide user creation, user authentication and creation of "template-videos" for the search page. ';
  ytP3.innerText =
    'On the back-end I used Node.js express with typescript, MySQL as database for users data and videos templates, uuid to generate random ids for users and videos, bycript tu encrypt users passwords, jsonwebtoken to create a token that expires in 30 days for user authentication. ';
  batmanP1.innerText =
    'A React.js built application to simulate an website for advertising and selling tickets to the 2022 batman movie. ';
  batmanP2.innerText =
    'The site is responsive to smaller devices and contains four pages: ';
  batmanP3.innerText =
    'Home page with the movie trailer, description and main characters cards. ';
  batmanP4.innerText = 'Contact page with a simple form for contact.';
  batmanP5.innerText = "Photos page with a carousel from movie's photos.";
  batmanP6.innerText =
    'Comments page where you can add comments, simulationg a connection with a database. ';
  ecommP1.innerText =
    'A application simulating an e-commerce focused on selling video-game consoles and accessories.';
  ecommP2.innerText =
    'You can search for the products, see prodcuts pages for more in depth descriptions, add and remove products from the cart (that persists your products in local storage) and "finish your order", simulating a purchase. ';
  ecommP3.innerText =
    'The Application is connected with a MongoDB database where it fetch data for the products and simulate purchases, adding orders details to the database. ';
  ecommP4.innerText =
    'The application was built with Next.js (using pages router), axios for data fetch and make orders, mongoose to connect with MongoDB and SASS for stylization. ';
  pokedexP1.innerText =
    'A pokédex mobile app, using: React Native with expo, redux toolkit and redux persist.';
  pokedexP2.innerHTML =
    'In the app you can search for pokémons and see various information (taken from <a href="https://pokeapi.co/" target="_blank" class="link">The PokeApi</a>) about the pokémons, like: evolutions, types, forms, moves, abilities and much more.';
  pokedexP3.innerText =
    'You can save as many pokémon as you want as favorites, so you can have access to their information more easily.';
  pokedexP4.innerText =
    'You can also have a picture saved in the app heading, you can either taker the picture from the app itself or choose an image pro the device storage.';
  rickMortyP1.innerText =
    'A fully responsive Rick and Morty website built with Vue.js with Nuxt.js and tailwind CSS.';
  rickMortyP2.innerText =
    'In the app you can search for characters and get info of their status, episodes appearances and last location...';
  rickMortyP3.innerText =
    'Or you can see infos about the episodes, the characters that appears, sinopsis, release date and more.';
  rickMortyP4.innerText =
    "You can also leave a comment in the episode page or like someone else's comments. You have to be registered to like and leave comments and also to get access to the wallpapers page.";
  rickMortyP5.innerText =
    'The app uses SQLite and Prisma ORM to manage user, comments and likes data.';
  toSite.forEach(i => (i.innerText = 'Go to site'));
  toGitHub.forEach(i => (i.innerText = 'Go to GitHub repository'));
  toGitApi.forEach(i => (i.innerText = 'Go to GitHub API repository'));
  toDockerHub.forEach(i => (i.innerText = 'Go to DockerHub image'));
  smallProjectsTitle.innerText = 'Some projects from Frontend Mentor';
  smallProjectsT1.innerHTML =
    'These are some smaller and simpler challenges from the <a class="link" href="https://www.frontendmentor.io/" target="_blank">Frontend Mentor</a>' +
    ' ' +
    'website, focused on testing and improving devs abilities.';
  smallProjectsT2.innerText =
    'They are all responsive, using the mobile first strategy and built with only vanilla javascript,html and css.';
  priceComponent.innerText =
    'A price component with a toggle button to change the prices.';
  newsPage.innerText =
    'A News-Page with a simple menu modal. On mobile the header navigation changes to a modal menu. ';
  calculatorApp.innerText =
    'A Calculator App with three color themes, it uses "prefered-color-scheme" to define the best suited theme for the user based on the device configuration. ';

  languageDropdown.style.display = 'none';
  langArrow.innerHTML = '&#9660;';
});

// Animations Scripts
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('balloon-animation');
    }
  });
});

observer.observe(document.querySelector('.balloon'));
