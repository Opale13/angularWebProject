import { Category } from "./category";
import { State } from "./state";

export class Task {
    public id: number;
    public title: string;
    public description: string;
    public fkCategory: Category;
    public fkState: State;
}
