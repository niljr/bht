import Model from './Model';

class BoardingHouse extends Model {
    constructor(docs) {
        super(docs);
    }

    hasExpired() {
        // console.log(this);
        return Math.floor((new Date().getTime() - new Date(this.bhPermit.dateIssued).getTime())*3.80517e-10) >= 12;        
    }

    isAboutToExpire() {
        // console.log(new Date(this.bhPermit.dateIssued))
        return Math.floor((new Date().getTime() - new Date(this.bhPermit.dateIssued).getTime())*3.80517e-10) >= 11;
    }

}

export default BoardingHouse;