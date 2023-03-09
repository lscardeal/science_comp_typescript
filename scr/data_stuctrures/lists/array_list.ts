export class ArrayList<T> {

    private elements: T[];

    private size: number;

    constructor() {
        this.initialize();
    }

    private initialize() {
        this.elements = [];
        this.size = 0;
    }

    public add(value: T) {
        this.elements[this.size++] = value;
    }

    public removeByIndex(index: number) {
        this.checkIndex(index);

        for (let i = index; i < this.size - 1; i++) {
            this.elements[index] = this.elements[index + 1];
        }

        this.elements[--this.size] = undefined as T;
    }

    public removeByValue(value: T) {
        const index = this.indexOf(value);
        this.removeByIndex(index);
    }

    public indexOf(value: T): number {
        for (let i = 0; i < this.size; i++) {
            if (this.elements[i] === value) {
                return i;
            }
        }

        return -1;
    }

    public removeFirst() {
        this.removeByIndex(0);
    }

    public removeLast() {
        this.removeByIndex(this.size - 1);
    }

    public get(index: number): T {
        this.checkIndex(index);
        return this.elements[index];
    }

    public getFirst(): T {
        return this.elements[0];
    }

    public getLast(): T {
        return this.elements[this.size - 1];
    }

    public getSize(): number {
        return this.size;
    }

    public clear() {
        this.initialize();
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public clone(): ArrayList<T> {
        const clone: ArrayList<T> = new ArrayList();

        if (this.isEmpty()) {
            return clone;
        }

        for (let i = 0; i < this.size; i++) {
            clone.add(this.elements[i]);
        }

        return clone;
    }

    private checkIndex(index: number) {
		if (index < 0 || index >= this.size) {
			throw Error("Invalid index");
		}
	}

}