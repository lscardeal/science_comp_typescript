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
        this.insertHelper(this.root, node);
    }

    private insertHelper(current: BinaryNode<T>, node: BinaryNode<T>) {
        if (node.getValue() < current.getValue()) {
            if (!current.hasLeft()) {
                current.setLeft(node);
                this.insertions++;
            } else {
                this.insertHelper(current.getLeft()!, node);
            }
        } else if (node.getValue() > current.getValue()) {
            if (!current.hasRight()) {
                current.setRight(node);
                this.insertions++;
            } else {
                this.insertHelper(current.getRight()!, node);
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
        return this.heightHelper(this.root);
    }

    private heightHelper(node: BinaryNode<T>): number {
        if (node.isFull()) {
            const leftheight = this.heightHelper(node.getLeft()!);
            const rightHeight = this.heightHelper(node.getRight()!);
            const height = leftheight > rightHeight ? leftheight : rightHeight;
            return height + 1;
        } else if (node.hasLeft()) {
            return this.heightHelper(node.getLeft()!) + 1;
        } else if (node.hasRight()) {
            return this.heightHelper(node.getRight()!) + 1;
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