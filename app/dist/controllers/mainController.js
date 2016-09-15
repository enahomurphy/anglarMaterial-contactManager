/// <reference path="../_all.ts" />
var ContactManager;
(function (ContactManager) {
    var MainController = (function () {
        function MainController(userService, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdBottomSheet = $mdBottomSheet;
            // array of all users
            this.users = [];
            // currently selected user
            this.selected = null;
            // search user text 
            this.searchText = '';
            //set the tab index
            this.tabIndex = '0';
            //
            this.newNote = new ContactManager.Note('', null);
            var self = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                self.users = users;
                self.selected = users[0];
                console.log(self.users);
            });
        }
        ;
        /*
        * @void
        * toggles sidebar on smaller screen
        */
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
            console.log("hello world");
        };
        /*
       * @void
       * @params {object} takes in a user object
       * makes the user selected
       */
        MainController.prototype.selectedUser = function (user) {
            this.selected = user;
            if (this.$mdSidenav('left').isOpen()) {
                this.$mdSidenav('left').close();
            }
            this.tabIndex = '0';
        };
        /*
        * @void
        *
        *
        */
        MainController.prototype.addUser = function ($event) {
            var _this = this;
            var self = this;
            var isFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            this.$mdDialog.show({
                templateUrl: './dist/view/addUserDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: ContactManager.AddUserDialogController,
                controllerAs: 'ctrl',
                clickOutsideToClose: true,
                fullscreen: isFullScreen
            }).then(function (user) {
                var newUser = ContactManager.User.fromUser(user);
                _this.users.push(newUser);
                _this.selectedUser(newUser);
                _this.showToast('user added');
            }), function () {
                console.log('u have canceled this');
            };
        };
        /*
        * @void
        *
        *
        */
        MainController.prototype.showConact = function ($event) {
            this.userService.selectedUser = this.selected;
            console.log(this.userService.selectedUser);
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: './dist/view/contactSheet.html',
                controller: ContactManager.ContactPanelController,
                controllerAs: 'cp'
            }).then(function (clickeditem) {
                console.log(clickeditem);
            });
        };
        MainController.prototype.addNote = function () {
            this.selected.notes.push(this.newNote);
            this.newNote = new ContactManager.Note('', null);
        };
        /*
        * @void
        * @params {object} takes in a note object
        * deletes the note from the users list
        * of notes
        */
        MainController.prototype.removeNote = function (note) {
            var foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(foundIndex, 1).toLocaleString();
            this.showToast('note deleted');
        };
        ;
        /*
        * @void
        * @params {object} takes in a note object
        * deletes the note from the users list
        * of notes
        */
        MainController.prototype.editNote = function (note, title) {
            // var foundIndex = this.selected.notes.indexOf(note);
            // this.selected.notes.splice(foundIndex, 1);
            // edit.title = title ? title : edit.title;
            // edit.date = new Date()
        };
        /*
        * @void
        * @params 'string' takes in a user
        * deletes the note from the users list
        * of notes
        */
        MainController.prototype.showToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .position('top right')
                .textContent(message)
                .hideDelay(1000));
        };
        /*
        * @void
        * @params 'string' takes in a user
        * deletes the note from the users list
        * of notes
        */
        MainController.prototype.clearNotes = function ($event) {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure ypu want to delete all notes?')
                .textContent('All note will be deleted')
                .targetEvent($event)
                .ok('Yes')
                .cancel('No');
            var self = this;
            this.$mdDialog.show(confirm).then(function () {
                self.selected.notes = [];
                self.$mdToast.show("Notes deleted");
            });
            console.log('all notes cleared');
        };
        MainController.$inject = ['userService', '$mdSidenav', '$mdToast', '$mdDialog', '$mdMedia', '$mdBottomSheet',];
        return MainController;
    }());
    ContactManager.MainController = MainController;
})(ContactManager || (ContactManager = {}));
//# sourceMappingURL=mainController.js.map