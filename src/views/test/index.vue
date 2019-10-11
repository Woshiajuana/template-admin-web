<template>
    <div class="wrap">
        <filter-view
            :filter-form="objFilterForm"
            :filter-button="arrFilterButton"
            @filter="reqTableDataList"
        ></filter-view>
        <span>业务页面</span>
    </div>
</template>

<script>
    import DialogMixin from '@/mixins/dialog'
    import FilterMixin from '@/mixins/filter'
    import DataMixin from './data.mixin'

    export default {
        name: 'AdminUser',
        mixins: [
            DataMixin,
            DialogMixin,
            FilterMixin,
        ],
    }
</script>

<style lang="scss" scoped>
    @import "~@assets/scss/define.scss";
    .inner{
        @extend %bsb;
        padding: 10px;
    }
</style>
