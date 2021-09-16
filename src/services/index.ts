import HomeRepository from './repositories/home'
import PlayerRepository from './repositories/player'

type RepositoryName = 'home' | 'categories' | 'player'

export default function getRepository(name: RepositoryName): any {
  switch (name) {
    case 'home':
      return new HomeRepository()
    case 'player':
      return new PlayerRepository()
    default:
      return null
  }
}
