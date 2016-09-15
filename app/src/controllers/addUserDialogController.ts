/// <reference path="../_all.ts" />

module ContactManager {

    export class AddUserDialogController {

        static $inject = ['$mdDialog']

        constructor( private $mdDialog){}

        user: CreateUser;

        avatars: Array<Object> =  [ 'svg-1', 'svg-2', 'svg-3', 'svg-4']

        cancel(): void {
            
            this.$mdDialog.cancel()
        }

        save(): void {
            
            this.$mdDialog.hide(this.user);
            
        }


    }


}