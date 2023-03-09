import { ArrayList } from "../lists/array_list";

type HashNode<K, V> = {
    key: K,
    value: V
}

export class HashTable<K, V> {

    private table = new ArrayList<HashNode<K, V>>();

    public put(key: K, value: V) {
        for (const node of this.table) {
            if (node.key === key) {
                node.value = value;
                return;
            }
        }

        this.table.add({key: key, value: value} as HashNode<K, V>);
    }

    public get(key: K) {
        for (const node of this.table) {
            if (node.key === key) {
                return node.value;
            }
        }

        return undefined;
    }

    public remove(key: K) {
        for (const node of this.table) {
            if (node === key) {
                this.table.removeByValue(node);
            }
        }
    }
}