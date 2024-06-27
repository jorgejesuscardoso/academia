/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { DeletePlano, GetPlanos, UpdatePlano } from '../../../service/planos';
import { ConfirmarModificacao, ConfirmarRemocao, ConfirmarRemocaoNovamente, EscolherPlanoParaModificar, EscolherPlanoParaRemover, FormularioModificarPlano } from '../../pop-ups/Planos';
import Swal from 'sweetalert2';
import { ContainerConfig } from './styled';

type Plano = {
  id: number;
  nome: string;
  valor: number;
  descricao: string;
};

type PlanosProps = {
  handleGetPlanos: () => void;
};

const MenuConfigPlanos = ({ handleGetPlanos }: PlanosProps) => {
  const [planos, setPlanos] = useState<Plano[]>([]);
  const [remove, setRemove] = useState<boolean>(false);
  const [dataPlanoToRemove, setDataPlanoToRemove] = useState<Plano | null>(null);
  const [confirmRemove, setConfirmRemove] = useState<boolean>(false);
  const [confirmRemoveAgain, setConfirmRemoveAgain] = useState<boolean>(false);

  const [showModify, setShowModify] = useState<boolean>(false);
  const [showPlanosToModify, setShowPlanosToModify] = useState<boolean>(false);
  const [dataPlanoToModify, setDataPlanoToModify] = useState<Plano | null>(null);
  const [confirmModify, setConfirmModify] = useState<boolean>(false);
  const [planModified, setPlanModified] = useState<Partial<Plano>>({
    nome: '',
    valor: 0,
    descricao: ''
  });

  useEffect(() => {
    handleGetPlanos2();
  }, []);

  const handleGetPlanos2 = async () => {
    try {
      const response = await GetPlanos();
      setPlanos(response);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao buscar planos',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const handleRemove = async (id: number) => {
    try {
      const response = await DeletePlano(id);
      if (response) {
        setTimeout(() => {
          handleGetPlanos();
        }, 1000);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao remover plano',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const handleModify = async () => {
    if (!dataPlanoToModify) return;
    try {
      const response = await UpdatePlano(dataPlanoToModify.id, planModified);
      if (response) {
        setConfirmModify(false);
        setShowModify(false);
        setDataPlanoToModify(null);
        handleGetPlanos();

        Swal.fire({
          icon: 'success',
          title: 'Plano modificado com sucesso',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao modificar plano',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <ContainerConfig>
      <h3>Configuração de Planos</h3>
      <ul>
        <button onClick={() => setRemove(!remove)}>
          <li>Remover</li>
        </button>
        <button onClick={() => setShowPlanosToModify(!showPlanosToModify)}>
          <li>Modificar</li>
        </button>
      </ul>

      {
      remove && <EscolherPlanoParaRemover
        setRemove={setRemove}
        setConfirmRemove={setConfirmRemove}
        setDataPlanoToRemove={setDataPlanoToRemove}
        planos={planos}
      />
      }

      {
      confirmRemove && <ConfirmarRemocao 
        dataPlanoToRemove={dataPlanoToRemove}
        setConfirmRemove={setConfirmRemove}
        setConfirmRemoveAgain={setConfirmRemoveAgain}
      />
      }

      {confirmRemoveAgain && <ConfirmarRemocaoNovamente
        dataPlanoToRemove={dataPlanoToRemove}
        setConfirmRemove={setConfirmRemove}
        setConfirmRemoveAgain={setConfirmRemoveAgain}
        setRemove={setRemove}
        handleRemove={() => {
          handleRemove(dataPlanoToRemove?.id || 0);
          setConfirmRemoveAgain(false);
        }}
      />
      }

      {showPlanosToModify && <EscolherPlanoParaModificar
        setShowPlanosToModify={setShowPlanosToModify}
        setShowModify={setShowModify}
        setDataPlanoToModify={setDataPlanoToModify}
        planos={planos}
      />
      }

      {showModify && dataPlanoToModify && <FormularioModificarPlano 
        planModified={planModified}
        setPlanModified={setPlanModified}
        dataPlanoToModify={dataPlanoToModify}
        setConfirmModify={setConfirmModify}
        setShowModify={setShowModify}
      />
      }

      {confirmModify && dataPlanoToModify && <ConfirmarModificacao
        dataPlanoToModify={dataPlanoToModify}
        planModified={planModified}
        setConfirmModify={setConfirmModify}
        setShowModify={setShowModify}
        handleModify={handleModify}
      />
      }
    </ContainerConfig>
  );
};

export default MenuConfigPlanos;
