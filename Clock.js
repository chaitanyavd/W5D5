class Clock{
    constructor(){
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes(); 
        this.seconds = this.date.getSeconds();
        setInterval(this._tick.bind(this), 1000); 
    }

    printTime(){
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick(){
        if (this.seconds === 60){
            this.seconds = 0; 
            this.minutes++;
        } else if (this.minutes === 60){
            this.minutes = 0;
            this.hours++; 
        } else {
            this.seconds++;
        }
        this.printTime(); 
    }
}


const clock = new Clock(); 





