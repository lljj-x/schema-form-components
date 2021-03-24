/** @license @lljj/schema-form-components (c) 2020-2021 Jino License: MIT */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@lljj/vue-json-schema-form')) :
  typeof define === 'function' && define.amd ? define(['exports', '@lljj/vue-json-schema-form'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.schemaFormComponents = {}, global.vueJsonSchemaForm));
}(this, (function (exports, vueJsonSchemaForm) { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var script = {
    name: 'TabField',
    components: {
      SchemaField: vueJsonSchemaForm.SchemaField
    },
    props: _objectSpread2(_objectSpread2({}, vueJsonSchemaForm.fieldProps), {}, {
      fieldProps: {
        type: null,
        default: null
      }
    }),
    data: function data() {
      return {
        activeName: this.getProperties()[0]
      };
    },
    computed: {
      tabs: function tabs() {
        var _this = this;

        var _this$$props = this.$props,
            schema = _this$$props.schema,
            uiSchema = _this$$props.uiSchema,
            errorSchema = _this$$props.errorSchema;

        var isRequired = function isRequired(name) {
          return Array.isArray(schema.required) && !!~schema.required.indexOf(name);
        };

        var properties = this.getProperties();
        var res = properties.map(function (name) {
          return {
            name: name,
            title: schema.properties[name].title,
            schemaProps: _objectSpread2(_objectSpread2({}, _this.$props), {}, {
              schema: _objectSpread2(_objectSpread2({}, schema.properties[name]), {}, {
                title: ''
              }),
              uiSchema: uiSchema[name],
              errorSchema: errorSchema[name],
              required: isRequired(name),
              curNodePath: vueJsonSchemaForm.vueUtils.computedCurPath(_this.curNodePath, name)
            })
          };
        });
        return res;
      }
    },
    methods: {
      getProperties: function getProperties() {
        return Object.keys(this.schema.properties || {});
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("el-tabs", {
      model: {
        value: _vm.activeName,
        callback: function callback($$v) {
          _vm.activeName = $$v;
        },
        expression: "activeName"
      }
    }, _vm._l(_vm.tabs, function (item) {
      return _c("el-tab-pane", {
        key: item.name,
        attrs: {
          label: item.title,
          name: item.name
        }
      }, [_c("SchemaField", _vm._b({}, "SchemaField", item.schemaProps, false))], 1);
    }), 1);
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  /* style */

  var __vue_inject_styles__ = undefined;
  /* scoped */

  var __vue_scope_id__ = undefined;
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = /*#__PURE__*/normalizeComponent_1({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

  exports.TabField = __vue_component__;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
