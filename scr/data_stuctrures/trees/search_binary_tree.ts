import { BinaryNode } from '../nodes/binary_node';

export class SearchBinaryTree<T> {

    private root: BinaryNode<T>;

    private insertions: number;

    private readonly INSERTIONS_TO_BALANCE = 10;

    constructor(value: T) {
        const node = new BinaryNode(value);
        this.root = node;
        this.insertions = 0;
    }

    public insert(value: T) {
        const node = new BinaryNode(value);
        this.insertHandler(this.root, node);
        if (this.insertions === this.INSERTIONS_TO_BALANCE) {
            this.balance();
        }
    }

    private insertHandler(current: BinaryNode<T>, node: BinaryNode<T>) {
        if (node.getValue() < current.getValue()) {
            if (!current.hasLeft()) {
                current.setLeft(node);
                this.insertions++;
            } else {
                this.insertHandler(current.getLeft()!, node);
            }
        } else if (node.getValue() > current.getValue()) {
            if (!current.hasRight()) {
                current.setRight(node);
                this.insertions++;
            } else {
                this.insertHandler(current.getRight()!, node);
            }
        }
    }

    private rotateLeft(node: BinaryNode<T>) {
        const pivot = node.getRight();
        if (pivot !== undefined) {
            node.setRight(pivot.getLeft());
            pivot.setLeft(node);
            if (node === this.root) {
                this.root = pivot;
            }
        }
    }

    private rotateRight(node: BinaryNode<T>) {
        const pivot = node.getLeft();
        if (pivot !== undefined) {
            node.setLeft(pivot.getRight());
            pivot.setRight(node);
            if (node === this.root) {
                this.root = pivot;
            }
        }
    }

    public height(): number {
        return this.heightHandler(this.root);
    }

    private heightHandler(node: BinaryNode<T>): number {
        if (node.isFull()) {
            const leftheight = this.heightHandler(node.getLeft()!);
            const rightHeight = this.heightHandler(node.getRight()!);
            const height = leftheight > rightHeight ? leftheight : rightHeight;
            return height + 1;
        } else if (node.hasLeft()) {
            return this.heightHandler(node.getLeft()!) + 1;
        } else if (node.hasRight()) {
            return this.heightHandler(node.getRight()!) + 1;
        }

        return 1;

        /*
        if (node === undefined) {
            return 0;
        }

        const leftheight = this.hh(node.getLeft());
        const rightHeight = this.hh(node.getRight());
        const height = leftheight > rightHeight ? leftheight : rightHeight;
        return height + 1;
        */
    }
}