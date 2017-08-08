export const dialogDirective = function($timeout, $q) {
    return {
        link: (scope, element) => {
            $timeout(() => element.addClass('active'));

            element.data('promise', $q((resolve, reject) => {
                scope.yes = () => resolve(true);
                scope.no = () => reject(false);
            }));
        },
        template: `
            <div class="backdrop"></div>
            <div class='wrapper'>
                <div class="content">
                    <h4 ng-show="message">{{message}}</h4>
                    <div ng-show="details">{{details}}</div>
                    <div style="padding-top: 1em;">
                        <button class="button" ng-click="yes()">{{confirmation}}</button>
                        <button class="button" ng-click="no()">{{denial}}</button>
                    </div>
                </div>
            </div>
        `
  };
};
