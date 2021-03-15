import {Container} from './styles';

export function TransactionsTable () {
  return (

    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Desenvolvimento de site</td>
            <td className='deposit'> R$ 10.000</td>
            <td>Desenvolvimento</td>
            <td>29/12/10</td>
          </tr>
          <tr>
            <td> Desenvolvimento de site</td>
            <td className='withdraw'>-R$ 1.000</td>
            <td>Desenvolvimento</td>
            <td>20/12/10</td>
          </tr>

        </tbody>
      </table>

    </Container>
  );
}
