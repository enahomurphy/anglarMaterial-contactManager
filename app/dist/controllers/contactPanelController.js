/// <reference path="../_all.ts" />
var ContactManager;
(function (ContactManager) {
    var ContactPanelController = (function () {
        function ContactPanelController(userService, $mdBottomSheet) {
            this.userService = userService;
            this.$mdBottomSheet = $mdBottomSheet;
            this.actions = [
                { name: 'Phone', icon: 'phone' },
                { name: 'Google plus', icon: 'google_plus' },
                { name: 'Twitter', icon: 'twitter' },
                { name: 'Share', icon: 'share' }
            ];
            this.user = this.userService.selectedUser;
        }
        ContactPanelController.prototype.contact = function (info) {
            this.$mdBottomSheet.hide(info);
        };
        ContactPanelController.$inject = ['userService', '$mdBottomSheet'];
        return ContactPanelController;
    }());
    ContactManager.ContactPanelController = ContactPanelController;
})(ContactManager || (ContactManager = {}));
//# sourceMappingURL=contactPanelController.js.map