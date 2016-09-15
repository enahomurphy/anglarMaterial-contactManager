/// <reference path="../_all.ts" />
var ContactManager;
(function (ContactManager) {
    var AddUserDialogController = (function () {
        function AddUserDialogController($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
        }
        AddUserDialogController.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        AddUserDialogController.prototype.save = function () {
            this.$mdDialog.hide(this.user);
        };
        AddUserDialogController.$inject = ['$mdDialog'];
        return AddUserDialogController;
    }());
    ContactManager.AddUserDialogController = AddUserDialogController;
})(ContactManager || (ContactManager = {}));
//# sourceMappingURL=addUserDialogController.js.map