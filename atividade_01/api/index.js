import "dotenv/config";
import cors from "cors";
import express from "express";

const citacoes = [
  { autor: "Albert Einstein", citacao: "A imaginação é mais importante que o conhecimento." },
  { autor: "Albert Einstein", citacao: "A vida é como andar de bicicleta. Para ter equilíbrio, você precisa se mover." },
  { autor: "Isaac Newton", citacao: "Se eu vi mais longe, foi por estar sobre ombros de gigantes." },
  { autor: "Isaac Newton", citacao: "O que sabemos é uma gota, o que ignoramos é um oceano." },
  { autor: "Marie Curie", citacao: "Nada na vida deve ser temido, somente compreendido." },
  { autor: "Marie Curie", citacao: "Seja menos curioso sobre pessoas e mais curioso sobre ideias." },
  { autor: "Nikola Tesla", citacao: "O presente é deles; o futuro, pelo qual eu realmente trabalhei, é meu." },
  { autor: "Nikola Tesla", citacao: "Se você quer descobrir os segredos do universo, pense em termos de energia, frequência e vibração." },
  { autor: "Charles Darwin", citacao: "Não é o mais forte que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças." },
  { autor: "Charles Darwin", citacao: "A ignorância gera confiança com mais frequência do que o conhecimento." },
  { autor: "Stephen Hawking", citacao: "A inteligência é a capacidade de se adaptar à mudança." },
  { autor: "Stephen Hawking", citacao: "Por mais difícil que seja a vida, há sempre algo que você pode fazer e ter sucesso." },
  { autor: "Galileu Galilei", citacao: "Você não pode ensinar nada a um homem; você pode apenas ajudá-lo a encontrar a resposta dentro dele mesmo." },
  { autor: "Galileu Galilei", citacao: "A ciência é escrita no grande livro da natureza em linguagem matemática." },
  { autor: "Richard Feynman", citacao: "Se você acha que entende a mecânica quântica, você não entende a mecânica quântica." },
  { autor: "Richard Feynman", citacao: "Estude muito, porque o conhecimento é a única coisa que ninguém pode tirar de você." },
  { autor: "Carl Sagan", citacao: "Em algum lugar, algo incrível está esperando para ser descoberto." },
  { autor: "Carl Sagan", citacao: "Somos feitos de poeira de estrelas." },
  { autor: "Louis Pasteur", citacao: "A chance favorece apenas a mente preparada." },
  { autor: "Louis Pasteur", citacao: "A ciência não tem pátria, porque o conhecimento pertence à humanidade." },
  { autor: "Niels Bohr", citacao: "Um especialista é uma pessoa que cometeu todos os erros possíveis em um campo muito estreito." },
  { autor: "Niels Bohr", citacao: "A previsão é muito difícil, especialmente sobre o futuro." },
  { autor: "Max Planck", citacao: "A ciência não pode resolver o mistério final da natureza porque, no final, nós mesmos somos parte do mistério." },
  { autor: "Lise Meitner", citacao: "A ciência torna as pessoas alcançarem o maior dos sonhos humanos — a compreensão." },
  { autor: "Ada Lovelace", citacao: "A imaginação é a faculdade de descoberta, por excelência." },
  { autor: "Alan Turing", citacao: "Às vezes são as pessoas que ninguém imagina que possam fazer algo que fazem as coisas que ninguém imagina." },
  { autor: "Rosalind Franklin", citacao: "A ciência e a vida cotidiana não podem e não devem ser separadas." },
  { autor: "Edwin Hubble", citacao: "O universo não é obrigado a fazer sentido para você." },
  { autor: "Pythagoras", citacao: "Não existe nada de permanente exceto a mudança." },
  { autor: "Leonardo da Vinci", citacao: "Aprender nunca esgota a mente." },
];

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "Received a GET HTTP method\nServidor rodando!\n" + process.env.MESSAGE,
  );
});

app.get("/random", (req, res) => {
  const numero = Math.floor(Math.random() * 100) + 1;
  res.send("Número aleatório entre 1 e 100: " + numero);
});

app.get("/dado", (req, res) => {
  const face = Math.floor(Math.random() * 6) + 1;
  res.send("Você tirou: " + face);
});

app.get("/citacoes", (req, res) => {
  const indice = Math.floor(Math.random() * citacoes.length);
  res.send(citacoes[indice]);
});

const port = process.env.PORT ?? 3000;

app.listen(port, () =>
  console.log(
    "Example app listening on port " + port + "!\n" + process.env.MESSAGE,
  ),
);

export default app;