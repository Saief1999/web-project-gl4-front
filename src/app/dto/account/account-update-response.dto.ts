import { User } from "app/models/user.model";

export class AccountUpdateResponseDto{
    token: string = '';
    user: User = new User();
}