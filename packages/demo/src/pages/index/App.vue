<template>
    <div :class="$style.box">
        <VueForm
            v-model="formData"
            :schema="schema"
        >
        </VueForm>
    </div>
</template>

<script>
import VueForm from '@lljj/vue-json-schema-form';
import { TabField } from '@lljj/schema-form-components/src/index';

export default {
    name: 'App',
    components: {
        VueForm
    },
    data() {
        return {
            formData: {},
            schema: {
                title: '测试注册表单',
                description: 'A simple form example.',
                type: 'object',
                required: [
                    'firstName',
                    'lastName'
                ],
                'ui:field': TabField,
                properties: {
                    tab1: {
                        type: 'object',
                        title: 'Tab1',
                        description: 'tab1 description',
                        properties: {
                            firstName: {
                                type: 'string',
                                title: 'First name',
                                default: 'Jun'
                            },
                            lastName: {
                                type: 'string',
                                title: 'Last name',
                                'ui:options': {
                                    description: '请输入你的姓'
                                },
                                'err:required': '必须输入Last Name'
                            }
                        }
                    },
                    tab2: {
                        type: 'object',
                        title: 'Tab2',
                        description: 'tab2 description',
                        properties: {
                            price: {
                                type: 'string',
                                description: '最多输入两位小数点，最大值 999999.99',
                                title: '价格',
                                format: 'price'
                            },
                            age: {
                                type: 'integer',
                                title: 'Age',
                                maximum: 80,
                                minimum: 16
                            },
                        }
                    },
                    tab3: {
                        type: 'object',
                        title: 'Tab3',
                        description: 'tab1 description',
                        properties: {
                            bio: {
                                type: 'string',
                                title: 'Bio',
                                minLength: 10
                            },
                            password: {
                                type: 'string',
                                title: 'Password',
                                minLength: 3
                            },
                            telephone: {
                                type: 'string',
                                title: 'Telephone',
                                minLength: 10
                            }
                        }
                    }
                }
            }
        };
    },
    created() {
    },
    mounted() {
    },
    methods: {}
};
</script>

<style module>
.box {
    margin: 0 auto;
    max-width: 700px;
}
</style>
