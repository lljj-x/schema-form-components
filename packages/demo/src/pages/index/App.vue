<template>
    <div class="box">
        <div class="item">
            <div class="item_header">
                <h2>Tabs Field</h2>
                <el-button
                    class="header_btn"
                    type="primary"
                    size="small"
                    @click="showConfig('Tab')"
                >
                    查看配置
                </el-button>
            </div>
            <Tab ref="tab"></Tab>
        </div>
    </div>
</template>

<script>
import Tab from './components/Tab';
import showCode from './component-code-with-dialog';

export default {
    components: {
        Tab
    },
    methods: {
        showConfig(refKey) {
            const path = `https://github.com/lljj-x/schema-form-components/tree/main/packages/demo/src/pages/index/components/${refKey}.vue`;

            showCode(
                JSON.stringify(this.$refs[String(refKey).toLocaleLowerCase()].$data.schema, null, 2),
                path
            );
        }
    }
};
</script>

<style>
.box {
    width: 700px;
    margin: 0 auto;
}
.el-tabs {
    margin-bottom: 0;
}
.item {
    padding: 0 20px;
    border: 1px solid #ccc;
    border-radius: 6px;
    &+.item {
        margin-top: 20px;
    }
    .item_header {
        display: flex;
        align-items: center;
    }
    .header_btn {
        margin-left: 20px;
    }
}
</style>
