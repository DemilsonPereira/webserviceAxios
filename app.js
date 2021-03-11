import axios from "axios";

class Api {
  static async getEndereco(cep) {
    const res = await (axios.get(`https://viacep.com.br/ws/${cep}/json/`));
    console.log('response', res)
  }
}

Api.getEndereco(69035430);
