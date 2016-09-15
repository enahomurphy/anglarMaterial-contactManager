/// <reference path="_all.ts" />

module ContactManager{

    angular.module('contactManager', ['ngMaterial', 'ngMdIcons'])
    .service('userService', UserService)
    .controller('mainController', MainController)
    .config(($mdIconProvider: angular.material.IIconProvider,
             $mdThemingProvider: angular.material.IThemingProvider
        ) => {

        $mdIconProvider
            .defaultIconSet('assets/svg/avatars.svg', 124)
            .icon('phone', 'assets/svg/phone.svg', 34)
            .icon('google_plus', 'assets/svg/google_plus.svg')
            .icon('twitter', 'assets/svg/twitter.svg')
            .icon('share', 'assets/svg/share.svg')
            .icon('mail', 'assets/svg/mail.svg')
            .icon('menu', 'assets/svg/menu.svg', 24);
            
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
        
    })


}