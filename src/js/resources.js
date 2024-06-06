import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    StartButton: new ImageSource('images/start.png'),
    Background: new ImageSource('images/background.jpg'),
    Plane: new ImageSource('images/plane.png'),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }