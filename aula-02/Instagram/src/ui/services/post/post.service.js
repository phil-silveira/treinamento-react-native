import { BaseService } from '../base/base.service'

export class PostService extends BaseService {
    constructor() {
        super('https://dog.ceo/api')
    }

    getRandomPosts(numPosts) {
        return super.get(`/breeds/image/random/${numPosts}`)
        // .then(res => {

        //     return res.message.map(image => ({
        //         autor: image.split('/')[4],
        //         perfil: image,
        //         imagem: image,
        //         curtidas: (x => x.substring(x.length - 2, x.length - 1))(image.split('/')[5].split('.')[0]),
        //         liked: (x => x[x.length - 1] % 2)(image.split('/')[5].split('.')[0])
        //     }))
        // })
    }
}