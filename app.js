import axios from "axios";

class Api {
  static async getEndereco(cep) {
    // const res = (await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data;
    // console.log('response', res)

    const res = new Endereco(
      (await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data
    );
    return res;
  }
}

// REALIZANDO A DESESTRUTURAÇÃO DOS DADOS,PARA PEGANDO OS CAMPOS ESPECÍFICOS
class Endereco {
  constructor({ logradouro, bairro, localidade }) {
    (this.logradouro = logradouro),
      (this.bairro = bairro),
      (this.localidade = localidade);
  }
}

Api.getEndereco(69035430).then((valor) => {
  console.log(valor);
});
