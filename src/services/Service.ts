import axios from "axios";

const api = axios.create({
  baseURL: 'https://blogpessoal-1ltk.onrender.com/'
})

// eslint-disable-next-line @typescript-eslint/ban-types
export const cadastrarUsuario = async(url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const login = async(url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const buscar = async(url: string, setDados: Function, header: object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const cadastrar = async(url: string, dados: object, setDados: Function, header: object) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const atualizar = async(url: string, dados: object, setDados: Function, header: object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

export const deletar = async(url: string, header: object) => {
  await api.delete(url, header)
}