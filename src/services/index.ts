import HomeRepository from './repositories/home'

type RepositoryName =
    | 'home'
    | 'categories'


export default function getRepository(name: RepositoryName, params?: Record<string, any>): any {
    switch (name) {
        case 'home':
            return new HomeRepository()
        default:
            return null
    }
}
