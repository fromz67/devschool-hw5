class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    itemCount() {
        return this.collection.length;
    }

    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1;
        } else if (pageIndex === this.pageCount() - 1) {
            return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        } else {
            return this.itemsPerPage;
        }
    }

    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1;
        }
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

console.log(helper.pageCount());
console.log(helper.itemCount());
console.log(helper.pageItemCount(0));
console.log(helper.pageItemCount(1));
console.log(helper.pageItemCount(2));

console.log(helper.pageIndex(5));
console.log(helper.pageIndex(2));
console.log(helper.pageIndex(20));
console.log(helper.pageIndex(-10));