function transform(data, model) {
    return new model(data);
}

function mapAndTransform(data, model) {
    return data.map(result => transform(result, model));
}

function handleData(data, model) {
    return data instanceof Array ?
        mapAndTransform(data, model) :
        transform(data, model)
}

function transformHook(model) {
    return function (hookDetails) {
        const property = hookDetails.type === 'before' ? 'data' : 'result';
        let data = hookDetails[property];
        const handledData = handleData(data, model);
        hookDetails[property] = handledData;
        return hookDetails;
    }
}

export default transformHook;