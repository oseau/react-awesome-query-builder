import React, { Component } from "react";
import { Query, Builder, Preview, Utils } from "react-awesome-query-builder";
const { queryString } = Utils;
import { queryBuilderFormatCustom } from "../../modules/utils/queryBuilderFormatCustom";
import config from "./config";
var stringify = require("json-stringify-safe");
import "../../css/reset.scss";
import "../../css/styles.scss";
import "../../css/compact_styles.scss";
import "../../css/denormalize.scss";
const Immutable = require("immutable");
const transit = require("transit-immutable-js");

export default class DemoQueryBuilder extends Component {
  getChildren(props) {
    const jsonStyle = {
      backgroundColor: "darkgrey",
      margin: "10px",
      padding: "10px"
    };
    return (
      <div style={{ padding: "10px" }}>
        <div className="query-builder">
          <Builder {...props} />
        </div>
        <br />
        <div>
          queryBuilderFormatCustom:
          <pre style={jsonStyle}>
            {stringify(
              queryBuilderFormatCustom(props.tree, props.config),
              undefined,
              2
            )}
          </pre>
        </div>
        <hr />
        <div>
          Immutable Tree:
          <div style={jsonStyle}>{transit.toJSON(props.tree)}</div>
        </div>
      </div>
    );
  }

  render() {
    let initValueJSON =
      '["~#iM",["type","group","id","9a99988a-0123-4456-b89a-b1607f326fd8","children1",["~#iOM",["aa8babba-0123-4456-b89a-b163f721bcf2",["^0",["type","rule","id","aa8babba-0123-4456-b89a-b163f721bcf2","properties",["^0",["field","status","operator","select_any_in","value",["~#iL",[["good","pending"]]],"valueSrc",["^2",["value"]],"operatorOptions",null,"valueType",["^2",["multiselect"]]]],"path",["^2",["9a99988a-0123-4456-b89a-b1607f326fd8","aa8babba-0123-4456-b89a-b163f721bcf2"]]]],"8bbbb88a-0123-4456-b89a-b163f3ca4d1c",["^0",["type","rule","id","8bbbb88a-0123-4456-b89a-b163f3ca4d1c","properties",["^0",["field","gender","operator","select_equals","value",["^2",["male"]],"valueSrc",["^2",["value"]],"operatorOptions",null,"valueType",["^2",["select"]]]],"path",["^2",["9a99988a-0123-4456-b89a-b1607f326fd8","8bbbb88a-0123-4456-b89a-b163f3ca4d1c"]]]],"a98ab9b9-cdef-4012-b456-71607f326fd9",["^0",["type","rule","id","a98ab9b9-cdef-4012-b456-71607f326fd9","properties",["^0",["field","userName","operator","match","value",["^2",["~^[a-zA-Z]{1,2}$"]],"valueSrc",["^2",["value"]],"operatorOptions",null,"valueType",["^2",["text"]]]],"path",["^2",["9a99988a-0123-4456-b89a-b1607f326fd8","a98ab9b9-cdef-4012-b456-71607f326fd9"]]]],"baaa99ab-cdef-4012-b456-7163f3caa19d",["^0",["type","group","id","baaa99ab-cdef-4012-b456-7163f3caa19d","properties",["^0",["conjunction","OR"]],"path",["^2",["9a99988a-0123-4456-b89a-b1607f326fd8","baaa99ab-cdef-4012-b456-7163f3caa19d"]],"children1",["^1",["99a9abb8-0123-4456-b89a-b163f3b80f68",["^0",["type","rule","id","99a9abb8-0123-4456-b89a-b163f3b80f68","properties",["^0",["field","phoneNumber","operator","match","value",["^2",["~^86 177.*$"]],"valueSrc",["^2",["value"]],"operatorOptions",null,"valueType",["^2",["text"]]]],"path",["^2",["9a99988a-0123-4456-b89a-b1607f326fd8","baaa99ab-cdef-4012-b456-7163f3caa19d","99a9abb8-0123-4456-b89a-b163f3b80f68"]]]],"99b99aaa-0123-4456-b89a-b163f3c17111",["^0",["type","rule","id","99b99aaa-0123-4456-b89a-b163f3c17111","properties",["^0",["field","timeRegister","operator","between","value",["^2",["2018-06-11 19:29","2018-06-12 19:29"]],"valueSrc",["^2",["value","value"]],"operatorOptions",null,"valueType",["^2",["datetime","datetime"]]]],"path",["^2",["9a99988a-0123-4456-b89a-b1607f326fd8","baaa99ab-cdef-4012-b456-7163f3caa19d","99b99aaa-0123-4456-b89a-b163f3c17111"]]]],"a8a9aaa9-cdef-4012-b456-7163f72215f7",["^0",["type","rule","id","a8a9aaa9-cdef-4012-b456-7163f72215f7","properties",["^0",["field","countYellowFrame","operator","greater_or_equal","value",["^2",[3]],"valueSrc",["^2",["value"]],"operatorOptions",null,"valueType",["^2",["number"]]]],"path",["^2",["9a99988a-0123-4456-b89a-b1607f326fd8","baaa99ab-cdef-4012-b456-7163f3caa19d","a8a9aaa9-cdef-4012-b456-7163f72215f7"]]]]]]]]]],"properties",["^0",["conjunction","AND","not",false]],"path",["^2",["9a99988a-0123-4456-b89a-b1607f326fd8"]]]]';

    const { tree, ...config_props } = config;

    return (
      <div>
        <Query
          value={transit.fromJSON(initValueJSON)}
          {...config_props}
          get_children={this.getChildren}
        />
      </div>
    );
  }
}
