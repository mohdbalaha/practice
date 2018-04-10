var box = {
    isLocked: true,

    unlock: function () {
        this.isLocked = false;
    },

    lock: function () { 
        this.isLocked = true ;
    },

    _content: ['Gold', 'Money'],

    get content() {
        if (this.isLocked) {
            throw new Error('The box is locked!');
            console.log()
        }
        return this._content;
    }
};

console.log(box.content);
box.unlock();
console.log(box.content);
