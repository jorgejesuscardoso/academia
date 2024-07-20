import { useEffect, useState } from 'react';
import AsideLeft from '../../components/aside/AsideLeft';
import AsideRight from '../../components/aside/AsideRight';
import { CardPerfil, CodeBar, PerfilContainer, PerfilContent } from './styled';
import { GetLocalStorage, SetLocalStorage } from '../../utils/localStorage';
import Swal from 'sweetalert2';
import { SendPhoto } from '../../service/usuario';
import { URL_DEPLOY_OR_HOST } from '../../utils/URL_DEPLOY_OR_HOST';

type User = {
  email: string;
  id: number;
  nome: string;
  role: string;
  telefone: string;
  turno: string;
  username: string;
  foto: string;
};

const Perfil = () => {
  const [user, setUser] = useState<User>({
    email: '',
    id: 0,
    nome: '',
    role: '',
    telefone: '',
    turno: '',
    username: '',
    foto: ''
  });

  const URL_IMAGE_USUARIOS = `${URL_DEPLOY_OR_HOST}/usuarios/img`;

  const data = GetLocalStorage('user');
  const [sendPhoto, setSendPhoto] = useState<any>(null);

  useEffect(() => {
    const user = GetLocalStorage('user');
    setUser(user);
  }, []);

  const handleSendPhoto = async () => {
    const formData = new FormData();
    formData.append('foto', sendPhoto);
    
    try {

      Swal.fire({
        title: 'Enviando foto...',
        didOpen: () => {
          Swal.showLoading();
        }
      });

      const response = await SendPhoto(formData, data.id);

      if (response.id) {
        Swal.fire({
          icon: 'success',
          title: 'Foto enviada com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
        
        SetLocalStorage('user', { ...user, foto: response.foto });
        window.location.reload();
        return;
      }

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao enviar a foto!',
        showConfirmButton: false,
        timer: 1500
      });

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao enviar a foto!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <PerfilContainer>
      <PerfilContent>
        <h1>Perfil</h1>
        <CardPerfil>
          <div>
            <p><strong>Nome:</strong> {user.nome || ''}</p>
            <p><strong>Nome de usuário:</strong> {user.username || ''}</p>     
            <p><strong>Email:</strong> {user.email || ''}</p>
            <p><strong>Telefone:</strong> {user.telefone || ''}</p>
            <p><strong>Turno:</strong> {user.turno || ''}</p>
            <p><strong>Role:</strong> {user.role || ''}</p>
          </div>
          <div className='photo'>
            <label htmlFor="photo">
              <img src={ user.foto ? `${URL_IMAGE_USUARIOS}/${user.foto}` : 'ico_profile_2.png'} alt="Foto do usuário" />
              
              <input type="file" id="photo" onChange={(e) => setSendPhoto(e.target.files?.[0])} />
                
            </label>
            {sendPhoto && <button onClick={handleSendPhoto}>Enviar foto</button>}
          </div>
        </CardPerfil>
        <CodeBar>
          <h2>QR Code</h2>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user.id}`} alt="QR Code" />
        </CodeBar>
      </PerfilContent>
      <AsideLeft />
      <AsideRight />
    </PerfilContainer>
  );
}

export default Perfil;