import axios from "axios";
import {get} from './../utils/api'
import {appConfig} from "./../appconfig"

export function getPageAlbumsCoverPhotoFB(viewId) {
    return get(appConfig.appId+'/fbGallery/'+viewId)
        .then((response) =>
            axios.get(
                'https://graph.facebook.com/oauth/authorize/search?q=warsaw&type=event&access_token=190009001737616|XpuBc6uwAa7OrSZjSXOUj2H1RU8   9b6d3bb5ebb3230ba47c59c6ba9afc3f   885461471597693|5438d8540274d47330c31bc3df38e35f  190009001737616|XpuBc6uwAa7OrSZjSXOUj2H1RU8'+appConfig.accessToken
            ))
        .then(response => response.data)
}
//885461471597693|5438d8540274d47330c31bc3df38e35f
//190009001737616|XpuBc6uwAa7OrSZjSXOUj2H1RU8