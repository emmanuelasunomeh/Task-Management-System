import { TaskStatus } from './taskstatus';

export class Task {
    id: number;
    title: string;
    description: string;
    creationDate: Date = new Date();
    finishDate: Date;
    ts: any = {id: 1, completed: false};
}


