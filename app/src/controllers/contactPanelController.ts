/// <reference path="../_all.ts" />
module ContactManager {

    export class ContactPanelController {

        static $inject = ['userService', '$mdBottomSheet'];

        constructor(
            private userService: IUserService,
            private $mdBottomSheet: angular.material.IBottomSheetService){

            this.user = this.userService.selectedUser;
        }

        user: User;

        actions:  Array<Object> = [
                {name: 'Phone',             icon: 'phone'},
                {name: 'Google plus',       icon: 'google_plus'},
                {name: 'Twitter',           icon: 'twitter'},
                {name: 'Share',             icon: 'share'}     
            ]


        contact(info: string): void {

            this.$mdBottomSheet.hide(info)
        
        }

    }
}