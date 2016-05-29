import _ from 'lodash';

function handleInputChange(object, fieldName, value) {
  _.set(object, fieldName, value);
}

function handleValueChangeAndUpdateComponent(object, fieldName, value) {
  handleInputChange(object, fieldName, value);
  this.forceUpdate();
}

function handleInputChangeAndUpdateComponent(object, fieldName, event) {
  handleValueChangeAndUpdateComponent(object, fieldName, event.target.value);
}

function handleChangeAndUpdateComponent(object, fieldName, data) {
  if(_.isObject(data)) handleInputChangeAndUpdateComponent(object, fieldName, data);
  if(_.isString(data)) handleValueChangeAndUpdateComponent(object, fieldName, data);
}

function handleBooleanInputChange(object, fieldName, event) {
  const oldValue = _.result(object, fieldName);
  let newValue = parseStringToBoolen(event.target.value);
  if(oldValue === newValue) newValue = !newValue;
  _.set(object, fieldName, newValue);
}

function parseStringToBoolen(stringValue) {
  if(stringValue === 'true') return true;
  return false;
}

function handleBooleanInputChangeAndUpdateComponent(object, fieldName, event) {
  handleBooleanInputChange(object, fieldName, event);
  this.forceUpdate();
}

function focusInputByRef(component, refName = 'focus') {
  !!component.refs[refName] && component.refs[refName].focus();
}

export {
  handleInputChange,
  handleChangeAndUpdateComponent,
  handleInputChangeAndUpdateComponent,
  handleValueChangeAndUpdateComponent,
  handleBooleanInputChange,
  handleBooleanInputChangeAndUpdateComponent,
  focusInputByRef
};
