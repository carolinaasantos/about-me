const botao_redes = document.querySelector("#botao-redes")
const links = document.querySelector(".links")

const mostra_esconde = ["mostrar", "esconder"]
const valor = ["Clique para esconder as redes socias", "Clique para ver minhas redes sociais"]
var state = 0;

botao_redes.addEventListener("click", () => {
    links.setAttribute("data-list", mostra_esconde[state])
    botao_redes.value = valor[state]
    state++
    if (state == 2) 
        state = 0
})

const botao_curiosidades = document.querySelector("#botao-curiosidades")
const fato = document.querySelector("#curiosidade")

const c1 = "Sou amante de idiomas. Descobri minha paixão por idiomas em 2020 enquanto jogava um jogo que me possibilitava conhecer pessoas do mundo todo. Falo português, é claro, inglês, espanhol e francês. Planejo aprender italiano e coreano em um futuro próximo."
const c2 = "Em 2021 fiz o Desafio Jovem Engenheiro (DJE) ao lado dos meus melhores amigos e, com isso, percebi minha paixão pela engenharia e cidades inteligentes! Por isso, quero fazer uma iniciação científica nesse tópico e, possivelmente, contribuir para um futuro mais sustentável a partir da tecnologia."
const c3 = "Desde pequena sempre fui elogiada por ser boa e ter facilidade com matemática, cheguei no ensino médio já sabendo que era de exatas. Apesar disso, amo psicologia e direito, quem sabe não faço uma 2º graduação?"
const c4 = "Uma das minhas partes favoritas da minha graduação são os grupos de extensão. Quero participar de vários grupos de extensão da UFScar, entre eles a Operação Natal, Red Dragons, Panda, SWE, Sanca Social, BAJA, entre outros."
const c5 = "Já participei de várias olimpíadas científicas no ensino médio: OBI, OBMEP, OBB, ONHB, ONC, Purple Comet, Canguru, OBA e OBS (matemática, física, química, robótica e atualidades) ganhando medalha de prata e bronze nessas duas últimas."

curiosidade = [c1, c2, c3, c4, c5]
i = 0
botao_curiosidades.addEventListener("click", () => {
    fato.innerHTML = curiosidade[i]
    i++
    if (i > 3)
        i = 0
})