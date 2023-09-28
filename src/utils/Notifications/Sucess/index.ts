import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/** Sobre essa função //
* Exibi uma notificação para o usuário.
* @param {string} title Título da notificação.
* @param {number} time Tempo de tela da notificação.
**/
export const Sucess = (title:string, time: number) => {
  toast.success(title, {
    position: "top-right",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}