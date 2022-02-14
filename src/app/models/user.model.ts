export enum UserRoleEnum {
    admin = 'admin',
    user = 'user',
}
export enum GenderEnum{
    undeclared = 'Rather not say',
    male = 'Male',
    female = 'Female'
}

export class User{
    _id?: string;
    username?: string = '';
    firstname?: string = '';
    lastname?: string= '';
    password?: string ='';
    email?: string ='';
    role?: UserRoleEnum = UserRoleEnum.user;
    profileImage?: string ='';
    activated?: boolean= false;
    gender?: GenderEnum= GenderEnum.undeclared;
    quote?: string = '';
    birthday?: string = ''
}