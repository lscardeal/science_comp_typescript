import { LinkedNode } from "../nodes/linked_node";

export class LinkedList<T> {

    private head: LinkedNode<T> | undefined;

    private tail: LinkedNode<T> | undefined;

    private size: number;

    constructor() {
        this.initialize();
    }

    private initialize() {
        this.head = undefined;
        this.tail = undefined;
        this.size = 0;
    }

    public clear() {
        this.initialize();
    }

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    private hasOneNode(): boolean {
        return this.size === 1;
    }

    public addFirst(value: T) {
        const node = new LinkedNode(value);
        node.setNext(this.head)
        this.head = node;

        if (this.isEmpty()) {
            this.tail = node;
        }

        this.size++;
    }

    public addLast(value: T) {
        const node = new LinkedNode(value);
        
        if (this.isEmpty()) {
            this.head = node;
        } else {
            this.tail?.setNext(node);
        }
        
        this.tail = node;
        this.size++;
    }

    public getFirst(): T | undefined {
        return this.head?.getValue();
    }

    public getLast(): T | undefined {
        return this.tail?.getValue();
    }

    public get(index: number): T {
        this.checkIndex(index);

        if (index === 0) {
            return this.getFirst()!;
        } else if (index === this.size - 1) {
            return this.getLast()!;
        }

        let current: LinkedNode<T> = this.head!;
        for(let i = 0; i < index; i++) {
            current = current.getNext()!;
        }

        return current.getValue();
    }

    public add(index: number, value: T) {
        if (index === 0) {
            this.addFirst(value);
            return;
        } else if (index === this.size) {
            this.addLast(value);
            return;
        }

        this.checkIndex(index);
        const node = new LinkedNode(value);
        let current = this.head!;

        for(let i = 0; i < index - 1; i++) {
            current = current.getNext()!;
        }

        node.setNext(current.getNext());
        current.setNext(node);
        this.size++;
    }

    public removeFirst() {
        if (this.isEmpty()) {
            return;
        } else if (this.hasOneNode()) {
            this.initialize();
            return;
        } 

        this.head = this.head!.getNext();
        this.size--;
    }

    public removeLast() {
        if (this.isEmpty()) {
            return;
        } else if (this.hasOneNode()) {
            this.initialize();
            return;
        }

        let current = this.head!;
        while(current.getNext()!.hasNext()) {
            current = current.getNext()!;
        }

        current.setNext(undefined);
        this.size--;
    }

    public removeByIndex(index: number) {
        if (index == 0) {
			this.removeFirst();
			return;
		} else if (index == this.size - 1) {
			this.removeLast();
			return;
		}

		if (this.isEmpty()) {
			return;
		} else if (this.hasOneNode()) {
			this.initialize();
			return;
		}

        this.checkIndex(index - 1);
		let current = this.head!;
		for (let i = 0; i < index - 1; i++) {
			current = current.getNext()!;
		}

		current.setNext(current.getNext()!.getNext());
		this.size--;
    }

    public removeByValue(value: T) {
        const index = this.indexOf(value);
        this.removeByIndex(index);
    }

    public indexOf(value: T): number {
        let current = this.head;
		for (let i = 0; i < this.size; i++) {
			if (current!.getValue() === value) {
				return i;
			}
			current = current!.getNext();
		}
        
		return -1;
    }

    public contains(value: T): boolean {
        return this.indexOf(value) !== -1;
    }

    private checkIndex(index: number) {
        if (index < 0 || index >= this.size) {
            throw Error("Invalid index");
        }
    }

    public clone(): LinkedList<T> {
        const clone: LinkedList<T> = new LinkedList();

        if (this.isEmpty()) {
            return clone;
        }

        let current: LinkedNode<T> = this.head!;
        clone.addFirst(current.getValue());

        while (current.hasNext()) {
            current = current.getNext()!;
            clone.addLast(current.getValue());
        }

        return clone;
    }
}