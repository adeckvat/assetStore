import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'SFP'},
            {id: 2, name: 'SFP+'},
            {id: 3, name: 'QSFP'},
            {id: 4, name: 'MPO/MTP'},
        ]
        this._brands = [
            {id: 1, name: 'Cisco'},
            {id: 2, name: 'Juniper'},
            {id: 3, name: 'SAN'},
            {id: 4, name: 'Hauawei'},
        ]
        this._devices = [
                {id: 1, name: 'SFP GCW', price: 1500, rating: 4, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
                {id: 2, name: 'SFP GCW', price: 1500, rating: 4, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
                {id: 3, name: 'SFP GCW', price: 1500, rating: 4, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
                {id: 4, name: 'SFP GCW', price: 1500, rating: 4, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
                {id: 5, name: 'SFP GCW', price: 1500, rating: 4, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
                {id: 6, name: 'SFP GCW', price: 1500, rating: 4, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
                {id: 7, name: 'SFP GCW', price: 1500, rating: 4, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
                {id: 8, name: 'SFP GCW', price: 1500, rating: 4, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types 
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType(){
       return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
     }
}