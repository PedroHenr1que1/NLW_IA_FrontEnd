import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/** Sobre essa função //
* Exibi uma notificação para o usuário.
* @param {string} title Título da notificação.
* @param {number} time Tempo de tela da notificação.
**/
export const Warning = (title:string, time: number) => {
  toast.warning(title, {
    position: "top-right",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}