"use strict";
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
    return {
      operator: properties.get("operator"),
      field: properties.get("field"),
      value: flatten(properties.get("value"))
    };
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
