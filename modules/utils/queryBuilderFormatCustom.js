"use strict";
import isArray from "lodash/isArray";
import { defaultValue } from "./stuff";
import {
  getFieldConfig,
  getWidgetForFieldOp,
  getOperatorConfig,
  getFieldWidgetConfig,
  fieldWidgetDefinition
} from "./configUtils";
import omit from "lodash/omit";

let flatten = in_ => {
  if (in_.size == 1) {
    return flatten(in_.get(0));
  }
  return in_;
};
export const queryBuilderFormatCustom = (item, config) => {
  const properties = item.get("properties");

  if (item.get("type") === "rule") {
    let valueTemp = flatten(properties.get("value"));
    if (isArray(valueTemp) || valueTemp.size > 1) {
      if (valueTemp.size > 1) {
        valueTemp = valueTemp.toJS();
      }
      return {
        operator: properties.get("operator"),
        field: properties.get("field"),
        values: valueTemp.map(i => i.toString())
      };
    } else {
      return {
        operator: properties.get("operator"),
        field: properties.get("field"),
        value: valueTemp.toString()
      };
    }
  } else {
    return {
      rules: item
        .get("children1")
        .map(currentChild => {
          return queryBuilderFormatCustom(currentChild, config);
        })
        .toArray(),
      conjunction: properties.get("conjunction"),
      not: properties.get("not") || false
    };
  }
};
