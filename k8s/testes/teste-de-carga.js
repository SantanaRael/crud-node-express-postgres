import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '100s', target: 12 }, // {Duração, Usuários virtuais}
  ],
};

export default function () {
  let response = http.get('http://192.168.49.2:30303/clientes/');
  
  // Verifica se a resposta possui o status 200
  check(response, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1); // Aguarda 1 segundo entre as requisições (pode ser ajustado conforme necessário)
}