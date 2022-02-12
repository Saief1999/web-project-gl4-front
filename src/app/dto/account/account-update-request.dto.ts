import { GenderEnum } from "app/models/user.model";

export class AccountUpdateRequestDto{
    username: string = '';
    firstname: string = '';
    lastname: string = '';
    gender: GenderEnum = GenderEnum.undeclared;
    birthday: string = '';
    quote: string= ''
}