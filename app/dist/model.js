var ContactManager;
(function (ContactManager) {
    var CreateUser = (function () {
        function CreateUser(firstName, lastName, bio, avatar) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.bio = bio;
            this.avatar = avatar;
        }
        return CreateUser;
    }());
    ContactManager.CreateUser = CreateUser;
    var User = (function () {
        function User(name, avatar, bio, notes) {
            this.name = name;
            this.avatar = avatar;
            this.bio = bio;
            this.notes = notes;
        }
        User.fromUser = function (user) {
            return new User(user.firstName + " " + user.lastName, user.avatar, user.bio, []);
        };
        return User;
    }());
    ContactManager.User = User;
    var Note = (function () {
        function Note(title, date) {
            this.title = title;
            this.date = date;
        }
        return Note;
    }());
    ContactManager.Note = Note;
})(ContactManager || (ContactManager = {}));
//# sourceMappingURL=model.js.map