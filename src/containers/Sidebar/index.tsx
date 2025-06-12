import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Matheus Barros</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        MatheusBarros27297
      </Paragrafo>
      <Descricao fontSize={12}>Engenharia front-end</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
