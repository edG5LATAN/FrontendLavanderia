import axios from "axios";

const CLIENTE_BD="https://apiecocleanlavanderia.onrender.com/cliente";

class ClienteService{
  
   getAllCliente(){
    return axios.get(CLIENTE_BD);
   }
   postCliente(cliente){
      return axios.post(CLIENTE_BD,cliente);
   }
   deletCliente(id){
      return axios.delete(CLIENTE_BD+`/${id}`)
   }
   getClienteById(id){
      return axios.get(CLIENTE_BD+`/${id}`)
   }
   updateCliente(id,cliente){
      return axios.patch(CLIENTE_BD+`/${id}`, cliente)
   }
}


export default new ClienteService();