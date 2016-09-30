export class User {
    uid: string;
    login: string;
    firstname: string;
    lastname: string;

    constructor($uid: string, $login: string, $firstname?: string, $lastname?: string) {
        this.uid = $uid;
        this.login = $login;
        this.firstname = $firstname || '';
        this.lastname = $lastname || '';
    }

}
