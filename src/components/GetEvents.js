import axios from "axios";
import {get} from './../utils/api'
import {appConfig} from "./../appconfig"

export function getPageAlbumsCoverPhotoFB(viewId) {
    return get(appConfig.appId+'/fbGallery/'+viewId)
        .then((response) =>
            axios.get(`https://graph.facebook.com/search?q=${this.state.city}&type=event&fields=start_time,end_time,id,cover,description,event_times,name,parent_group,place&access_token=${appConfig.accessToken}`)
        ).then(response => response.data)
}