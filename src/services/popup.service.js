const POPUP_STATE_OPENED = 'opened';
const POPUP_STATE_CLOSED = 'closed';
const POPUP_EVENT_STATE_CHANGED = 'stateChanged';

class PopupService {
    constructor($q) {
        this.$q = $q;
        this._storeMap = new Map();
        this.popupStates = {
            POPUP_STATE_OPENED,
            POPUP_STATE_CLOSED
        };
        this.popupEvents = {
            POPUP_EVENT_STATE_CHANGED
        };
        this.PopupModel = PopupModel;
    }

    static init() {
        return [
            '$q',
            PopupService
        ];
    }

    register(name, model) {
        if (this._storeMap.has(name)) {
            console.warn(`$popup already has registered popup with name = '${name}'. The old one will be overwritten.`)
        }
        this._storeMap.set(name, model);
    }

    unregister(name) {
        this._storeMap.delete(name);
    }

    get(name) {
        return this._storeMap.get(name);
    }

    // getAsync(name) {
    //     if (this._storeMap.has(name)) {
    //         return this.$q.resolve(this._storeMap.get(name));
    //     }
    // }
}

class PopupModel {
    constructor(name) {
        this.state = POPUP_STATE_CLOSED;
        this._name = name;
    }

    open() {
        this.state = POPUP_STATE_OPENED;
    }

    close() {
        this.state = POPUP_STATE_CLOSED;
    }

    isOpened() {
        return this.state === POPUP_STATE_OPENED;
    }
}

angular.module('kidztimeApp')
    .service('$popup', PopupService.init());
