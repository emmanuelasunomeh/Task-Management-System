import { Role } from './Role';

export class User {
    id: number;
    // tslint:disable-next-line:variable-name
    f_name: string;
    // tslint:disable-next-line:variable-name
    l_name: string;
    // tslint:disable-next-line:variable-name
    m_name: string;
    // tslint:disable-next-line:variable-name
    username: string;
    email: string;
    password: string;
    // tslint:disable-next-line:variable-name
    role: Role ;
}
