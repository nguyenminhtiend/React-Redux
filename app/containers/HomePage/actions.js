import {
  CHANGE_USERNAME,
  LOADED_QUOTATION,
  DO_LOAD_QUOTATION
} from './constants';

export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name
  };
}

export function doLoadQuotation() {
  return {
    type: DO_LOAD_QUOTATION
  };
}

export function loadQuotation(quotations) {
  return {
    type: LOADED_QUOTATION,
    quotations
  };
}
