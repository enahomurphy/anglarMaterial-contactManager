
/// <reference path="../_all.ts" />
module ContactManager{

    export class MainController{
        static $inject = ['userService', '$mdSidenav', '$mdToast', '$mdDialog', '$mdMedia', '$mdBottomSheet', ];

        constructor( 
            private userService: IUserService,
            private $mdSidenav: angular.material.ISidenavService,
            private $mdToast: angular.material.IToastService,
            private $mdDialog: angular.material.IDialogService,
            private $mdMedia: angular.material.IMedia,
            private $mdBottomSheet: angular.material.IBottomSheetService) {
            var self = this

            this.userService
                .loadAllUsers()
                .then((users: User[]) => {
                    self.users = users;
                    self.selected =  users[0];
                   
                    console.log(self.users);
                });
        };

        

        // array of all users
        users: User[] = [];   

        // currently selected user
        selected: User = null;
        
        // search user text 
        searchText: string = '';

        //set the tab index
        tabIndex: string = '0';

        //
        newNote = new Note('', null)

        /*
        * @void 
        * toggles sidebar on smaller screen
        */
        
        toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
            console.log("hello world");
        }


         /*
        * @void 
        * @params {object} takes in a user object
        * makes the user selected
        */
        selectedUser(user: User): void {
            this.selected = user;

            if(this.$mdSidenav('left').isOpen()){
                this.$mdSidenav('left').close();
            }
            this.tabIndex =  '0';
        }


        /*
        * @void 
        * 
        * 
        */
        addUser($event): void {
            var self = this;
            var isFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'))
            this.$mdDialog.show({

                templateUrl : './dist/view/addUserDialog.html',
                parent : angular.element(document.body),
                targetEvent : $event,
                controller : AddUserDialogController,
                controllerAs : 'ctrl',
                clickOutsideToClose : true,
                fullscreen : isFullScreen
            }).then((user: CreateUser ) => {
                var newUser = User.fromUser(user)
                this.users.push(newUser);
                this.selectedUser(newUser);
                this.showToast('user added');

            }), () => {
                console.log('u have canceled this');
            }
        }


        /*
        * @void 
        * 
        * 
        */
        showConact($event): void {
            this.userService.selectedUser = this.selected;
            console.log(this.userService.selectedUser)
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: './dist/view/contactSheet.html',    
                controller: ContactPanelController,
                controllerAs: 'cp'
            }).then((clickeditem) => {

                console.log(clickeditem)

            })

        }


        addNote(): void {

            this.selected.notes.push(this.newNote)
            this.newNote = new Note('', null)

        }

        /*
        * @void 
        * @params {object} takes in a note object 
        * deletes the note from the users list
        * of notes
        */
        removeNote(note: Note): void {
            var foundIndex = this.selected.notes.indexOf(note);
           this.selected.notes.splice(foundIndex, 1).toLocaleString();
           this.showToast('note deleted');
            
        };


        /*
        * @void 
        * @params {object} takes in a note object 
        * deletes the note from the users list
        * of notes
        */
        editNote(note: Note, title: string): void {
            // var foundIndex = this.selected.notes.indexOf(note);
            // this.selected.notes.splice(foundIndex, 1);
            // edit.title = title ? title : edit.title;
            // edit.date = new Date()
        }


        /*
        * @void 
        * @params 'string' takes in a user 
        * deletes the note from the users list
        * of notes
        */
        showToast(message: string): void {
            this.$mdToast.show(
                this.$mdToast.simple()
                .position('top right')
                .textContent(message)
                .hideDelay(1000)
            )
        }


        /*
        * @void 
        * @params 'string' takes in a user 
        * deletes the note from the users list
        * of notes
        */
        clearNotes($event) {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure ypu want to delete all notes?')
                .textContent('All note will be deleted')
                .targetEvent($event)
                .ok('Yes')
                .cancel('No');
            var self = this
            this.$mdDialog.show(confirm).then(() => {
                self.selected.notes = []
                self.$mdToast.show("Notes deleted")
            })
            console.log('all notes cleared')
        }
    }
}