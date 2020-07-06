$(document).ready(() => {
  const toknow = `
    Sabemos que nossos jovens podem desenvolver sua inteligência e aumentar
    seus talentos e habilidades através de seu esforço. Por isso estimulamos
    interações produtivas entre estudantes, professores e seus ambientes, que
    desenvolvem e amadurecem uma <span class="bold">Mentalidade de Crescimento</span>.
    <br />
    <br />
    O resultado é uma percepção do empenho  como condição necessária
    para o desenvolvimento, que nutre a <span class="bold">Sabedoria</span> para aceitar desafios e
    aprender com as críticas. Assim a consciência de suas limitações,
    fraquezas e forças é mantida, sem que percam sua essência independente do
    sucesso ou do fracasso.
    <br />
    <br />
    Esse entendimento é uma condição que permite a todos os estudantes o
    alcance da <span class="bold">Excelência Acadêmica</span>.
    <br />
    <br />
    <div class="drawer-closer" onclick="closeDrawer('to-know')">Fechar</span>
  `
  const tobe = `
    Prezamos muito pelo <span class="bold">Desenvolvimento Socioemocional</span> de nossos estudantes
    e trabalhamos com empenho através de nossa metodologia para que possam
    desenvolver valiosos princípios éticos e morais.
    <br />
    <br />
    A <span class="bold">Generosidade</span> é um deles, e trabalhando esse princípio nossos
    jovens aprendem a ter compaixão, a realmente se preocuparem com o bem-
    estar dos outros e a repartir o reconhecimento e as vitórias com todos
    aqueles que ajudaram nas trajetórias. Já a <span class="bold">Honestidade</span>, outro princípio
    fundamental, eleva nossos estudantes a uma expressão sincera de quem são e a
    um comportamento coerente, respeitando os valores da justiça e da
    verdade. Os torando pessoas integras, na escola, na comunidade e diante de suas famílias.
    <br />
    <br />
    <div class="drawer-closer" onclick="closeDrawer('to-be')">Fechar</span>
  `
  const todo = `
    Acreditamos que uma das forças indispensáveis para a transformação,
    tanto interna quanto externa, é a <span class="bold">Força de Vontade</span>.
    <br />
    <br />
    Instruímos nossos estudantes a pensar fora da caixa, o que os leva a agir de
    forma <span class="bold">Inovadora</span>, mas sabemos que o mundo apresenta muitos desafios e
    obstáculos para aqueles que tentam mudá-lo.
    <br />
    <br />
    Por isso desenvolvemos a <span class="bold">Garra</span> como princípio em nossa escola, para que
    nossos jovens possam demonstrar perseverança e manter o foco em seus
    objetivos de longo prazo com paixão, independente de qualquer dificuldade
    que a vida possa apresentar.
    <br />
    <br />
    <div class="drawer-closer" onclick="closeDrawer('to-do')">Fechar</span>
  `
  const coexist = `
    Preparamos nossos jovens para compreender e lidar com os
    <span class="bold">Desafios Globais</span>, promovemos através de interações cooperativas entre
    estudantes e professores, o desenvolvimento da capacidade e
    sensibilidade de construir laços com o outro.
    <br />
    <br />
    Quando construímos <span class="bold">Relações Positivas</span>, somos capazes de mobilizar
    as forças e recursos para construir competências e desenvolver habilidades
    superando os desafios e atendendo as necessidades de todas as pessoas
    envolvidas. Aprender sobre as forças uns dos outros é uma forma
    importante de promover empatia e maior apreciação das ações e intenções 
    de cada indivíduo.
    <br />
    <br />
    <div class="drawer-closer" onclick="closeDrawer('coexist')">Fechar</span>
  `
  $('#to-know .body-action').click(() => {
    $('#drawer .drawer-body').html(toknow);
    $('#drawer').addClass('open');
    $('#drawer .drawer-body').addClass('to-know');
  })
  $('#to-be .body-action').click(() => {
    $('#drawer.right .drawer-body').html(tobe);
    $('#drawer.right').addClass('open');
    $('#drawer .drawer-body').addClass('to-be');
  })
  $('#to-do .body-action').click(() => {
    $('#drawer .drawer-body').html(todo);
    $('#drawer').addClass('open');
    $('#drawer .drawer-body').addClass('to-do');
  })
  $('#coexist .body-action').click(() => {
    $('#drawer.right .drawer-body').html(coexist);
    $('#drawer.right').addClass('open');
    $('#drawer .drawer-body').addClass('coexist');
  })

  $('#open-menu').click(() => {
    $('#menu-drawer').addClass('open');
  })
  $('.close-menu').click(() => {
    $('#menu-drawer').removeClass('open');
  })
})

closeDrawer = (section) => {
  $('#drawer').removeClass('open');
  $('#drawer .drawer-body').removeClass(section);
  $('#drawer.right').removeClass('open');
  $('#drawer.right .drawer-body').removeClass(section);
};