class Timer {
    id = null;

    constructor(date, node) {
        this.date = date; // we expect Date instance here
        this.node = node;
    };

    start = () => {
        if (!this.isActive()) {
            const interval = setInterval(() => {
                const distance = this.getDistance();
                if (distance < 0) {
                    this.stop();
                    this.#updateNode('Expired');
                    return;
                }
                this.#updateNode(this.#formatDistance(distance));
            }, 1000);
            this.id = interval;
        }
    };

    stop = () => {
        if (this.isActive()) {
            clearInterval(this.id);
            this.id = null;
        }
    };

    isActive = () => !!this.id;

    #updateNode = (text) => {
        this.node.textContent = text;
    };

    getDistance = (format = false) => {
        const currentDate = new Date().getTime();
        const distance = this.date - currentDate;
        return format ? this.#formatDistance(distance) : distance;
    };

    #formatDistance = (distance) => {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
};

export default Timer;