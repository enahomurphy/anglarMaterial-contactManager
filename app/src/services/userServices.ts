/// <reference path="../_all.ts" />

module ContactManager{

    export interface IUserService {
        loadAllUsers(): ng.IPromise<User[]>;
        selectedUser: User;
    }

    export class UserService implements IUserService {
        static $inject = ['$q'];

        constructor(private $q: ng.IQService) {

        }

        selectedUser: User = null;

        loadAllUsers(): ng.IPromise<User[]>{
            return this.$q.when(this.users);
        }

        private users: User[] = [
            {
                name : 'Enaho Murphy',
                avatar : 'svg-1',
                bio: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
                notes :[
                    {title : 'summer holiday', date :  new Date('2016-01-22')},
                    {title : 'weekly service', date :  new Date('2016-03-12')}
                 ]
            },
             {
                name : 'Micheal Gabreil',
                avatar : 'svg-2',
                bio: 'r since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ',
                notes :[
                    {title : 'summer holiday', date :  new Date('2016-01-22')},
                    {title : 'weekly service', date :  new Date('2016-03-12')}
                 ]
            },
             {
                name : 'anita Joe',
                avatar : 'svg-3',
                bio: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                notes :[
                    {title : 'summer holiday', date :  new Date('2016-01-22')},
                    {title : 'weekly service', date :  new Date('2016-03-12')}
                 ]
            },
            
             {
                name : 'Gloria Henry',
                avatar : 'svg-4',
                bio: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                notes :[
                    {title : 'summer holiday', date :  new Date('2016-01-22')},
                    {title : 'weekly service', date :  new Date('2016-03-12')},
                    {title : 'visitation', date :  new Date('2016-03-12')},
                    {title : 'book seminar', date :  new Date('2016-03-12')},
                    {title : 'preaching', date :  new Date('2016-03-12')},
                    {title : 'burial ceremony', date :  new Date('2016-03-12')},
                    {title : 'pta meeting', date :  new Date('2016-03-12')},
                 ]
            }

        ]
    }




}