angular.module('kidztimeApp')
    .component('cartGenericSelector', {
        templateUrl: '/dist/components/page-cart/cart-generic-selector/cart-generic-selector.component.html',
        bindings: {
            model: '=',
            isEditMode: '<',
            update: '&',
            cancel: '&'
        },
        controller: [
            '$scope',
            function($scope) {
                $scope.isEditMode = false;
                $scope.productBeforeEdit = null;

                this.$onInit = () => {
                    $scope.selector = new SelectorList({
                        sourceArr: $scope.$ctrl.model.selectedItemsIndexes,
                        itemsArr: $scope.$ctrl.model.availableItems,
                        maxCount: $scope.$ctrl.model.maxItems,
                        visibleCount: $scope.$ctrl.model.visibleItemsCount,
                        singleSelectMode: $scope.$ctrl.model.singleSelectMode
                    });
                };

                $scope.formatPrice = (value) => {
                    return `$ ${value.toFixed(2)}`;
                };

                $scope.getAccessoryTotalPrice = (accessoryItems) => {
                    return accessoryItems
                        .reduce((sum, item) => sum + item.price * item.quantity, 0);
                };

                $scope.getSelectorContainerWidth = () => {
                    return `${$scope.$ctrl.model.visibleItemsCount * 56}px`
                };

                class SelectorList {
                    constructor(props) {
                        const {
                            sourceArr,
                            itemsArr,
                            maxCount,
                            visibleCount,
                            singleSelectMode
                        } = props;

                        this.sourceArr = sourceArr;
                        this.itemsArr = itemsArr;
                        this.maxCount = maxCount;
                        this.visibleCount = visibleCount;
                        this.singleSelectMode = singleSelectMode;

                        this.init();
                    }

                    init() {
                        this.sourceArr.forEach((item, index) => {
                            const isObject = typeof item === 'object';

                            if (!isObject) {
                                this.sourceArr[index] = {
                                    index: item
                                }
                            }
                        });

                        this.sourceArr.forEach((item) => {
                            this.itemsArr[item.index].quantity += 1;
                        });

                        Array
                            .from({length: this.visibleCount - this.sourceArr.length})
                            .forEach(() => {
                                this.sourceArr.push(this.generateEmptyItem());
                            });
                    }

                    addItem(item) {
                        if (this.isMaxCountReached()) {
                            return;
                        }

                        const index = this.itemsArr.indexOf(item);
                        const isSelected = this.sourceArr.includes(index);

                        item.quantity += 1;

                        if (isSelected) {
                            return;
                        }

                        let emptyCellIndex = this.sourceArr
                            .findIndex((item) => this.isEmptyItem(item));

                        if (emptyCellIndex === -1) {
                            emptyCellIndex = this.sourceArr.length;
                        }

                        this.sourceArr[emptyCellIndex] = { index };
                    }

                    removeItem(item, minValue = 0) {
                        const index = this.itemsArr.indexOf(item);

                        if (item.quantity > minValue) {
                            item.quantity -= 1;
                        }

                        const isSelected = this.sourceArr.some((item) => item.index === index);

                        if (!isSelected) {
                            return;
                        }

                        const cellIndex = this.sourceArr.findIndex((item) => item.index === index);

                        const newArr = this.sourceArr
                            .slice(0, cellIndex)
                            .concat(this.sourceArr.slice(cellIndex + 1));

                        if (this.sourceArr.length <= this.visibleCount) {
                            newArr.push(this.generateEmptyItem());
                        }

                        this.sourceArr.splice(0, this.sourceArr.length);
                        this.sourceArr.push(...newArr);
                    }

                    toggleItem(item) {
                        if (this.isItemSelected(item)) {
                            this.removeItem(item);
                        } else {
                            this.addItem(item);
                        }
                    }

                    generateEmptyItem() {
                        return { index: 'none' };
                    }

                    isEmptyItem(item) {
                        return item.index === 'none';
                    }

                    getItemModel(item) {
                        if (this.isEmptyItem(item)) {
                            return null;
                        }
                        return this.itemsArr[item.index];
                    }

                    isMaxCountReached() {
                        const selectedItems = this.sourceArr.filter((item) => !this.isEmptyItem(item));
                        return this.maxCount !== 'none' && selectedItems.length >= this.maxCount;
                    }

                    isItemSelected(item) {
                        const index = this.itemsArr.indexOf(item);
                        return this.sourceArr.some((item) => item.index === index);
                    }
                }

            }]
    });
