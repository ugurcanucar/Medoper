import SellerService from './SellerService';
const AuthService = {}


AuthService.signInEmailRequest = async (email, password) => {

    

    await SellerService.login(24);
    return { user: { uid: "wVYrxaeNa9OxdnULvde1Au5m5w63" } };
    //await auth.signInWithEmailAndPassword(email, password).then(user => user).catch(err => err);
}


AuthService.signOutRequest = async () => {
    console.log("çıkış yapıldı");
}



export default AuthService;