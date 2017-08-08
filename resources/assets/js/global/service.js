class Service {
    constructor() {
        this.development = angular.fromJson(sessionStorage.getItem('configuration')).development;
    }
}
