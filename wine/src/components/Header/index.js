import { Ul, WrapperHeader, Link } from './style';
import logo from '../../assets/images/logo.png';
import busca from '../../assets/images/busca.png';
import conta from '../../assets/images/conta.png';
import vazio from '../../assets/images/vazio.png';

const links = [
  {
    id: 1,
    name: 'Clube',
    url: '/clube'
  },
  {
    id: 2,
    name: 'Lojas',
    url: '/lojas'
  },
  {
    id: 3,
    name: 'Produtos',
    url: '/produtos'
  },
  {
    id: 4,
    name: 'Ofertas',
    url: '/ofertas'
  },
  {
    id: 5,
    name: 'Eventos',
    url: '/eventos'
  }
];

export const Header = () => {
  return (
    <WrapperHeader>
      <div>
        <h1>Wine loja de vinho</h1>
        <a href="/">
          <img src={logo} alt="Logo da loja wine" width={108} height={30} />
        </a>
        <nav aria-label="Navegacao principal">
          <Ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </Ul>
        </nav>
        <nav>
          <Ul>
            <li>
              <a href="/">
                <img src={busca} alt="" width={56} height={56} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={conta} alt="" width={56} height={56} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={vazio} alt="" width={56} height={56} />
              </a>
            </li>
          </Ul>
        </nav>
      </div>
    </WrapperHeader>
  );
};
