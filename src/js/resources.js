import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    startButton: new ImageSource('images/start.png'),
    background: new ImageSource('images/background.jpg')
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }