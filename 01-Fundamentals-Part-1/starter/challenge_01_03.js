// let i;
// let totalScoreDolphins = 0;
// let totalScoreKoalas = 0;

// for (i = 0; i < 3; i++) {
//     let scoreDolphins = Number((prompt('Digite o resultado dos Dolphins no Jogo ' + (i + 1) + `: `)));
//     totalScoreDolphins = (totalScoreDolphins + scoreDolphins);
// }

// for (i = 0; i < 3; i++) {
//     let scoreKoalas = Number((prompt('Digite o resultado dos Koalas no Jogo ' + (i + 1) + `: `)));
//     totalScoreKoalas = (totalScoreKoalas + scoreKoalas);
// }

// let mediaScoreDolphins = (totalScoreDolphins / 3);
// let mediaScoreKoalas = (totalScoreKoalas / 3);

// console.log('A media dos Dolphins é: ' + mediaScoreDolphins);
// console.log('A media dos Koalas é: ' + mediaScoreKoalas);

// if (mediaScoreDolphins > mediaScoreKoalas && mediaScoreDolphins >= 100) {
//     console.log('Os Dolphins são os vencedores com a média de ' + mediaScoreDolphins + ' pontos.')
// } else if (mediaScoreDolphins > mediaScoreKoalas && mediaScoreDolphins < 100) {
//     console.log('Os Dolphins tiveram a média maior porém não alcançaram os 100 pontos com uma média de apenas ' + mediaScoreDolphins + ' pontos.')
// } else if (mediaScoreKoalas > mediaScoreDolphins && mediaScoreKoalas >= 100) {
//     console.log('Os Koalas são os vencedores com a média de ' + mediaScoreKoalas + ' pontos.')
// } else if (mediaScoreKoalas > mediaScoreDolphins && mediaScoreDolphins < 100) {
//     console.log('Os Koalas tiveram a média maior porém não alcançaram os 100 pontos com uma média de apenas ' + mediaScoreKoalas + ' pontos.')
// } else if (mediaScoreDolphins === mediaScoreKoalas && mediaScoreKoalas >= 100 && mediaScoreDolphins >= 100) {
//     console.log('O campeonato deu empate!!!')
// } else if (mediaScoreDolphins === mediaScoreKoalas && (mediaScoreKoalas < 100 || mediaScoreDolphins < 100)) {
//     console.log('O campeonato deu empate mas um dos times não atingiu os 100 pontos, logo o campeonato não tem vencedor.')
// }