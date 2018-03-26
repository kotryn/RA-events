import {appConfig} from "./appconfig"

export function initAccessToken(accessToken, isLogin, id, signedRequest, userID){
    appConfig.accessToken = accessToken;
    appConfig.isLogin = isLogin;
    appConfig.id = id;
    appConfig.signedRequest = signedRequest;
    appConfig.userID = userID;
}