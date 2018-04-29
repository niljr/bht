import { action, computed, observable, runInAction } from 'mobx';
import { orange500, blue500 } from 'material-ui/styles/colors';
import BoardingHouse from '../../models/BoardingHouse';

class BoardingHouseStore {
    // @observable boardingHouses = [];
    constructor(client) {
        this.client = client;
        this.loadBoardingHouse();
        this.handleRealtimeEvents();
    }

    @observable _boardingHouses = [];

    @observable filter = {
        exclusivity: 'Male',
        districtName: 'Jaro',
        hasAirconRooms: 'Yes',
        minRate: 500,
        maxRate: 3500
    }

    @observable bhInfo = {
        bhName: '',
        kindOfBusiness: '',
        bhAddress: {
            fullAddress: '',
            districtName: '',
            long: 0,
            lat: 0
        },
        numberOfRooms: 0,
        rate: {
            minRate: 0,
            maxRate: 0,
        },
        bhPermit: {
            businessPermitNumber: '',
            certificateNumber: '',
            dateIssued: '',
        },
        // district: '',

        exclusivity: '',
        hasAirconRooms: '',
    };

    @observable stepIndex = 0;
    @observable finished = false;
    @observable openDrawer = false;
    @observable editModal = false;
    @observable viewModal = false;
    @observable _selectedBh = null;
    @observable slideIndex = 0;
    @observable openModal = false;
    @observable deleteModal = false;
    @observable districtValue = 1;
    // @observable chartdata = {
    //     labels: ['Jaro', 'Lapaz', 'Molo', 'Mandurriao', 'Lapuz', 'City Proper', 'Villa Arevalo'],
    //     datasets: [{
    //         label: 'Total number of Boarding House per District',
    //         data: [],
    //         backgroundColor: [
    //             'rgba(255, 99, 132,.5)',
    //             'rgba(54, 162, 235, .5)',
    //             'rgba(255, 206, 86, .5)',
    //             'rgba(75, 192, 192, .5)',
    //             'rgba(153, 102, 255, .5)',
    //             'rgba(255, 159, 64, .5)',
    //             'rgba(220, 244, 66, .5)'
    //         ]

    //     }]
    // }

    @action
    filterReport = (name, param, filterStr) => {
        console.log(filterStr);
        this.loadBoardingHouse();
        if (this._boardingHouses.length > 0) {
            console.log(param ? this._boardingHouses.filter(x => x[param][name] === filterStr).length() :
                this._boardingHouses.filter(x => x[name] === filterStr).length())
            return param ? this._boardingHouses.filter(x => x[param][name] === filterStr).length() :
                this._boardingHouses.filter(x => x[name] === filterStr).length();
        }
    }

    @action
    filterProfile = (name, param, filterStr) => {
        if (this.boardingHouses.length > 0) {
            return this.boardingHouses.filter(x => x[param][name] === filterStr);
        }
    }

    @action
    incrementStep = () => {
        this.stepIndex++;
    }

    @action
    handleRealtimeEvents = () => {
        this.client.service('/api/boardingHouse')
            .on("created", () => {
                this.loadBoardingHouse();
                this.reset();
            }).on("removed", () => {
                this.loadBoardingHouse();
                this.reset();
            }).on("updated", () => {
                this.loadBoardingHouse();
            }).on("patched", () => {
                this.loadBoardingHouse();
                this.reset();
            })
    }

    @action
    handleSlide = (value) => {
        slideIndex = value;
    };
    @action
    handlePrev = () => {
        this.stepIndex--;
    };

    @action
    handleDate(e, date) {
        console.log(date);
        this.bhInfo.bhPermit.dateIssued = new Date(date);
    }


    @action
    change = (e, value, param) => {
        const change = this.selectedBh ? this.selectedBh : this.bhInfo;
        param ?
            change[param][e.target.name] = value
            :
            change[e.target.name] = value
    };

    @action
    edit = (e, value, param) => {
        param ?
            this.selectedBh[param][e.target.name] = value
            :
            this.selectedBh[e.target.name] = value
    }

    @action
    handleToggle = () => {
        this.openDrawer = !this.openDrawer;

        if (this.openDrawer == true) {
            console.log("open");
        } else {
            console.log("close");
        }
    }


    @action
    handleModal = (modal, selected) => {
        this[modal] = !this[modal];
        this._selectedBh = selected;
    }

    // @action
    // handleDate = (e, date) => {
    //     console.log(e);
    //     this.bhInfo.bhPermit[e.target.name] = new Date(date);
    // }

    @action
    handleCloseModal = (modal) => {
        this[modal] = !this[modal];
        this._selectedBh = null;
    }

    @action
    checkValue = (e, value, param) => {
        console.log(this.filter);
        param ? this.filter[param][e.target.name] = value
            : this.filter[e.target.name] = value;
    };
    @action
    checkValueForm = (e, value, param) => {
        param ? this.bhInfo[param][e.target.name] = value
            : this.bhInfo[e.target.name] = value;
    };

    @action
    reset = () => {
        this._selectedBh = null;
        this.finished = false;
        this.stepIndex = 0;
        this.bhInfo = {
            bhName: '',
            kindOfBusiness: '',
            bhAddress: {
                fullAddress: '',
                districtName: '',
                long: 0,
                lat: 0
            },
            numberOfRooms: 0,
            rate: {
                minRate: 0,
                maxRate: 0,
            },
            bhPermit: {
                businessPermitNumber: '',
                certificateNumber: '',
                dateIssued: '',
                dateExpiry: '',
            },
            district: '',

            exclusivity: '',
            hasAirconRooms: '',
        };
    }
    //action
    //addBoardinghouse
    //client->CRUD

    //submitForm
    @action
    submitForm = async () => {
        const bh = await this.client.service('/api/boardingHouse').create(this.bhInfo);
        runInAction(async () => {
            this._boardingHouses = await this.client.service('/api/boardingHouse').find();
        });
        this.finished = !this.finished;
    }

    @action
    loadBoardingHouse = async () => {
        const bh = await this.client.service('/api/boardingHouse').find();
        runInAction(() => {
            this._boardingHouses = bh;
        })
    }

    @action
    resetFilters = () => {
        this.filter = {
            exclusivity: 'Male',
            districtName: 'Jaro',
            hasAirconRooms: 'Yes',
            minRate: 500,
            maxRate: 3500
        }
    }

    @action
    deleteBh = async () => {
        const toBeDeleted = await this.client.service('/api/boardingHouse').remove(this.selectedBh._id);
        console.log(toBeDeleted._id);
        runInAction(() => {
            this._boardingHouses = this._boardingHouses.filter(bh => bh._id !== toBeDeleted._id);
        })
        this.handleCloseModal("deleteModal");
    }

    @action
    saveEdit = async () => {
        const toEdit = await this.client.service('/api/boardingHouse').patch(this.selectedBh._id, this.selectedBh);
        runInAction(async () => {
            const index = this._boardingHouses.indexOf(x => x._id === toEdit._id);
            this._boardingHouses[index] = toEdit;
            // this._boardingHouses = await this.client.service('/api/boardingHouses').find()
        });
        // this.handleCloseModal("openModal");
    }

    @action
    setSelectedBh = (id) => {
        if (this.boardingHouses.length !== 0) {
            const index = this.boardingHouses.findIndex(x => x._id === id);
            this._selectedBh = this.boardingHouses[index];
        }
    }

    @computed
    get boardingHouses() {
        return this._boardingHouses;
    }

    @computed
    get selectedBh() {
        return this._selectedBh;
    }
}

export default BoardingHouseStore;