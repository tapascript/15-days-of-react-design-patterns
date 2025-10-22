export function doLogin(userName, password) {
    if (userName && password) {
        return true;
    }
    return false;
}