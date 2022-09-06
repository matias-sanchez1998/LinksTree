const $links = document.getElementById('links');
const $name = document.querySelector('h1');

const data = {
    name: "Matias Sanchez",
    nickname: "matisanchez_1",
    description: " Estudiante de @platzi - Desarrollador FullStack Javascript - Amante de la programación",
    avatar: "./assest/image/ImageProfile.jpeg",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/matisanchez_1",
        username: "matisanchez_1",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/matias-sanchez-262531166/",
        username: "",
      },
      {
        name: "github",
        url: "https://github.com/matias-sanchez1998",
        username: "",
      },
    ],
    links: [
      {
        name: "MIS CURSOS APROBADOS",
        url: "https://platzi.com/p/matisanchez10/",
        color: "yellow",
        emoji: "📖",
      },
      {
        name: "INSTAGRAM",
        url: "https://www.instagram.com/matisanchez.1/",
        color: "blue",
        emoji: "📷",
      },
      {
        name: " JUEGO HECHO POR MI CON JAVASCRIPT",
        url: "https://matias-sanchez1998.github.io/Juego-javascript/",
        color: "fuchsia",
        emoji: "💻",
      },
      {
        name: "CONTACTO POR EMAIL",
        url: "mailto:Matias+sanchezmatias419@gmail.com?Subject=Contacto",
        color: "lime",
        emoji: "📩",
      },
    ],
    footer: "Made with Love on Argentina",
  };

const main = () => {
    let name = document.createTextNode(data?.name);
    let links = data?.links?.map((network) => {
        return `<div class="bg-${network.color}-200 px-4 py-5 w-full flex justify-between">
        <a class="text-sm font-bold text-${network.color}-600 text-center hover:text-${network.color}-800 cursor-pointer"
            href=${network.url} target="_blank">
                            ${network.name}        </a>
        <span>${network.emoji}</span>
    </div>`
    }).join('');
    let newItem = document.createElement('section');
    newItem.innerHTML = links;
    $links.appendChild(newItem);
    $name.appendChild(name)
}


main();