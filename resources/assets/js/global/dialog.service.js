import * as angular from 'angular';

export class DialogService {

    constructor($document, $build, $rootScope) {
        this.check = (message, details = '¿Estás seguro?', confirmation = 'Sí', denial = 'No') => {
            let body = $document.find('body');
            let element = angular.element("<div class='dialog' dialogDirective='opts'></div>");
            $build(element)(angular.extend($rootScope.$new(), { message, details, confirmation, denial }));
            body.append(element);
            return element.data('promise').finally(() => element.removeClass('active').remove());
        };
    }
}
