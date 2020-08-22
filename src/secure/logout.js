import Cookie from './cookie';

export default function logout(){
    const cookie = new Cookie();
    cookie.delete('auth');
}