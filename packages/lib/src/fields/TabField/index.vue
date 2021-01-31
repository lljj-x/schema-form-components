<template>
    <el-tabs
        v-model="activeName"
        style="margin-bottom: 22px;"
    >
        <el-tab-pane
            v-for="item in tabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
        >
            <SchemaField v-bind="item.schemaProps"></SchemaField>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import {
    fieldProps,
    vueUtils,
    /* formUtils,
    schemaValidate, */
    SchemaField
} from '@lljj/vue-json-schema-form';

export default {
    name: 'TabField',
    components: {
        SchemaField
    },
    props: {
        ...fieldProps,
        fieldProps: {
            type: null,
            default: null
        }
    },
    data() {
        return {
            activeName: this.getProperties()[0]
        };
    },
    computed: {
        tabs() {
            const { schema, uiSchema, errorSchema } = this.$props;
            const isRequired = name => Array.isArray(schema.required) && !!~schema.required.indexOf(name);
            const properties = this.getProperties();
            const res = properties.map(name => ({
                name,
                title: schema.properties[name].title,
                schemaProps: {
                    ...this.$props,
                    schema: {
                        ...schema.properties[name],
                        title: ''
                    },
                    uiSchema: uiSchema[name],
                    errorSchema: errorSchema[name],
                    required: isRequired(name),
                    curNodePath: vueUtils.computedCurPath(this.curNodePath, name)
                }
            }));
            return res;
        }
    },
    methods: {
        getProperties() {
            return Object.keys(this.schema.properties || {});
        }
    }
};
</script>
