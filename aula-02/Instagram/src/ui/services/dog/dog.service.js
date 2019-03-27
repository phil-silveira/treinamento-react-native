import { BaseService } from '../base/base.service'

export class DogService extends BaseService {
    constructor() {
        super('https://dog.ceo/api')
    }

    getRandomImage() {
        return super.get('/breeds/image/random')
    }

    getRandomImages(numImages) {
        return super.get(`/breeds/image/random/${numImages}`)
    }
}