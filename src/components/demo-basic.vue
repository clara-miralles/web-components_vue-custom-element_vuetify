<template>
  <div>
    <h4>{{ message }}</h4>

    <el-table :data="tableData">
      <el-table-column prop="prop" label="Prop name"></el-table-column>
      <el-table-column prop="value" label="Value"></el-table-column>
      <el-table-column prop="type" label="typeof"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'DemoBasic',
    props: {
      prop1: {},
      prop2: {},
      prop3: {},
      stringProp: {
        type: String
      },
      booleanProp: {
        type: Boolean
      },
      numberProp: {
        type: Number
      },
      longPropName: {},
      objectProp: {},
      arrayProp: {}
    },
    data() {
      return {
        message: 'Hello Vue-custom-element!'
      };
    },
    computed: {
      tableData() {
        const data = [{
          prop: 'prop1',
          value: JSON.stringify(this.prop1),
          type: typeof this.prop1
        }, {
          prop: 'prop2',
          value: JSON.stringify(this.prop2),
          type: typeof this.prop2
        }, {
          prop: 'prop3',
          value: JSON.stringify(this.prop3),
          type: typeof this.prop3
        }, {
          prop: 'stringProp (type: String)',
          value: this.stringProp,
          type: typeof this.stringProp
        }, {
          prop: 'booleanProp (type: Boolean)',
          value: this.booleanProp,
          type: typeof this.booleanProp
        }, {
          prop: 'numberProp (type: Number)',
          value: this.numberProp,
          type: typeof this.numberProp
        }, {
          prop: 'long-prop-name',
          value: JSON.stringify(this.longPropName),
          type: typeof this.longPropName
        }];

        this.objectProp && data.push({
          prop: 'objectProp',
          value: this.objectProp,
          type: typeof this.objectProp
        });

        this.arrayProp && data.push({
          prop: 'arrayProp',
          value: this.arrayProp,
          type: typeof this.arrayProp
        });

        return data;
      }
    },
    created() {
      console.log('demo-basic created()');
    }
  };
</script>
        