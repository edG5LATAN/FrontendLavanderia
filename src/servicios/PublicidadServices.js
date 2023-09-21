import axios from "axios";

const PUBLICIDAD_DB="https://apiecocleanlavanderia.onrender.com/publicidad";

class PublicidadService{
   getAllPublicidad(){
    return axios.get(PUBLICIDAD_DB);
   }
   postPublicidad(cliente){
      return axios.post(PUBLICIDAD_DB,cliente)
   }
   deletePublicidad(id){
      return axios.delete(PUBLICIDAD_DB+`/${id}`)
   }
}

export default new PublicidadService();