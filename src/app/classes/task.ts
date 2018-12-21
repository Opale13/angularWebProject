import { Category } from "./category";
import { State } from "./state";

/** Class representing a task */
export class Task {
    public id: number;
    public title: string;
    public description: string;
    public fkCategory: Category;
    public fkState: State;

    /**
    * Create a task
    */
    constructor() {
        this.fkCategory = new Category();
        this.fkState = new State();
    }
}
