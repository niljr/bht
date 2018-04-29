function keyValidationHook() {
    return async function (hookDetails) {
        const data = hookDetails['data'];
        const bhs = await hookDetails.app.service('/api/boardingHouse').find();
        const bool = bhs.filter(x => ((x.key === data.key) && x.isAvailable));
        return bool.length > 0 ? extract(hookDetails, bool) : Promise.reject(new Error("Invalid Key"));
    }
}

async function extract(hookDetails, bool) {
    const bh = await hookDetails.app.service('/api/boardingHouse').patch(bool[0]._id, { isAvailable: false });
    return hookDetails;
}


export default keyValidationHook;